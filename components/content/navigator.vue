<template>
    <div class="d-flex flex-wrap padding">
        <div class="col-12 col-md-6 p-2">
            <NuxtLink :to="prevLink" class="d-block">
                <div
                    class="border rounded container d-flex flex-column justify-content-center align-items-start p-4"
                >
                    <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
                    <p class="text m-0">{{ prevText }}</p>
                    <p class="fs-6 text-start">{{ prevDesc }}</p>
                </div>
            </NuxtLink>
        </div>

        <div class="col-12 col-md-6 p-2">
            <NuxtLink :to="nextLink" class="d-block">
                <div
                    class="border rounded container d-flex flex-column justify-content-center align-items-end p-4"
                >
                    <svg class="svg-icon"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>
                    <p class="text m-0">{{ nextText }}</p>
                    <p class="fs-6 text-end">{{ nextDesc }}</p>
                </div>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
defineProps({
    prevLink: {
        type: String,
    },
    nextLink: {
        type: String,
    },
    nextText: {
        type: String,
        default: "Selanjutnya",
    },
    prevText: {
        type: String,
        default: "Sebelumnya",
    },
    nextDesc: {
        type: String,
        default: "Selanjutnya",
    },
    prevDesc: {
        type: String,
        default: "Sebelumnya",
    },
});
</script>

<style scoped>
NuxtLink,
a {
    text-decoration: none;
    opacity: 0.4;
    transition: opacity 0.3s ease;
}

a:hover {
    opacity: 1;
}

.fs-6 {
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    max-height: 1.5em;
}

.padding {
    padding-top: 5rem;
    padding-bottom: 3rem;
}

.svg-icon {
    width: 15px;
    height: auto;
    fill: white;
    padding-bottom: 1rem;
    padding-top: 0.3rem
}
</style>
