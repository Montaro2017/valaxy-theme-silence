<script lang="ts" setup>
import { useSiteConfig } from 'valaxy'
import { computed } from 'vue'

const sponsor = computed(() => useSiteConfig().value.sponsor)
</script>

<template>
  <div class="silence-sponsor">
    <div class="silence-sponsor-text">
      {{ sponsor.description }}
    </div>
    <div class="silence-sponsor-items">
      <div v-for="method in sponsor.methods" :key="method.name" class="sponsor-item">
        <silence-icon :icon="method.icon" />
        <div class="silence-sponsor-qr-code">
          <img :src="method.url" :alt="method.name">
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.silence-sponsor {
  padding: 100px 0;
}

.silence-sponsor-text {
  font-size: 17px;
  margin-bottom: 15px;
  font-weight: 400;
  opacity: 0.8;
  text-align: center;
}

.silence-sponsor-items {
  display: flex;
  position: relative;
  justify-content: center;
}

.sponsor-item {
  width: 60px;
  padding: 6px 3px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  box-sizing: content-box;
  border: 1px solid var(--border-color);
  border-right-width: 0;
}

.sponsor-item:hover {
  background-color: var(--panel-bg-color);
}

.silence-sponsor-items .sponsor-item:last-child {
  border-right-width: 1px;
}

.sponsor-item .silence-icon {
  font-size: 21px;
  opacity: 0.5;
  background-color: var(--text-color);
}

.silence-sponsor-qr-code {
  position: absolute;
  width: 200px;
  height: 200px;
  left: 50%;
  top: 0;
  display: none;
  transform: translate(-50%, calc(-100% - 20px));
  background: var(--blog-bg-color);
  box-shadow: var(--pane-box-shadow);
}

.silence-sponsor-qr-code img {
  width: 180px;
  height: 180px;
  margin: 10px;
}

.sponsor-item:hover .silence-sponsor-qr-code {
  display: block;
}
</style>
