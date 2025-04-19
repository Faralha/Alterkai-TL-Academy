<script lang="ts" setup>
useHead({
  title: 'Alterkai TL Academy',
  meta: [
    {
      name: 'description',
      content: 'Belajar Translate TL Manga dengan Mudah, gratis, dan cepat.',
    },
  ],
})

const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first();
});

const slug = route.params.slug;

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

watch(isMenuOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});
</script>

<template>
  <div class="p-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-[20rem] parent">
    <!-- Navbar -->
    <div class="navbar fixed top-0 z-100 w-auto bg-(--background)">
      <!-- Dekstop -->
      <div class="desktop navbar h-screen top-0 w-[20rem]">
        <NuxtLink class="desktop p-4" to="/">
          <NuxtImg src="/img/logo.png" height="5rem" width="auto" preload />
        </NuxtLink>
        <Navbar
          class="desktop p-4 h-full flex flex-col justify-start"
          orientation="vertical"
        />
      </div>

      <!-- Mobile -->
      <div class="mobile w-full">
        <!-- Button and Logo -->
        <div class="p-4 flex justify-between items-center">
          <NuxtLink to="/">
            <NuxtImg src="/img/logo.png" class="h-[10rem] p-2" preload placeholder loading="lazy" />
          </NuxtLink>
          <UIcon
            v-if="isMenuOpen == false"
            name="i-material-symbols-menu"
            class="items-end size-5"
            @click="toggleMenu"
          />
          <UIcon
            v-else
            name="i-material-symbols-close"
            class="size-5"
            @click="toggleMenu"
          />
        </div>

        <!-- Toggle Navbar -->
        <div class="z-100 flex flex-col items-end p-4">
          <div v-if="isMenuOpen == true" class="mobileNavbar">
            <Navbar orientation="vertical" />
          </div>
        </div>
      </div>
    </div>

    <div>
      <ContentRenderer v-if="page" :value="page" class="w-full" />
      <DisqusComments class="mt-3" :identifier="slug[0]"/>
      <Footer />
    </div>
  </div>
</template>

<style>
.navbar {
  position: sticky;
}

.parent {
  display: flex;
  flex-direction: row;
}

.mobile {
  display: none;
}

.mobileNavbar {
  height: 100vh;
  width: 100%;
  right: 0;
  z-index: 100;
  background: var(--background);
}

@media (max-width: 950px) {
  .mobile {
    display: block;
  }

  .parent {
    flex-direction: column;
  }

  .desktop {
    display: none;
  }
}
</style>
