---
layout: post
title: 解决logstash从数据库导入es不分页问题
date: 2025-10-09 09:34:44
---

## 背景

现有一个需求是将SQLServer数据库中的数据导入es，先尝试导入一万条数据没问题，再尝试一百万条数据，结果OutOfMemory了。

## 解决

先看配置文件

```
input {
    jdbc {
        jdbc_connection_string => "jdbc:sqlserver://192.168.18.11:1433;databaseName=xxx;encrypt=false;trustServerCertificate=true"
        jdbc_user => "xxx"
        jdbc_password => "xxx"
        jdbc_driver_library => "D:\Dependencies\com\microsoft\sqlserver\mssql-jdbc\12.10.0.jre11\mssql-jdbc-12.10.0.jre11.jar"
        jdbc_driver_class => "com.microsoft.sqlserver.jdbc.SQLServerDriver"

        statement => "
            SELECT [T1].* FROM (
                SELECT TOP 1000000 Id               as id
                ...
                FROM XXX
                ORDER BY CreateTime
            ) AS [T1]
        "

        jdbc_paging_enabled => true
        jdbc_page_size => 1000
    }
}

output {
    elasticsearch {
        hosts => ["http://localhost:9200"]
        index => "xxx"

        user => "xxx"
        password => "xxx"

        manage_template => false
    }

    stdout {
        codec => json_lines
    }
}
```

配置文件中已经指定了开启分页并且分页大小为1000，但是logstash的日志表明并没有进行分页。

```
[2025-08-29T09:34:25,052][INFO ][logstash.inputs.jdbc     ][main][bd0992d88f2a66ffc753bcc68a0bbb48df75494daedec02157801085049bdb26] (0.037215s)
            SELECT [T1].* FROM (
              SELECT TOP 1000000 Id      as id,
               ...
              ORDER BY CreateTime
            FROM xxx) AS [T1]
```

网上也没有找到结果，于是再把TOP 1000000改回 TOP 10000，结果又能正常分页，logstash的日志中输出了分页的SQL

```
[2025-08-29T09:45:01,147][INFO ][logstash.inputs.jdbc     ][main][aad65b12b132c022e94af517db85b200a7c90d63f66609de911ca77bf05099bf] (0.092056s) SELECT [T1].* FROM (
            SELECT TOP 10000 Id               as id,
                ...
        ORDER BY CreateTime
        ) AS [T1] ORDER BY 1 OFFSET 0 ROWS FETCH NEXT 1000 ROWS ONLY
```

说明分页配置并没有问题，而是有某种原因让logstash选择不分页。

然后在Github上找到了这个issues [java heapspace error](https://github.com/elastic/logstash/issues/4570)，顺着解答找到了logstash文档中分页相关的内容。

https://www.elastic.co/docs/reference/logstash/plugins/plugins-inputs-jdbc#plugins-inputs-jdbc-jdbc_paging_mode

发现了一个叫`jdbc_paging_mode`的参数，因为默认值是auto，尝试将其设置为`explicit`，结果果然好了。

```
input {
    jdbc {
        jdbc_connection_string => "jdbc:sqlserver://192.168.18.11:1433;databaseName=xxx;encrypt=false;trustServerCertificate=true"
        jdbc_user => "xxx"
        jdbc_password => "xxx"
        jdbc_driver_library => "D:\Dependencies\com\microsoft\sqlserver\mssql-jdbc\12.10.0.jre11\mssql-jdbc-12.10.0.jre11.jar"
        jdbc_driver_class => "com.microsoft.sqlserver.jdbc.SQLServerDriver"

        statement => "
            SELECT [T1].* FROM (
                SELECT TOP 1000000 Id               as id
                ...
                FROM XXX
                ORDER BY CreateTime
            ) AS [T1]
        "

        jdbc_paging_enabled => true
        jdbc_paging_mode => "explicit"
        jdbc_page_size => 1000
    }
}

output {
    elasticsearch {
        hosts => ["http://localhost:9200"]
        index => "xxx"

        user => "xxx"
        password => "xxx"

        manage_template => false
    }

    stdout {
        codec => json_lines
    }
}
```
