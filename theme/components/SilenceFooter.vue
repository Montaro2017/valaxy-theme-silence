<script lang="ts" setup>
import valaxyPkg from 'valaxy/package.json'
import { computed } from 'vue'
import { useThemeConfig } from '../composables'
import themePkg from '../package.json'

const themeConfig = useThemeConfig()
const copyright = computed(() => themeConfig.value.footer?.copyright)
const beian = computed(() => themeConfig.value.footer?.beian)
const powered = computed(() => themeConfig.value.footer?.powered)
</script>

<template>
  <div class="silence-footer">
    <div v-if="copyright" class="silence-footer-copyright">
      {{ copyright }}
    </div>
    <div v-if="beian?.enable" class="silence-footer-beian">
      <app-link v-if="beian!.url" :to="beian!.url" target="_blank">
        {{ beian!.icp }}
      </app-link>
      <span v-else>
        {{ beian!.icp }}
      </span>
    </div>
    <div v-if="powered?.enable" class="silence-footer-powered">
      <span>由 </span>
      <span><app-link href="https://github.com/YunYouJun/valaxy">Valaxy {{ valaxyPkg.version }}</app-link></span>
      <span v-if="powered!.withSilence"> & <app-link href="https://github.com/Montaro2017/valaxy-theme-silence">Theme Silence {{ themePkg.version }}</app-link></span>
      <span> 驱动</span>
    </div>
  </div>
</template>

<style>
.silence-footer {
  padding: 15px 0;
  font-size: 13px;
  font-weight: 300;
  margin-top: 15px;
  border-top: 1px solid var(--border-color);
}

.silence-footer a {
  font-weight: 300 !important;
}

.silence-footer-copyright,
.silence-footer-beian,
.silence-footer-powered {
  text-align: center;
}
</style>
