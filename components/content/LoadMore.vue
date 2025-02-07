<template>
    <div>
        <template v-if="isLoading === true">
            <Spinner class="scaleIn"/>
        </template>
        <template v-else>
            <button @click="handleLoadMore()" aria-roledescription="Button to load more images">Load more</button>
        </template>
    </div>
</template>

<script setup lang="ts">
import useImageStore from '~/store/imageStore';
import {increasePageAngGetData} from '../../composables/imageApi'


    const {isNotFilter} = defineProps(['isNotFilter'])
    const isLoading = ref<boolean>(false)

    // access to actions
    const imageStore = useImageStore()

    // Make on click show spinner instead of text?
    const handleLoadMore = async () => {
        console.log("Load more clicked");

        // To move in composable
        increasePageAngGetData(isNotFilter)
        //(isNotFilter === true) ? imageStore.increaseCurrentPage : imageStore.currentFilteredPage

        // Base test
        isLoading.value = true
        setTimeout(() => isLoading.value = false, 1000)
    }
</script>

<style scoped>
    div {
        display: flex;
        width: 100%;
        justify-content: center;
        margin: 20px 0px 20px;
    }

    button {
        display: flex;
        justify-content: center;
        cursor: pointer;
        padding: 10px;
    }

    @media screen and (min-width: 1280px) {
        button {
            padding: 10px 20px;
            width:20%;
        }
    }
    @media screen and (max-width: 1280px) {
        button {
            width:100%;
        }
    }
    @media screen and (max-width: 414px) {
        button {
            width:100%;
        }
    }
</style>