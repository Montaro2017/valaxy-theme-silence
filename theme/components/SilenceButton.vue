<template>
  <button class="silence-button">
    <slot />
  </button>
</template>

<style scoped>
.silence-button {
  border-radius: 4px;
  padding: 0 10px;
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  border: 1px solid var(--border-color);
}

button:hover {
  color: var(--theme-color) !important;
  border-color: var(--theme-color);
}
</style>
