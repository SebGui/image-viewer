<template>
    <button :class="classString" @click="scrollToTop">
        <span class="material-symbols-outlined">arrow_upward</span>
    </button>
</template>
  
<script setup lang="ts">
    // Set the default class string
    const classString = ref<string>("scrollToTopButton")
    // Create holder for the main element (which scrolls and contains the images)
    let mainElement:HTMLElement;

    // Scroll event callback
    const userScroll = () => {
        const scrollAmount:number = mainElement.scrollTop;

        if (scrollAmount > 50) {
            classString.value = "scrollToTopButton showButton puffIn"
        } else {
            classString.value = "scrollToTopButton showButton slideOutBottom"
        }
    };

    // Scroll to top function
    const scrollToTop = () => {
        mainElement.scrollTo({ top: 0, behavior: "smooth" });
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Set and unset our scroll listenners
    onMounted(() => {
        mainElement = document.getElementsByTagName('main')[0];
        mainElement.addEventListener("scroll", userScroll);
    });
    onBeforeMount(() => {
        if (document.getElementsByTagName('main')[0] !== undefined) {
            document.getElementsByTagName('main')[0].removeEventListener("scroll", userScroll);
        }
    });
</script>
  
<style scoped>
    .scrollToTopButton {
        border-radius: 50%;
        height: 50px;
        width: 50px;
        padding: 4px;
        position: fixed;
        bottom: 40px;
        display: none;
        right: 40px;
        box-shadow: 6px 7px 8px 0px #7e7e7e;
    }
  
    .showButton {
        display: block;
    }

    @media screen and (max-width: 414px) {
        .scrollToTopButton {
            right: 50px;
            bottom: 75px;
        }
    }

    /* Button In and Out animations */
    .puffIn {
	    -webkit-animation: ppuffIn 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
	            animation: puffIn 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
    }

    @-webkit-keyframes puffIn {
        0% {
            -webkit-transform: scale(2);
                    transform: scale(2);
            -webkit-filter: blur(4px);
                    filter: blur(4px);
            opacity: 0;
        }
        100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-filter: blur(0px);
                    filter: blur(0px);
            opacity: 1;
        }
    }
    @keyframes puffIn {
        0% {
            -webkit-transform: scale(2);
                    transform: scale(2);
            -webkit-filter: blur(4px);
                    filter: blur(4px);
            opacity: 0;
        }
        100% {
            -webkit-transform: scale(1);
                    transform: scale(1);
            -webkit-filter: blur(0px);
                    filter: blur(0px);
            opacity: 1;
        }
    }

    .slideOutBottom {
	    -webkit-animation: slideOutBottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
	            animation: slideOutBottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    }

    @-webkit-keyframes slideOutBottom {
        0% {
            -webkit-transform: translateZ(0) translateY(0);
                    transform: translateZ(0) translateY(0);
            opacity: 1;
        }
        100% {
            -webkit-transform: translateZ(-1100px) translateY(1000px);
                    transform: translateZ(-1100px) translateY(1000px);
            opacity: 0;
        }
    }
    @keyframes slideOutBottom {
        0% {
            -webkit-transform: translateZ(0) translateY(0);
                    transform: translateZ(0) translateY(0);
            opacity: 1;
        }
        100% {
            -webkit-transform: translateZ(-1100px) translateY(1000px);
                    transform: translateZ(-1100px) translateY(1000px);
            opacity: 0;
        }
    }
</style>