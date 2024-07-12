<template>
    <div class="pb-4">
        <h2 class="break">{{ title }}</h2>
        <hr>
        <img :src="image" :alt="alt">
    </div>
</template>

<script setup>
    defineProps({
        title: {
            type: String,
            default: 'Default Title'
        },
        image: {
            type: String
        },
        alt: {
            type: String,
            default: 'Default Alt'
        }
    })
</script>

<style scoped>
    .break {
        padding-top: 2rem;
    }
</style>