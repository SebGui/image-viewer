<template>
  <div>
    <nuxt-layout>
      <nuxt-page /> <!-- used to display the nested pages -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
  import "./assests/css/style.css"
  import { getBaseImages } from './composables/imageApi'

  onMounted(async () => {
    getBaseImages()
  });

</script>
