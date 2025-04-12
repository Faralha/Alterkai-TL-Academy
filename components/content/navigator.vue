<template>
  <div class="flex flex-wrap pt-20 pb-12">
    <div class="w-full md:w-1/2 p-2">
      <NuxtLink :to="prevLink" class="block">
        <div
          class="border rounded flex flex-col justify-center items-start p-4"
        >
          <svg
            class="svg-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
            />
          </svg>
          <p class="text text-lg m-0">{{ prevText }}</p>
          <p class="text-md text-left truncate">{{ prevDesc }}</p>
        </div>
      </NuxtLink>
    </div>

    <div class="w-full md:w-1/2 p-2">
      <NuxtLink :to="nextLink" class="block">
        <div
          class="border rounded flex flex-col justify-center items-end p-4"
        >
          <svg
            class="svg-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
          <p class="text text-lg m-0">{{ nextText }}</p>
          <p class="text-md text-right truncate">{{ nextDesc }}</p>
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
    default: 'Selanjutnya',
  },
  prevText: {
    type: String,
    default: 'Sebelumnya',
  },
  nextDesc: {
    type: String,
    default: 'Selanjutnya',
  },
  prevDesc: {
    type: String,
    default: 'Sebelumnya',
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

.svg-icon {
  width: 15px;
  height: auto;
  fill: white;
  padding-bottom: 1rem;
  padding-top: 0.3rem;
}
</style>
