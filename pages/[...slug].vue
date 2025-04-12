<script lang="ts" setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first();
});

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
    <div class="navbar sticky top-0 z-100 w-full bg-(--background)">
      <NuxtLink class="desktop p-4">
        <img src="~/public/img/logo.png" class="h-[10rem]" />
      </NuxtLink>

      <!-- Desktop -->
      <Navbar
        class="desktop p-4 h-full flex flex-col justify-start"
        orientation="vertical"
      />

      <!-- Mobile -->
      <div>
        <NuxtLink class="mobile p-4" v-if="isMenuOpen == false">
          <img src="~/public/img/logo.png" class="h-[10rem]" />
        </NuxtLink>
        <!-- Inner Mobile -->
        <div class="mobile z-100 flex flex-col items-end p-4 w-full">
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
          <div v-if="isMenuOpen == true" class="mobileNavbar">
            <Navbar orientation="vertical" />
          </div>
        </div>
      </div>
    </div>

    <div>
      <ContentRenderer v-if="page" :value="page" class="" />
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

/* .mobile {
    display: none;
} */

.mobileNavbar {
  height: 100vh;
  width: 100%;
  right: 0;
  z-index: 100;
  background: var(--background);
}

@media (max-width: 768px) {
  .mobile {
    display: sticky;
  }

  .parent {
    flex-direction: column;
  }

  .desktop {
    display: none;
  }
}
</style>
