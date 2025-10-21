<script lang="ts" setup>
defineOptions({
  name: 'NotFoundLayout',
})
</script>

<template>
  <silence-layout :sidebar="false">
    <router-view />
  </silence-layout>
</template>
