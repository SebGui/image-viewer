// To be removed
export default defineEventHandler(async () => {
    //Handle query params
    //const {name} = getQuery(event)

    //Handle post data
    //const {age} = await readBody(event);

    const {apiKey} = useRuntimeConfig()

    //Api call with private key
    //const {data}:any = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${apiKey}`)

    /*return {
        message: `Hello, ${name} of age ${age}`
    }*/
   return []
})