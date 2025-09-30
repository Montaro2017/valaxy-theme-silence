<script lang="ts" setup>
import type { dayjs } from 'valaxy'
import { useArchives } from '../utils/archive'
import { getPostLink } from '../utils/route'

const archives = useArchives()

function toMonthDay(date: dayjs.Dayjs) {
  return date.format('MM-DD')
}
</script>

<template>
  <silence-content-block title="文章归档" class="silence-archives">
    <silence-collapse v-for="[yearMonth, { date, posts }] in archives" :key="yearMonth" :default-collapse="false">
      <template #default="{ toggle, collapse }">
        <div class="silence-archive-title" @click="toggle">
          <div class="silence-archive-title-left">
            <div class="silence-archive-title-icon" :class="{ expand: !collapse }">
              <silence-icon icon="i-material-symbols-light-arrow-right" class="text-2xl" />
            </div>
            <div class="silence-archive-date">
              {{ yearMonth }}
            </div>
          </div>
          <div class="silence-archive-count">
            {{ posts.length }}
          </div>
        </div>
      </template>
      <template #content>
        <div class="silence-archive-posts">
          <div v-for="post in posts" :key="post.title as string" class="silence-archive-post">
            <div class="silence-archive-post-date">
              <silence-icon icon="i-material-symbols-light-calendar-month" />
              {{ toMonthDay(date) }}
            </div>
            <div class="silence-archive-post-title">
              <app-link :to="getPostLink(post)">
                {{ post.title }}
              </app-link>
            </div>
          </div>
        </div>
      </template>
    </silence-collapse>
  </silence-content-block>
</template>

<style>
.silence-archive-title {
  display: flex;
  cursor: pointer;
  padding: 8px;
  user-select: none;
  justify-content: space-between;
}

.silence-archive-title:hover {
  background-color: var(--panel-bg-color);
}

.silence-archive-title-left {
  display: flex;
}

.silence-archive-title-icon {
  transition: transform 0.2s ease;
}

.silence-archive-title-icon.expand {
  transform: rotate(90deg);
}

.silence-archive-date {
  font-size: 16px;
  font-weight: 400;
}

.silence-archive-count {
  padding: 0 10px;
  border-radius: 4px;
  background-color: var(--panel-bg-color);
}

.silence-archive-title:hover .silence-archive-count {
  background-color: var(--blog-bg-color);
}

.silence-archive-posts {
  padding-left: 40px;
}

.silence-archive-post {
  display: flex;
  gap: 8px;
  height: 32px;
  align-items: center;
  flex-wrap: nowrap;
}

.silence-archive-post-date,
.silence-archive-post-title {
  white-space: nowrap;
}

.silence-archive-post-date {
  display: flex;
  gap: 4px;
  align-items: center;
}

.silence-archive-post-title {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
