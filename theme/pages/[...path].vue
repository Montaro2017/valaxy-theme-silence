<template>
  <div class="min-h-500px flex flex-col items-center justify-center">
    <span>
      当前页面不存在，请检查 URL 是否正确。
    </span>
    <app-link to="/" class="m-t-32px">
      <silence-button>返回首页</silence-button>
    </app-link>
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
