<template>
    <div class="errorContainer">
        <h1>Oops...</h1>
        <p>Error : {{ props.error.statusCode }}</p>
        <p>{{ props.error.message }}</p>

        <NuxtLink to="/"><button @click="handleClearError">Go Home...</button></NuxtLink>
        
    </div>
</template>

<script setup>
    const props = defineProps(['error']);

    const handleClearError = () => clearError({redirect: '/'})
</script>

<style scoped>
    .errorContainer {
        width: 90%;
        margin: auto;
        background-color: var(--secondaryColor);
        color: var(--mainColor);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        border-radius: 5px;
        margin-top: 100px;
    }

    button {
        margin-top:20px;
        cursor:pointer;
        padding: 10px;
        width: 50vh;
    }
    button:hover {
        border-color: var(--mainColor);
    }

    @media screen and (min-width: 1280px) {
        button {
            padding: 10px 20px;
        }
    }
    @media screen and (max-width: 1280px) {
        .errorContainer {
            height:100vh;
            width:100vw;
            margin:0;
            padding:0;
        }
    }
    @media screen and (max-width: 414px) {
        .errorContainer {
            height:100vh;
            width:100vw;
            margin:0;
            padding:0;
        }
    }
</style>