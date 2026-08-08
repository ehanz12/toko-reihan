<script setup lang="ts">
import { BadgeCheck, HeartHandshake, Layers, Wallet } from '@lucide/vue'

const reasons = [
  {
    icon: BadgeCheck,
    title: 'Produk Berkualitas',
    description: 'Bahan terbaik dengan jahitan rapi, dipilih langsung oleh kami.',
  },
  {
    icon: Wallet,
    title: 'Harga Bersahabat',
    description: 'Harga jujur dan wajar, tanpa potongan kualitas.',
  },
  {
    icon: Layers,
    title: 'Pilihan Lengkap',
    description: 'Seragam hingga busana muslim untuk seluruh anggota keluarga.',
  },
  {
    icon: HeartHandshake,
    title: 'Pelayanan Terpercaya',
    description: 'Staf ramah yang siap membantu Anda memilih dengan tepat.',
  },
]
</script>

<template>
  <section class="bg-cream py-16 lg:py-24" aria-labelledby="why-heading">
    <div class="container-x">
      <SectionHeading
        eyebrow="Keunggulan Kami"
        title="Kenapa Memilih Kami?"
        align="center"
        id="why-heading"
      />
      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Reveal v-for="reason in reasons" :key="reason.title">
          <div
            class="h-full rounded-2xl border border-sand-200 bg-white p-7 shadow-soft transition-shadow duration-300 hover:shadow-lift"
          >
            <span
              class="grid size-12 place-items-center rounded-xl bg-sand-100 text-clay-600"
              aria-hidden="true"
            >
              <component :is="reason.icon" :size="22" />
            </span>
            <h3 class="mt-5 font-display text-lg font-medium text-ink-900">
              {{ reason.title }}
            </h3>
            <p class="mt-2 text-sm leading-relaxed text-ink-500">
              {{ reason.description }}
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
</template>