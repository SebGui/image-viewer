<template>
    <div>
        <template v-if="isLoading === true">
            <Spinner class="scaleIn" :sizes="sizes" />
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
    const sizes = ref({height: '40px', width: '40px'})

    // Store initialisation
    const imageStore = useImageStore()

    const handleLoadMore = async () => {
        // Save current searchTerm for after refresh cases
        imageStore.setSearchTerm(window.location.pathname.split('/')[2])

        // To move in composable
        increasePageAngGetData(isNotFilter)

        // Base test : Make state in pinia for isLoadmoreLoading
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