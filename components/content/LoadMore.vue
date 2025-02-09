<template>
    <div>
        <template v-if="isLoadmoreLoading === true">
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

    // Local variable declaration/initialisation
    const {isNotFilter} = defineProps(['isNotFilter'])
    const sizes = ref({height: '40px', width: '40px'})

    // Store initialisation
    const imageStore = useImageStore()

    // Getting isLoadmoreLoading ref from our store
    const {isLoadmoreLoading} = storeToRefs(imageStore)

    const handleLoadMore = async () => {
        // Sets spinner to visible 
        imageStore.setIsLoadmoreLoading(true)

        // Save current searchTerm for after refresh cases
        imageStore.setSearchTerm(useRoute().params.searchTerm.toString())

        // To move in composable
        increasePageAngGetData(isNotFilter)
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