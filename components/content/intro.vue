<template>
  <div class="relative mb-8">
    <NuxtImg :src="image" sizes="10vw" class="!w-full max-h-[250px] object-cover" preload placeholder loading="lazy"/>

    <!-- Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-75"></div>

    <!-- Title Text -->
    <div class="relative z-100 p-4">
      <h1 class="text-4xl text-white">{{ text }}</h1>
      <p class="text-gray-300">{{ desc }}</p>
    </div>
  </div>

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
</style>
