<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'
import { galleryItems } from '~/data/gallery'

const previewItems = galleryItems.slice(0, 8)
</script>

<template>
  <section class="bg-cream py-20 lg:py-28" aria-labelledby="gallery-preview-heading">
    <div class="container-x">
      <SectionHeading
        id="gallery-preview-heading"
        eyebrow="Galeri"
        title="Momen dan Koleksi Kami"
        description="Sehari-hari di toko kami dalam beberapa gambar."
        align="center"
      />

      <div class="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <NuxtLink
          v-for="(item, index) in previewItems"
          :key="item.id"
          to="/galeri"
          :class="index === 0 ? 'row-span-2' : ''"
          class="group relative block overflow-hidden rounded-2xl bg-sand-100"
          :aria-label="`Lihat galeri: ${item.title}`"
        >
          <img
            :src="item.image"
            :alt="item.title"
            loading="lazy"
            class="aspect-square size-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden="true"
          ></div>
          <p
            class="absolute bottom-3 left-3 right-3 translate-y-2 text-sm font-medium text-cream opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          >
            {{ item.title }}
          </p>
        </NuxtLink>
      </div>

      <div class="mt-10 text-center">
        <Button to="/galeri" variant="ghost">
          Lihat Galeri Lengkap
          <ArrowRight :size="16" aria-hidden="true" />
        </Button>
      </div>
    </div>
  </section>
</template>