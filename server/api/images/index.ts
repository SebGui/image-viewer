import useImageStore from '@/store/imageStore'
import { storeToRefs } from 'pinia';

export default defineEventHandler(async (event) => {
    //Handle query params
    //const {name} = getQuery(event)
    const {page} = getQuery(event)

    //Handle post data
    //const {age} = await readBody(event);

    const {apiKey} = useRuntimeConfig()

    const imageStore = useImageStore()
    const {currentPage} = storeToRefs(imageStore)

    //Api call with private key
    //const {data}:any = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${apiKey}`)
    console.log(currentPage);
    const data:any = await $fetch(`https://www.rijksmuseum.nl/api/en/collection?key=${apiKey}&ps=20&p=${page}&format=json&culture=en&imgonly=true`)
    //console.log(data)
    // https://www.rijksmuseum.nl/api/en/usersets?key=A5HiANvt&pageSize=20&page=1&format=json&culture=en
    // https://www.rijksmuseum.nl/api/en/collection?key=${apiKey}&ps=20&p=1&format=json&culture=en&imgonly=true

    /*return {
        message: `Hello, ${name} of age ${age}`
    }*/
   return data
})