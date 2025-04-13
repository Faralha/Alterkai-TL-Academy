<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const items = ref<NavigationMenuItem[]>([
  {
    label: 'Home',
    icon: 'i-lucide-home',
    to: '/',
  },
  {
    label: 'Guide',
    icon: 'i-lucide-book-open',
    defaultOpen: true,
    children: [
      {
        label: 'Perkenalan',
        description:
          'Sebuah perkenalan mengenai dunia scanlator secara singkat.',
        icon: 'i-lucide-house',
        to: '/perkenalan',
      },
      {
        label: 'Translator',
        description:
          'Menerjemahkan komik dari bahasa asing ke bahasa Indonesia.',
        icon: 'i-material-symbols-language',
        to: '/translator',
      },
      {
        label: 'Typesetter',
        icon: 'i-material-symbols-keyboard-alt-outline',
        description: 'Memasukkan teks terjemahan ke dalam gambar',
        to: '/typesetter',
      },
      {
        label: 'Cleaner',
        icon: 'i-material-symbols-cleaning-services-outline',
        description:
          'Membersihkan komik dari segala teks mulai dari dialog hingga efek.',
        to: '/cleaner',
      },
      {
        label: 'Redraw',
        icon: 'i-material-symbols-brush',
        description: 'Menggambar ulang bagian yang terhapus saat cleaning.',
        to: '/redraw',
      },
    ],
  },
  {
    label: 'Other Websites',
    icon: 'i-material-symbols-globe-asia',
    defaultOpen: true,
    children: [
      {
        label: 'Alterkai Scans',
        description: 'Website tempat hasil scanlation Alterkai Scans.',
        icon: 'i-material-symbols-globe-book',
        to: 'https://alterkaiscans.my.id',
      },
      {
        label: 'Alterkai TL Academy',
        description: 'Website tempat belajar translate manga.',
        icon: 'i-material-symbols-globe-book',
        to: 'https://academy.alterkaiscans.my.id',
      },
      {
        label: 'Trakteer',
        description: 'Dukung kami dengan cara donasi di Trakteer.',
        icon: 'i-material-symbols-attach-money',
        to: 'https://trakteer.id/faralha',
      },
    ],
  },
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    to: 'https://github.com/faralha/alterkai-tl-academy',
    target: '_blank',
  },
]);
</script>

<template>
  <UNavigationMenu :items="items" class="w-full justify-center" />
</template>
