<template>
    <div class="imageListWrapper">
        <!-- [ADD] : check if empty show no results -->
         <template v-if="listToShow.length === 0"><!--imagesData-->
            No data yet<!-- Spinner ?-->
         </template>
         <template v-else>
            <template v-for="item in listToShow" :key="item.id"><!--imagesData-->
                <SingleImage :imageData="item"/>
            </template>
         </template>
    </div>
</template>

<script setup lang="ts">
    import type {Image} from '../../types/Image'
    import useImageStore from '~/store/imageStore';
    const blockLength:number = 40;
    const {imagesData, isFilter} = defineProps(['imagesData', 'isFilter'])

    // access to actions
    const imageStore = useImageStore()

    // access to getters and state
    const store = storeToRefs(imageStore)
    const {filteredImageList, imageList} = storeToRefs(imageStore)

    //const listToShow = (type === "filter") ? ref<Ref<Image[], Image[]>>(filteredImageList) : ref<Ref<Image[], Image[]>>(imageList)
    let listToShow:ComputedRef<Image[]> = computed(() => {
        //console.log(isFilter)
        //listToShow = (type === "filter") ? store.filteredImageList.value : store.imageList.value
        return (isFilter === true) ? store.getFilteredImageList.value : store.getImageList.value
    });

    /*onMounted(() => {
        console.log(listToShow)
    })*/
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