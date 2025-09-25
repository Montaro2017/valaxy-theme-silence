<template>
  <silence-sidebar-block title="搜索">
    <div class="silence-sidebar-search">
      <input type="text">
      <button>找找看</button>
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

button {
  border-radius: 4px;
  padding: 0 6px;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  border: 1px solid var(--border-color);
}

button:hover {
  color: var(--theme-color) !important;
  border-color: var(--theme-color);
}
</style>
