import useImageStore from '@/store/imageStore'
import { storeToRefs } from 'pinia';

export default defineEventHandler(async (event) => {
    const {page} = getQuery(event)

    const {apiKey} = useRuntimeConfig()

    const imageStore = useImageStore()
    const {currentPage} = storeToRefs(imageStore)// To be used?

    const data:any = await $fetch(`https://www.rijksmuseum.nl/api/en/collection?key=${apiKey}&ps=20&p=${page}&format=json&culture=en&imgonly=true`)

   return data
})