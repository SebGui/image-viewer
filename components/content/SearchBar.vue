<template>
    <section>
        <form @submit.prevent="handleForm" id="searchForm">
            <!-- We remove required attribute here to give an additional way to reset to default view in addition to the home button in the header -->
            <input type="search" placeholder="Search for..." aria-roledescription="input a term to search for" v-model="searchTerm">

            <button aria-roledescription="Form submission button">Submit</button>
        </form>
    </section>
</template>

<script setup lang="ts">
    import useImageStore from '~/store/imageStore';

    // Store initialisation
    const imageStore = useImageStore()
    
    // Initialise searchTerm
    const searchTerm = ref<string>('')

    const handleForm = () => {
        // Update store searchTerm
        imageStore.setSearchTerm(searchTerm.value)

        // Navigate to search route and pass the search term via route param
        return navigateTo(`/search/` + searchTerm.value)
    }
</script>

<style scoped>
    section {
        padding: 10px 0px;
        height: 50px;
        align-content: center;
    }

    form input {
        float:left;
        color: var(--mainColor);
        width: calc(100% - var(--formButtonSize) - var(--formGap)); /* Reference in /assests/css/style.css */
        padding: 5px;
        border-radius: 5px;
        border: 1px solid var(--lightgrayDarker);
        transition: 200ms;
    }

    form input:focus-visible {
        outline:none;
        border-color: var(--secondaryColor) !important;
        box-shadow: 0px 0px 2px var(--secondaryColor);
    }

    form input:hover {
        border-color: var(--mainColorTsp);
    }

    form button {
        float:right;
        cursor: pointer;
        width: var(--formButtonSize);
        height: 26px;
        padding: 4px;
    }

    /* Responsive support */
    @media screen and (max-width: 414px) {
        section { 
            padding-top:20px;
        }
        form input { 
            width:100%;
            padding: 10px;
        }
        form button {
            position: relative;
            bottom: 32px;
            right: 5px;
            z-index: 1;
        }
    }
</style>