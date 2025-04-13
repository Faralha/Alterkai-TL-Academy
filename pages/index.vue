<template>
  <div class="bg-image">
    <div class="container h-screen">
      <div class="container flex flex-col justify-center items-start">

        <!-- LOGO -->
        <div class="flex flex-row justify-center items-center">
          <NuxtImg src="/img/logo.png" alt="Logo" />
          <span class="col mx-4" style="display: block; height: 0.3px; background-color: white"></span>
        </div>

        <!-- HERO SECTION -->
        <h1>Belajar Translate Manga dengan Mudah.</h1>
        <p>
          Belajar konsep fundamental dunia Scanlator, sekaligus tata-caranya
          dengan benar, mudah, dan lengkap.
        </p>

        <!-- CTA -->
        <NuxtLink to="/perkenalan">
          <UButton class="px-12 py-2 mt-4">
            Mulai
          </UButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Alterkai TL Academy',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Belajar Translate TL Manga dengan Mudah, gratis, dan cepat.',
    },
  ],
});
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}

p {
  font-size: 1rem;
}

h1 {
  font-size: 4rem;
  font-weight: 700;
  text-align: left;
}

.padding {
  padding-top: 0.4rem;
  padding-bottom: 0.4rem;
  padding-left: 2rem;
  padding-right: 2rem;
}

@media (max-width: 768px) {
  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1rem;
  }

  .padding {
    padding-top: 0.05rem;
    padding-bottom: 0.05rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }
}

.container,
.inner-container {
  min-height: 100vh;
}
</style>
