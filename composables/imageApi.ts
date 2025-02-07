
import type {Image} from '@/types/Image'
import {getReleventDataFromImage} from './utils/imageUtils'
import useImageStore from '@/store/imageStore'

export const getBaseImages = async (isAddToList?:boolean) => {
    // access to actions
    const imageStore = useImageStore()

    // access to getters and state
    const store = storeToRefs(imageStore)

    try {
        await $fetch('/api/images?page='+imageStore.currentPage, {method: 'GET'}).then((result:any) => {
            const dataArray = result.artObjects;
            if (isAddToList === true) {
                imageStore.addToImageList(getReleventDataFromImage(dataArray))
            } else {
                imageStore.setImageList(getReleventDataFromImage(dataArray))
            }
        })
    } catch (e) {
        console.log(e)
    }
}

export const getFilteredImages = async (searchTerm:string, isAddToList?:boolean) => {
    // access to actions
    const imageStore = useImageStore()

    // access to getters and state
    //const store = storeToRefs(imageStore)

    try {
        await $fetch('/api/images/'+searchTerm+'?searchTerm='+searchTerm, {method: 'GET'}).then((result:any) => {
            const dataArray = result.artObjects;
            imageStore.setFilteredImageList(getReleventDataFromImage(dataArray))
        })
    } catch (e) {
        console.log(e)
    }
}

export const increasePageAngGetData = async (isNotFilter:boolean) => {
        // access to actions
        const imageStore = useImageStore()

        // access to getters and state
        const store = storeToRefs(imageStore)

        try {
            if (isNotFilter === true) {
                imageStore.increaseCurrentPage()
                getBaseImages(true)
            } else {
                imageStore.increaseCurrentFilterPage()
                // Save last searchedTerm to send it here
                //getFilteredImages(lastSearchTerm, true)
            }
            /*await $fetch('/api/images/'+searchTerm+'?searchTerm='+searchTerm, {method: 'GET'}).then((result:any) => {
                const dataArray = result.artObjects;
                imageStore.setFilteredImageList(getReleventDataFromImage(dataArray))
            })*/
        } catch (e) {
            console.log(e)
        }

}