<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'
import { categories } from '~/data/categories'

const toCategoryPage = (slug: string) =>
  slug === 'lainnya'
    ? { path: '/produk', query: {} }
    : { path: '/produk', query: { kategori: slug } }
</script>

<template>
  <section class="bg-sand-50 py-20 lg:py-28" aria-labelledby="categories-heading">
    <div class="container-x">
      <SectionHeading
        id="categories-heading"
        eyebrow="Kategori"
        title="Temukan Kebutuhan Anda"
        description="Dari seragam sekolah hingga busana muslim, semuanya tersedia dalam satu tempat."
        align="center"
      />

      <div
        class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Reveal v-for="category in categories" :key="category.slug">
          <NuxtLink
            :to="toCategoryPage(category.slug)"
            class="group relative block overflow-hidden rounded-2xl bg-ink-900 shadow-soft transition-shadow duration-300 hover:shadow-lift"
            :aria-label="`Lihat produk kategori ${category.name}`"
          >
            <img
              :src="category.image"
              :alt="`Koleksi ${category.name}`"
              loading="lazy"
              class="aspect-[4/3] size-full object-cover opacity-90 transition-all duration-500 group-hover:scale-[1.04] group-hover:opacity-75"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/20 to-transparent"
              aria-hidden="true"
            ></div>
            <div class="absolute inset-x-0 bottom-0 p-6">
              <p class="flex items-center justify-between gap-3">
                <span>
                  <span class="block font-display text-xl font-medium text-cream">
                    {{ category.name }}
                  </span>
                  <span class="mt-1.5 block text-sm leading-relaxed text-sand-200">
                    {{ category.description }}
                  </span>
                </span>
                <span
                  class="mt-1 grid size-9 shrink-0 place-items-center rounded-full bg-cream/15 text-cream transition-all duration-300 group-hover:bg-clay-600"
                  aria-hidden="true"
                >
                  <ArrowUpRight :size="17" />
                </span>
              </p>
            </div>
          </NuxtLink>
        </Reveal>
      </div>
    </div>
  </section>
</template>