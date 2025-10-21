<script lang="ts" setup>
defineOptions({
  name: 'HomeLayout',
})
</script>

<template>
  <silence-layout sidebar>
    <router-view />
  </silence-layout>
</template>
