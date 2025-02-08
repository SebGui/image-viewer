<template>

    <template v-if="listToShow.length === 0">
        <div class="spinnerContainer">
            <!-- Make proper no result found -->
            No result found
        </div>
    </template>
    <template v-else>
        <div class="imageListWrapper">
            <template v-for="item in listToShow" :key="item.id">
                <SingleImage :imageData="item"/>
            </template>
        </div>    
    </template>

</template>

<script setup lang="ts">
    import type {Image} from '../../types/Image'
    import useImageStore from '~/store/imageStore';

    const {isFilter} = defineProps(['isFilter'])

    // access to actions
    const imageStore = useImageStore()

    // access to getters and state
    const store = storeToRefs(imageStore)

    //const listToShow = (type === "filter") ? ref<Ref<Image[], Image[]>>(filteredImageList) : ref<Ref<Image[], Image[]>>(imageList)
    const listToShow:ComputedRef<Image[]> = computed(() => {
        return (isFilter === true) ? store.getFilteredImageList.value : store.getImageList.value
    });

</script>

<style scoped>
    .imageListWrapper {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        column-gap: 1em;
        row-gap: 1em;
    }

    @media screen and (min-width: 1280px) {
        button {
            padding: 10px 20px;
        }
    }
    @media screen and (max-width: 1280px) {
        .imageListWrapper {
            grid-template-columns: repeat(4, 1fr);
        }
    }
    @media screen and (max-width: 430px) {
        .imageListWrapper {
            grid-template-columns: repeat(2, 1fr);
        }
    }

</style>