<script setup lang="ts">
import { AtSign, Clock, MapPin, MessageCircle, Send } from '@lucide/vue'
import { site } from '~/utils/site'
import { buildContactInquiry, buildWhatsAppUrl } from '~/utils/whatsapp'

useSeoMeta({
  title: `Kontak — ${site.name}`,
  description: `Hubungi ${site.name}: alamat toko, nomor WhatsApp, dan jam operasional.`,
  ogTitle: `Kontak — ${site.name}`,
  ogDescription: `Alamat, jam operasional, dan kontak ${site.name}.`,
  ogImage: site.ogImage,
  ogType: 'website',
})

const name = ref('')
const message = ref('')
const submitted = ref(false)

const waHref = computed(() => buildWhatsAppUrl(buildContactInquiry(name.value, message.value)))

function handleSubmit() {
  if (!name.value.trim() || !message.value.trim()) return
  submitted.value = true
  window.open(waHref.value, '_blank', 'noopener')
}
</script>

<template>
  <div class="bg-cream pt-24 lg:pt-32">
    <header class="container-x pb-12 lg:pb-16">
      <p class="eyebrow">Hubungi Kami</p>
      <h1
        class="mt-3 font-display text-4xl font-medium tracking-tight text-ink-900 sm:text-5xl"
      >
        Kami Siap Membantu Anda
      </h1>
      <p class="mt-4 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg">
        Kunjungi toko kami, kirim pesan melalui WhatsApp, atau isi formulir di
        bawah ini — kami akan segera menghubungi Anda.
      </p>
    </header>

    <section class="border-t border-sand-200">
      <div class="container-x grid gap-12 py-12 lg:grid-cols-12 lg:gap-16 lg:py-16">
        <div class="lg:col-span-5">
          <ul class="space-y-6" role="list">
            <li class="flex items-start gap-4">
              <span class="grid size-11 shrink-0 place-items-center rounded-xl bg-sand-100 text-clay-600" aria-hidden="true">
                <MapPin :size="20" />
              </span>
              <div>
                <h2 class="font-medium text-ink-900">Alamat Toko</h2>
                <address class="mt-1 text-sm leading-relaxed text-ink-500 not-italic">
                  {{ site.address }}
                </address>
              </div>
            </li>
            <li class="flex items-start gap-4">
              <span class="grid size-11 shrink-0 place-items-center rounded-xl bg-sand-100 text-clay-600" aria-hidden="true">
                <MessageCircle :size="20" />
              </span>
              <div>
                <h2 class="font-medium text-ink-900">WhatsApp</h2>
                <a
                  :href="buildWhatsAppUrl()"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-1 inline-block text-ink-500 transition-colors hover:text-clay-700"
                >
                  {{ site.phoneDisplay }}
                </a>
              </div>
            </li>
            <li class="flex items-start gap-4">
              <span class="grid size-11 shrink-0 place-items-center rounded-xl bg-sand-100 text-clay-600" aria-hidden="true">
                <AtSign :size="20" />
              </span>
              <div>
                <h2 class="font-medium text-ink-900">Instagram</h2>
                <a
                  :href="site.instagramUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mt-1 inline-block text-ink-500 transition-colors hover:text-clay-700"
                >
                  {{ site.instagramHandle }}
                </a>
              </div>
            </li>
            <li class="flex items-start gap-4">
              <span class="grid size-11 shrink-0 place-items-center rounded-xl bg-sand-100 text-clay-600" aria-hidden="true">
                <Clock :size="20" />
              </span>
              <div>
                <h2 class="font-medium text-ink-900">Jam Operasional</h2>
                <ul class="mt-1 space-y-0.5 text-sm text-ink-500">
                  <li v-for="hour in site.hours" :key="hour.days">
                    {{ hour.days }} · {{ hour.time }}
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          <div class="mt-10 overflow-hidden rounded-2xl border border-sand-200 shadow-soft">
            <iframe
              :src="site.mapEmbed"
              title="Lokasi toko di peta"
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              class="h-64 w-full border-0"
            ></iframe>
          </div>
        </div>

        <div class="lg:col-span-7">
          <form
            aria-label="Formulir pesan"
            @submit.prevent="handleSubmit"
          >
            <div class="rounded-2xl border border-sand-200 bg-white p-8 shadow-soft sm:p-10">
              <h2 class="font-display text-xl font-medium text-ink-900">
                Kirim Pesan
              </h2>
              <p class="mt-2 text-sm text-ink-500">
                Isi formulir di bawah ini, pesan Anda akan kami teruskan melalui
                WhatsApp.
              </p>

              <div class="mt-8 space-y-5">
                <div>
                  <label for="contact-name" class="mb-1.5 block text-sm font-medium text-ink-900">
                    Nama Anda
                  </label>
                  <input
                    id="contact-name"
                    v-model="name"
                    name="nama"
                    type="text"
                    required
                    autocomplete="name"
                    placeholder="Contoh: Siti Rahmawati"
                    class="w-full rounded-xl border border-sand-200 bg-cream px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500/60 transition-colors focus:border-clay-600"
                  />
                </div>
                <div>
                  <label for="contact-message" class="mb-1.5 block text-sm font-medium text-ink-900">
                    Pesan Anda
                  </label>
                  <textarea
                    id="contact-message"
                    v-model="message"
                    name="pesan"
                    required
                    rows="5"
                    placeholder="Tulis pertanyaan atau kebutuhan Anda di sini…"
                    class="w-full resize-y rounded-xl border border-sand-200 bg-cream px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500/60 transition-colors focus:border-clay-600"
                  ></textarea>
                </div>
                <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button type="submit" size="lg" class="sm:flex-1">
                    Kirim via WhatsApp
                    <Send :size="17" aria-hidden="true" />
                  </Button>
                </div>
                <p v-if="submitted" class="text-sm text-clay-700" role="status">
                  Terima kasih! Jendela WhatsApp akan terbuka dengan pesan Anda.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>