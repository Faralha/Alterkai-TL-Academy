<template>
  <div class="pb-4">
    <h2 class="break text-2xl">{{ title }}</h2>
    <hr />
    <NuxtImg v-if="image" :src="image" :alt="alt" preload placeholder loading="lazy" />
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Default Title',
  },
  image: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: 'Default Alt',
  },
});
</script>

<style scoped>
.break {
  width: 100%;
  padding-top: 2rem;
}
</style>
