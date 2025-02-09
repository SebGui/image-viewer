
import {getReleventDataFromImage} from './utils/imageUtils'
import useImageStore from '@/store/imageStore'

export const getBaseImages = async (isAddToList?:boolean) => {
    // Initialise store instance
    const imageStore = useImageStore()

    // Set loading to true to trigger spinner subcomponent
    imageStore.setIsLoading(true)

    // Get image flow
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

    // Set loading to false to hide spinner subcomponent
    hideLoaders()
}

export const getFilteredImages = async (searchTerm:string, isAddToList?:boolean) => {
    // Initialise store instance
    const imageStore = useImageStore()

    // Set loading to true to trigger spinner subcomponent
    imageStore.setIsLoading(true)

    // Get filtered image flow
    try {
        await $fetch('/api/images/'+searchTerm+'?searchTerm='+searchTerm+'&page='+imageStore.currentFilteredPage, {method: 'GET'}).then((result:any) => {
            const dataArray = result.artObjects;

            if (isAddToList === true) {
                imageStore.addToFilteredImageList(getReleventDataFromImage(dataArray))
            } else {
                imageStore.setFilteredImageList(getReleventDataFromImage(dataArray))
            }
        })
    } catch (e) {
        console.log(e)
    }

    // Set loading to false to hide spinner subcomponent
    hideLoaders()
}

export const increasePageAngGetData = async (isNotFilter:boolean) => {
        // Initialise store instance
        const imageStore = useImageStore()

        // Set loading to true to trigger spinner subcomponent
        imageStore.setIsLoading(true)

        // Get updated searchTerm ref
        const {searchTerm} = storeToRefs(imageStore)

        // Increase and get data flow
        try {
            if (isNotFilter === true) {
                imageStore.increaseCurrentPage()
                getBaseImages(true)
            } else {
                imageStore.increaseCurrentFilterPage()
                getFilteredImages(searchTerm.value, true)
            }
        } catch (e) {
            console.log(e)
        }

        // Set loading to false to hide spinner subcomponent
        hideLoaders()
}

// Hide loaders function
const hideLoaders = () => {
    const imageStore = useImageStore()

    imageStore.setIsLoading(false)
    imageStore.setIsLoadmoreLoading(false)
}