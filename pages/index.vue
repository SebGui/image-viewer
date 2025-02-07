<template>
    <div class="mainContent">
        <!--Searchbar Component-->
        <SearchBar />

        <!-- Image List component-->
        <ImageList :imagesData="imageList"/>

        <!--Load more button Component-->
        <LoadMore :isNotFilter="isNotFilter"/>
    </div>
</template>

<script setup lang="ts">
    import useImageStore from '~/store/imageStore';

    const isNotFilter:boolean = true;

    // access to actions
    const imageStore = useImageStore()

    const {imageList} = storeToRefs(imageStore)

    onMounted(async () => {
        getBaseImages()
    });
</script>

<style scoped>
    .mainContent {
        width: 80%;
        margin: auto;
    }
</style>