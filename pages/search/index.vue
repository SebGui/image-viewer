<template>
    <div class="mainContent">
        <!--Searchbar Component-->
        <SearchBar />

        <template v-if="isLoading">
            <div class="spinnerContainer">
                <Spinner class="scaleIn" :sizes="sizes"/>
            </div>
        </template>
        <template v-else>
            <!-- Image List component-->
            <ImageList :imagesData="filteredImageList"/>

            <!--Load more button Component-->
            <LoadMore />
        </template>
        
    </div>
</template>

<script setup lang="ts">
    import useImageStore from '~/store/imageStore';

    // Define values to pass as props
    const sizes = ref({height: '200px', width:'200px'});

    // Initialise store instance
    const imageStore = useImageStore()

    // Getting the refs of needed states
    const {filteredImageList, isLoading} = storeToRefs(imageStore)

    onMounted(async () => {
        // Getting initial images (reference in composables/imageApi.ts)
        getBaseImages()
    });
</script>

<style scoped>
</style>