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
            <ImageList :isFilter="isFilter" :imagesData="filteredImageList"/>

            <!--Load more button Component-->
            <LoadMore />
        </template>

    </div>
</template>

<script setup lang="ts">
    import useImageStore from '~/store/imageStore';

    // Define values to pass as props
    const isFilter = true;
    const sizes = ref({height: '200px', width:'200px'});

    // Get searchTerm from route
    const {searchTerm} = useRoute().params;

    // Initialise out store instance
    const imageStore = useImageStore()

    // Create refs from needed states
    const {filteredImageList, isLoading} = storeToRefs(imageStore)

    // onMounted Lifecycle hook
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