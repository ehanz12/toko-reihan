<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'
import { site } from '~/utils/site'

const aboutImage =
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80'
</script>

<template>
  <section class="bg-sand-50 py-20 lg:py-28" aria-labelledby="about-preview-heading">
    <div class="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
      <div class="relative">
        <div class="overflow-hidden rounded-[2rem] bg-sand-100 shadow-soft">
          <img
            :src="aboutImage"
            :alt="`Suasana di dalam toko ${site.name}`"
            loading="lazy"
            class="aspect-[4/3] size-full object-cover"
          />
        </div>
        <div
          class="absolute -bottom-6 -right-3 rounded-2xl bg-ink-900 p-6 text-cream shadow-lift sm:right-[-1.5rem]"
        >
          <p class="font-display text-3xl font-medium text-clay-500">
            {{ site.foundedYear }}
          </p>
          <p class="mt-1 text-xs tracking-wider text-sand-200 uppercase">
            Melayani keluarga Indonesia
          </p>
        </div>
      </div>

      <div>
        <SectionHeading
          id="about-preview-heading"
          eyebrow="Tentang Kami"
          title="Berawal dari Toko, Tumbuh Bersama Pelanggan"
        />
        <div class="mt-6 space-y-4 text-base leading-relaxed text-ink-500">
          <p>
            {{ site.name }} hadir sebagai toko busana keluarga yang berawal dari satu toko
            kecil di pojok pasar. Dengan semangat melayani, kami tumbuh menjadi tempat
            keluarga Indonesia mencari seragam sekolah, busana muslim, dan pakaian sehari-hari.
          </p>
          <p>
            Hingga kini, kami menjaga prinsip yang sama: produk berkualitas, harga jujur,
            dan pelayanan yang hangat.
          </p>
        </div>
        <div class="mt-9">
          <Button to="/tentang" variant="secondary" size="lg">
            Kenal Lebih Dekat
            <ArrowRight :size="18" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>