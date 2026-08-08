<script setup lang="ts">
import { ArrowRight, MessageCircle, Sparkles } from '@lucide/vue'
import { buildWhatsAppUrl } from '~/utils/whatsapp'

const heroMain =
  'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80'
const heroSmall =
  'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80'

const stats = [
  { value: '20+', label: 'Tahun melayani' },
  { value: '10rb+', label: 'Pelanggan setia' },
  { value: '500+', label: 'Pilihan produk' },
]
</script>

<template>
  <section class="relative overflow-hidden bg-cream pt-28 pb-20 lg:pt-40 lg:pb-28">
    <div
      class="pointer-events-none absolute -top-40 right-[-10%] h-[480px] w-[480px] rounded-full bg-clay-100/60 blur-3xl"
      aria-hidden="true"
    ></div>

    <div class="container-x relative grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
      <div>
        <Badge>
          <Sparkles :size="13" aria-hidden="true" />
          Busana Keluarga &amp; Seragam Sekolah
        </Badge>

        <h1
          class="mt-6 font-display text-[2.6rem] leading-[1.08] font-medium tracking-tight text-ink-900 sm:text-6xl"
        >
          Busana <span class="text-clay-600 italic">Berkualitas</span><br />
          Untuk Setiap Kebutuhan
        </h1>

        <p class="mt-6 max-w-lg text-base leading-relaxed text-ink-500 sm:text-lg">
          Temukan berbagai pilihan seragam sekolah, busana muslim, dan pakaian berkualitas
          untuk keluarga Anda.
        </p>

        <div class="mt-9 flex flex-wrap items-center gap-4">
          <Button to="/produk" size="lg">
            Lihat Koleksi
            <ArrowRight :size="18" aria-hidden="true" />
          </Button>
          <Button :href="buildWhatsAppUrl()" external variant="secondary" size="lg">
            <MessageCircle :size="18" aria-hidden="true" />
            Hubungi Kami
          </Button>
        </div>

        <dl class="mt-12 flex divide-x divide-sand-200">
          <div v-for="stat in stats" :key="stat.label" class="pr-8 pl-8 first:pl-0">
            <dd class="font-display text-2xl font-medium text-ink-900">{{ stat.value }}</dd>
            <dt class="mt-1 text-xs tracking-wide text-ink-500">{{ stat.label }}</dt>
          </div>
        </dl>
      </div>

      <div class="relative mx-auto w-full max-w-md lg:max-w-none">
        <div class="aspect-[4/5] overflow-hidden rounded-[2rem] bg-sand-100 shadow-lift">
          <img
            :src="heroMain"
            alt="Koleksi busana keluarga yang tersedia di toko"
            fetchpriority="high"
            class="size-full object-cover"
          />
        </div>

        <div
          class="absolute -left-4 bottom-10 flex items-center gap-3 rounded-2xl bg-white/95 p-4 shadow-lift backdrop-blur sm:left-[-1.5rem]"
        >
          <span
            class="grid size-11 place-items-center rounded-full bg-clay-50 text-clay-600"
            aria-hidden="true"
          >
            <Sparkles :size="20" />
          </span>
          <div>
            <p class="text-sm font-semibold text-ink-900">Pilihan Lengkap</p>
            <p class="text-xs text-ink-500">Seragam &amp; Busana Muslim</p>
          </div>
        </div>

        <img
          :src="heroSmall"
          alt="Koleksi pakaian tergantung rapi di toko"
          loading="lazy"
          class="absolute -bottom-8 -right-3 hidden w-44 rounded-2xl border-4 border-cream object-cover shadow-soft sm:block lg:w-52"
        />
      </div>
    </div>
  </section>
</template>