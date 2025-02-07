<template>
  <div>
    <nuxt-layout>
      <nuxt-page /> <!-- used to display the nested pages -->
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">
  import "./assests/css/style.css"
  import {getBaseImages} from './composables/imageApi'

  /*import type {Image} from './types/Image'
  import useImageStore from './store/imageStore'
  import {getBaseImages} from './composables/imageApi'
  //import { storeToRefs } from 'pinia'

  // access to actions
  const imageStore = useImageStore()

  // access to getters and state
  const store = storeToRefs(imageStore)*/

  onMounted(async () => {
    getBaseImages()
  });

  //store.
  //imageStore.setMainImageList

</script>
