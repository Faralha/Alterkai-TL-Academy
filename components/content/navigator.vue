<template>
    <div class="d-flex flex-wrap padding">
        <div class="col-12 col-md-6 p-2">
            <NuxtLink :to="prevLink" class="d-block">
                <div
                    class="border rounded container d-flex flex-column justify-content-center align-items-start p-4"
                >
                    <font-awesome icon="arrow-left" class="p-2" />
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
                    <font-awesome icon="arrow-right" class="p-2" />
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

.fs-6{
    overflow: hidden !important;
    text-overflow: ellipsis !important;
    max-height: 1.5em;
}

.padding {
    padding-top: 5rem;
    padding-bottom: 3rem;
}
</style>
