import useImageStore from '@/store/imageStore'
import { storeToRefs } from 'pinia';

export default defineEventHandler(async (event) => {
    //Handle query params
    const {searchTerm} = getQuery(event)

    const imageStore = useImageStore()
    const {currentFilteredPage} = storeToRefs(imageStore)

    const {apiKey} = useRuntimeConfig()

    //Api call with private key
    const data:any = await $fetch(`https://www.rijksmuseum.nl/api/en/collection?key=${apiKey}&ps=20&p=${currentFilteredPage}&format=json&culture=en&imgonly=true&q=${searchTerm}`)

   return data
})