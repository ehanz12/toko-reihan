<script setup lang="ts">
import { ChevronDown, MessageCircle } from '@lucide/vue'
import { faqs } from '~/data/faqs'
import { buildWhatsAppUrl } from '~/utils/whatsapp'
import { site } from '~/utils/site'

useSeoMeta({
  title: `Pertanyaan Umum — ${site.name}`,
  description: 'Jawaban atas pertanyaan umum seputar belanja, ukuran, pemesanan, dan pengiriman di toko kami.',
  ogTitle: `Pertanyaan Umum — ${site.name}`,
  ogDescription: 'Pertanyaan yang sering diajukan pelanggan toko kami.',
  ogImage: site.ogImage,
  ogType: 'website',
})

const openIndex = ref(0)
</script>

<template>
  <div class="bg-cream pt-24 lg:pt-32">
    <header class="container-x pb-12 lg:pb-16">
      <p class="eyebrow">FAQ</p>
      <h1
        class="mt-3 font-display text-4xl font-medium tracking-tight text-ink-900 sm:text-5xl"
      >
        Pertanyaan yang Sering Diajukan
      </h1>
      <p class="mt-4 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg">
        Temukan jawaban seputar pembelian, ukuran, dan pengiriman produk kami.
      </p>
    </header>

    <section class="border-t border-sand-200">
      <div class="container-x max-w-3xl py-12 lg:py-16">
        <ul class="space-y-3" role="list">
          <li
            v-for="(faq, index) in faqs"
            :key="faq.question"
            class="overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-soft"
          >
            <h2>
              <button
                type="button"
                :id="`faq-button-${index}`"
                :aria-expanded="openIndex === index"
                :aria-controls="`faq-panel-${index}`"
                class="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-sand-50"
                @click="openIndex = openIndex === index ? -1 : index"
              >
                <span class="font-medium text-ink-900">{{ faq.question }}</span>
                <ChevronDown
                  :size="18"
                  :class="openIndex === index ? 'rotate-180' : ''"
                  class="shrink-0 text-clay-600 transition-transform duration-300"
                  aria-hidden="true"
                />
              </button>
            </h2>
            <div
              :id="`faq-panel-${index}`"
              role="region"
              :aria-labelledby="`faq-button-${index}`"
              :class="openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
              class="grid transition-all duration-300 ease-out"
            >
              <div class="overflow-hidden">
                <p class="border-t border-sand-100 px-6 py-5 text-sm leading-relaxed text-ink-500">
                  {{ faq.answer }}
                </p>
              </div>
            </div>
          </li>
        </ul>

        <div
          class="mt-12 rounded-[2rem] bg-ink-900 px-8 py-10 text-center sm:px-12"
        >
          <h2 class="font-display text-2xl font-medium text-cream">
            Masih ada pertanyaan?
          </h2>
          <p class="mx-auto mt-3 max-w-md text-sm leading-relaxed text-sand-200">
            Jangan ragu untuk menghubungi kami. Staf toko siap membantu Anda
            dari Senin sampai Sabtu.
          </p>
          <div class="mt-7 flex justify-center">
            <Button
              :href="buildWhatsAppUrl('Halo, saya memiliki pertanyaan seputar produk Anda.')"
              external
              variant="light"
              size="lg"
            >
              <MessageCircle :size="18" aria-hidden="true" />
              Tanya via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>