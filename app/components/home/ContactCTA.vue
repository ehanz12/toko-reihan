<script setup lang="ts">
import { Clock, MapPin, MessageCircle } from '@lucide/vue'
import { site } from '~/utils/site'
import { buildWhatsAppUrl } from '~/utils/whatsapp'
</script>

<template>
  <section class="bg-cream pb-20 lg:pb-28" aria-labelledby="contact-cta-heading">
    <div class="container-x">
      <div
        class="relative overflow-hidden rounded-[2rem] bg-ink-900 px-6 py-14 sm:px-14 lg:px-20"
      >
        <div
          class="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-clay-600/20 blur-3xl"
          aria-hidden="true"
        ></div>

        <div class="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p class="eyebrow text-clay-100">{{ site.name }}</p>
            <h2
              id="contact-cta-heading"
              class="mt-3 font-display text-3xl font-medium tracking-tight text-cream sm:text-4xl"
            >
              Kunjungi Toko Kami
            </h2>
            <p class="mt-4 max-w-md text-base leading-relaxed text-sand-200">
              Datang langsung untuk melihat dan mencoba produk kami, atau hubungi kami
              melalui WhatsApp untuk pertanyaan apa pun.
            </p>

            <ul class="mt-8 space-y-4 text-sm text-sand-200">
              <li class="flex items-start gap-3">
                <MapPin :size="18" class="mt-0.5 shrink-0 text-clay-500" aria-hidden="true" />
                <address class="not-italic">{{ site.address }}</address>
              </li>
              <li v-for="hour in site.hours" :key="hour.days" class="flex items-start gap-3">
                <Clock :size="18" class="mt-0.5 shrink-0 text-clay-500" aria-hidden="true" />
                <p>{{ hour.days }} · {{ hour.time }}</p>
              </li>
              <li class="flex items-start gap-3">
                <MessageCircle :size="18" class="mt-0.5 shrink-0 text-clay-500" aria-hidden="true" />
                <p>{{ site.phoneDisplay }}</p>
              </li>
            </ul>
          </div>

          <div class="flex lg:flex-col lg:items-end lg:justify-center lg:gap-4">
            <Button to="/kontak" variant="light-outline" size="lg">
              <MapPin :size="18" aria-hidden="true" />
              Lihat Lokasi
            </Button>
            <Button
              :href="buildWhatsAppUrl('Halo, saya ingin bertanya tentang produk Anda.')"
              external
              variant="light"
              size="lg"
              class="mt-4 lg:mt-0"
            >
              <MessageCircle :size="18" aria-hidden="true" />
              Chat WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>