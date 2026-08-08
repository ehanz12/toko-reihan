<script setup lang="ts">
import { AtSign, MapPin, MessageCircle } from '@lucide/vue'
import { footerCategories, navLinks, site } from '~/utils/site'
import { buildWhatsAppUrl } from '~/utils/whatsapp'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="bg-ink-900 text-sand-200">
    <div class="container-x grid gap-12 py-16 lg:grid-cols-12 lg:py-20">
      <div class="lg:col-span-5">
        <Logo tone="dark" />
        <p class="mt-5 max-w-sm text-sm leading-relaxed text-sand-300">
          {{ site.description }}
        </p>
      </div>

      <nav class="lg:col-span-2" aria-label="Navigasi footer">
        <h2 class="text-xs font-semibold tracking-[0.2em] text-cream uppercase">
          Navigasi
        </h2>
        <ul class="mt-5 space-y-3">
          <li v-for="link in navLinks" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="text-sm text-sand-300 transition-colors hover:text-cream"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <nav class="lg:col-span-2" aria-label="Kategori footer">
        <h2 class="text-xs font-semibold tracking-[0.2em] text-cream uppercase">
          Kategori
        </h2>
        <ul class="mt-5 space-y-3">
          <li v-for="category in footerCategories" :key="category.to">
            <NuxtLink
              :to="category.to"
              class="text-sm text-sand-300 transition-colors hover:text-cream"
            >
              {{ category.label }}
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="lg:col-span-3">
        <h2 class="text-xs font-semibold tracking-[0.2em] text-cream uppercase">
          Kontak
        </h2>
        <ul class="mt-5 space-y-4 text-sm">
          <li class="flex items-start gap-3">
            <MessageCircle :size="17" class="mt-0.5 shrink-0 text-clay-500" aria-hidden="true" />
            <a
              :href="buildWhatsAppUrl()"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sand-300 transition-colors hover:text-cream"
            >
              {{ site.phoneDisplay }}
            </a>
          </li>
          <li class="flex items-start gap-3">
            <AtSign :size="17" class="mt-0.5 shrink-0 text-clay-500" aria-hidden="true" />
            <a
              :href="site.instagramUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sand-300 transition-colors hover:text-cream"
            >
              {{ site.instagramHandle }}
            </a>
          </li>
          <li class="flex items-start gap-3">
            <MapPin :size="17" class="mt-0.5 shrink-0 text-clay-500" aria-hidden="true" />
            <address class="text-sand-300 normal-case not-italic">{{ site.address }}</address>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-ink-800">
      <div class="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-sand-300 sm:flex-row">
        <p>© {{ year }} {{ site.name }}. All rights reserved.</p>
        <p>
          {{ site.name }} — {{ site.tagline }}.
        </p>
      </div>
    </div>
  </footer>
</template>