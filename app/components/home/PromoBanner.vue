<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'

const bannerImage =
  'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80'
</script>

<template>
  <section class="bg-sand-50 py-16 lg:py-24" aria-labelledby="promo-heading">
    <div class="container-x">
      <div
        class="relative overflow-hidden rounded-[2rem] bg-ink-900 px-6 py-14 sm:px-14 lg:px-20"
      >
        <div
          class="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-clay-600/25 blur-3xl"
          aria-hidden="true"
        ></div>
        <img
          :src="bannerImage"
          alt=""
          loading="lazy"
          class="absolute -right-10 top-1/2 hidden w-64 -translate-y-1/2 rotate-3 rounded-2xl object-cover opacity-90 shadow-lift lg:block"
        />

        <div class="relative max-w-2xl">
          <p class="eyebrow text-clay-100">Kebutuhan Sekolah</p>
          <h2
            id="promo-heading"
            class="mt-3 font-display text-3xl font-medium tracking-tight text-cream sm:text-4xl"
          >
            Sedang mencari seragam sekolah?
          </h2>
          <p class="mt-4 max-w-lg text-base leading-relaxed text-sand-200">
            Temukan berbagai kebutuhan seragam mulai dari kemeja, rok, hingga setelan lengkap
            dalam satu tempat.
          </p>
          <div class="mt-8">
            <Button
              :to="{ path: '/produk', query: { kategori: 'seragam-sekolah' } }"
              variant="light"
              size="lg"
            >
              Lihat Koleksi Seragam
              <ArrowRight :size="18" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>