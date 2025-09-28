<template>
  <div class="silence-icon">
    <slot />
  </div>
</template>

<style scoped>
.silence-icon {
  height: 24px;
  width: 24px;
  color: var(--text-color);
}

.silence-icon > :deep(svg) {
  max-height: 100%;
}
</style>
