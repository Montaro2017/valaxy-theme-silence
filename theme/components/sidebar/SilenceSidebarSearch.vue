<template>
  <silence-sidebar-block title="搜索">
    <div class="silence-sidebar-search">
      <input type="text">
      <silence-button>找找看</silence-button>
    </div>
  </silence-sidebar-block>
</template>

<style scoped>
.silence-sidebar-search {
  gap: 4px;
  display: flex;
}

.silence-sidebar-search > * {
  height: 32px;
}

input {
  min-width: 0;
  padding: 0 6px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid var(--border-color);
}
</style>
