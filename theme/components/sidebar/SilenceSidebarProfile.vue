<script lang="ts" setup>
import { useSiteConfig } from 'valaxy'
import { computed } from 'vue'
import { useThemeConfig } from '../../composables'

const themeConfig = useThemeConfig()
const avatar = computed(() => themeConfig.value.sidebar.avatar)

const siteConfig = useSiteConfig()
const author = computed(() => themeConfig.value.sidebar.author ?? siteConfig.value.author.name)

const intro = computed(() => themeConfig.value.sidebar.intro ?? siteConfig.value.author.intro)
</script>

<template>
  <div class="silence-profile">
    <div class="silence-sidebar-profile-avatar">
      <img :src="avatar" alt="">
    </div>
    <div class="silence-sidebar-profile-author">
      {{ author }}
    </div>
    <div v-if="intro" class="silence-sidebar-profile-intro">
      {{ intro }}
    </div>
    <div class="silence-sidebar-profile-statistic">
      <div class="silence-sidebar-profile-statistic-item">
        <div class="silence-sidebar-profile-statistic-item-number">
          123
        </div>
        <div class="silence-sidebar-profile-statistic-item-title">
          文章
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.silence-sidebar-profile-avatar {
  width: 100%;
  overflow: hidden;
  border-radius: 4px;
  aspect-ratio: 1 / 1;
  background-color: var(--panel-bg-color);
}

.silence-sidebar-profile-author {
  font-size: 17px;
  font-weight: 700;
  margin-top: 10px;
  text-align: center;
}

.silence-sidebar-profile-intro {
  font-size: 14px;
  font-weight: 300;
  margin-top: 10px;
  text-align: center;
}

.silence-sidebar-profile-statistic {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.silence-sidebar-profile-statistic-item {
  text-align: center;
}
</style>
