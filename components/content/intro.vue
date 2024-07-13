<template>
    <div :style="{ backgroundImage: 'url(' + image + ')' }" class="background-image d-flex align-items-end justify-content-start">
        <div class="text-area p-4">
            <h1>{{ text }}</h1>
            <p>{{ desc }}</p>
        </div>
    </div>
    <div class="py-3"></div>
</template>

<script setup>
defineProps({
    image: {
        type: String,
        default: 'https://via.placeholder.com/1920x1080', 
    },
    text: {
        type: String,
    },
    desc: {
        type: String,
    },
});
</script>

<style scoped>
.background-image {
    height: 40vh;
    background-size: cover;
    background-position: center;
    position: relative;
}

p {
    font-size: 1em;
}

.background-image::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(0, 0, 0, 0.5), black);
    /* backdrop-filter: blur(10px); */
}

/* Ensure content is visible above the overlay */
.background-image > * {
    position: relative;
    z-index: 2;
}
</style>
