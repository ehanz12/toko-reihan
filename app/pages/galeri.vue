<script setup lang="ts">
import { galleryItems } from '~/data/gallery'
import { site } from '~/utils/site'
import type { GalleryCategory } from '~/types/product'

useSeoMeta({
  title: `Galeri — ${site.name}`,
  description: 'Suasana toko, koleksi produk, dan momen pelayanan sehari-hari di toko kami.',
  ogTitle: `Galeri — ${site.name}`,
  ogDescription: 'Suasana toko dan koleksi produk kami.',
  ogImage:
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
  ogType: 'website',
})

const filters: Array<{ slug: 'semua' | GalleryCategory; label: string }> = [
  { slug: 'semua', label: 'Semua' },
  { slug: 'produk', label: 'Produk' },
  { slug: 'toko', label: 'Toko' },
  { slug: 'pelayanan', label: 'Pelayanan' },
  { slug: 'koleksi', label: 'Koleksi' },
]

const activeFilter = ref<'semua' | GalleryCategory>('semua')

const filtered = computed(() =>
  activeFilter.value === 'semua'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter.value),
)
</script>

<template>
  <div class="bg-cream pt-24 lg:pt-32">
    <header class="container-x pb-12 lg:pb-16">
      <p class="eyebrow">Galeri</p>
      <h1
        class="mt-3 font-display text-4xl font-medium tracking-tight text-ink-900 sm:text-5xl"
      >
        Setiap Sudut Toko, Setiap Momen
      </h1>
      <p class="mt-4 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg">
        Dari koleksi produk hingga pelayanan yang kami berikan — inilah potret
        keseharian {{ site.name }}.
      </p>
    </header>

    <section class="border-t border-sand-200 py-10">
      <div class="container-x">
        <div
          class="flex flex-wrap items-center gap-2"
          role="group"
          aria-label="Filter galeri"
        >
          <button
            v-for="filter in filters"
            :key="filter.slug"
            type="button"
            :aria-pressed="activeFilter === filter.slug"
            :class="
              activeFilter === filter.slug
                ? 'bg-ink-900 text-cream'
                : 'bg-white text-ink-600 hover:bg-sand-100'
            "
            class="rounded-full border border-sand-200 px-4 py-2 text-sm font-medium transition-colors duration-200"
            @click="activeFilter = filter.slug"
          >
            {{ filter.label }}
          </button>
        </div>

        <ul
          class="mt-10 columns-2 gap-4 md:columns-3 lg:columns-4"
          role="list"
        >
          <li
            v-for="item in filtered"
            :key="item.id"
            class="mb-4 break-inside-avoid"
          >
            <figure class="group relative overflow-hidden rounded-2xl bg-sand-100">
              <img
                :src="item.image"
                :alt="item.title"
                loading="lazy"
                :class="item.aspect"
                class="w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <figcaption
                class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-900/80 to-transparent px-4 pb-3 pt-10"
              >
                <p class="text-sm font-medium text-cream">{{ item.title }}</p>
                <p class="text-xs text-sand-200 uppercase">
                  {{ item.category }}
                </p>
              </figcaption>
            </figure>
          </li>
        </ul>

        <p v-if="!filtered.length" class="py-16 text-center text-sm text-ink-500">
          Belum ada foto untuk kategori ini.
        </p>
      </div>
    </section>
  </div>
</template>