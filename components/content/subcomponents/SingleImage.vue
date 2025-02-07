<template>
    <div class="singleImage imageBox">
        <!--<img class="image" src="https://batiment.imag.fr/img/imag.png" alt="an image" height="100%" width="100%">
        <div class="overlay">A text</div>-->
        <img class="image" :src="imageData.headerImage" alt="Preview image" loading="lazy" width="100%" height="100%" 
        sizes="(max-width: 430px) 200px, (max-width: 1280px) 95vw, (max-width: 991px) 92vw, 46vw"><!--height="100%" width="100%"-->
        <img class="image hoverImg" :src="imageData.fullImage" alt="Full quality image" loading="lazy" width="100%" height="100%"/>

        <!-- Went for div/background because the performances were awfull with img tag, API only provides huge images -->
        <!--<div class="image" :style="'background: url('+imageData.webImage.url+')'"></div>-->
        <div class="overlay">{{imageData.title}}</div>
    </div>
</template>

<script setup lang="ts">
    const {imageData} = defineProps(['imageData'])
</script>

<style scoped>
    * {box-sizing: border-box}

    /*Test*/
    .imageBox {
      position: relative;
      float: left;
    }

    .imageBox .hoverImg {
      position: absolute;
      left: 0;
      top: 0;
      display: none;
      /*transition: opacity 1s ease-out;
    opacity: 1;*/
    }

    .imageBox:hover .hoverImg {
      display: block;
    }

    .singleImage {
        position: relative;
        transition: 200ms;
        border-radius: 5px;
        height: 200px;
        /*width: 100%;*/
    }

    .singleImage:hover { 
        bottom: 2px;
        right: 2px;
        box-shadow: 5px 5px 5px 0 var(--secondaryColor);
    }

    .singleImage:hover .overlay {
        -webkit-animation: scaleIn 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	            animation: scaleIn 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    .image {
        display: block;
        border-radius: 5px;
        object-fit: cover;
        /*height: 100%;
        width: 100%;*/
        /*background-size: cover !important;
        background-position: center !important;*/
    }

    .overlay {
        position: absolute;
        bottom: 0;
        background: rgb(0, 0, 0);
        background: rgba(0, 0, 0, 0.5);
        color: #f1f1f1;
        width: 100%;
        opacity:0;
        color: white;
        padding: 5px;
        text-align: center;
        border-bottom-right-radius: 5px;
        border-bottom-left-radius: 5px;

        display: -webkit-box;
        line-clamp: 3;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        white-space: normal;
        text-overflow: ellipsis;
    }

    .singleImage:hover .overlay {
        opacity: 1;
    }
</style>