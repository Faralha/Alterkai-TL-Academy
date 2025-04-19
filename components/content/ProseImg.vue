<template>
  <NuxtImg
    :src="refinedSrc"
    :alt="props.alt"
    :width="props.width"
    :height="props.height"
    :sizes="props.sizes"
    :format="props.format"
    :quality="props.quality"
    class="w-full h-auto object-cover"
    preload placeholder loading="lazy"
    style="width: 100%"
  />
</template>

<script setup lang="ts">
import { withTrailingSlash, withLeadingSlash, joinURL } from 'ufo'
import { useRuntimeConfig, computed } from '#imports'

const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: [String, Number],
    default: "100%"
  },
  height: {
    type: [String, Number],
    default: undefined
  },
  sizes: {
    type: String,
    default: undefined
  },
  format: {
    type: String,
    default: undefined
  },
  quality: {
    type: [String, Number],
    default: undefined
  }
})

const refinedSrc = computed(() => {
  if (props.src?.startsWith('/') && !props.src.startsWith('//')) {
    const _base = withLeadingSlash(withTrailingSlash(useRuntimeConfig().app.baseURL))
    if (_base !== '/' && !props.src.startsWith(_base)) {
      return joinURL(_base, props.src)
    }
  }
  return props.src
})
</script>