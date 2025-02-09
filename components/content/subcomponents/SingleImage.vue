<template>
    <div class="singleImage imageBox">
        <!-- Here we use a double image system to show a preview before full size image, for load time and resources management -->
        <img class="image" :src="imageData.headerImage" alt="Preview image" loading="lazy" height="100%" width="100%"/>
        <img class="imageSimgle hoverImg" :src="imageData.fullImage" alt="Full quality image" loading="lazy" height="100%" width="100%"/>

        <div class="overlay">{{imageData.title}}</div>
    </div>
</template>

<script setup lang="ts">
    const {imageData} = defineProps(['imageData'])
</script>

<style scoped>
    * {box-sizing: border-box}

    /* Image preview on hover */
    .imageBox {
      position: relative;
      float: left;
    }

    .imageBox .hoverImg {
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .imageBox:hover .hoverImg {
      display: block;
    }

    /* Container CSS */
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
        opacity: 1;
    }

    /* Apply animation to overlay display */
    .singleImage:hover .overlay {
        -webkit-animation: scaleIn 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	            animation: scaleIn 0.25s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    /* image CSS */
    .image {
        display: block;
        border-radius: 5px;
        object-fit: cover;

        /* Handles missing images cases */
        background: url('/assests/imgNotFound.jpeg');
        background-position: center;
        background-size: cover;
    }
    .imageSimgle {
        display: block;
        border-radius: 5px;
        object-fit: cover;
    }

    /* Overlay CSS */
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
</style>