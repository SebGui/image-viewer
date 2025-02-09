export default defineEventHandler(async (event) => {
    // Handle query params
    const {searchTerm, page} = getQuery(event)

    // Initialise API Key
    const {apiKey} = useRuntimeConfig()

    //A pi call with private key
    const data:any = await $fetch(`https://www.rijksmuseum.nl/api/en/collection?key=${apiKey}&ps=20&p=${page}&format=json&culture=en&imgonly=true&q=${searchTerm}`)

   return data
})