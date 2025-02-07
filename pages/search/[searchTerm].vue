<template>
    <div class="mainContent">
        <!--Searchbar Component-->
        <SearchBar />

        <!-- Image List component-->
        <ImageList :isFilter="isFilter" :imagesData="filteredImageList"/> <!--:imagesData="store.filteredImageList.value"-->

        <!--Load more button Component-->
        <LoadMore />
    </div>
</template>

<script setup lang="ts">
    import useImageStore from '~/store/imageStore';

    const isFilter = true;

    // Get searchTerm from route
    const {searchTerm} = useRoute().params;

    // access to actions
    const imageStore = useImageStore()
    // access to getters and state
    //const store = storeToRefs(imageStore)
    const {filteredImageList} = storeToRefs(imageStore)

    /*console.log(filteredImageList)
    console.log(store.filteredImageList.value)*/

    //console.log(searchTerm);

    // Right way : for all image
    //const {data:result} = await useFetch('/api/images')
    // Right way : for filter image
    //const {data:result2} = await useFetch('/api/images/'+searchTerm, {body:searchTerm})
    //console.log(result2);

    onMounted(async () => {
        getFilteredImages(searchTerm.toString())
    });
</script>

<style scoped>
    .mainContent {
        width: 80%;
        margin: auto;
    }
</style>