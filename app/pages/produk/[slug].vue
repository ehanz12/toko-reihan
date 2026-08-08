<script setup lang="ts">
import { Check, ChevronRight, MessageCircle, Palette, Ruler, Store } from '@lucide/vue'
import { useProducts } from '~/composables/useProducts'
import { formatRupiah } from '~/utils/format'
import { buildProductInquiry, buildWhatsAppUrl } from '~/utils/whatsapp'
import { site } from '~/utils/site'

const route = useRoute()
const { bySlug, categoryName, related } = useProducts()

const product = computed(() => bySlug(String(route.params.slug)))
const selectedSize = ref('')
const relatedProducts = computed(() =>
  product.value ? related(product.value, 4) : [],
)

const waHref = computed(() => {
  if (!product.value) return buildWhatsAppUrl()
  return buildWhatsAppUrl(
    buildProductInquiry(product.value, selectedSize.value || undefined),
  )
})

useSeoMeta({
  title: () => (product.value ? `${product.value.name} — ${site.name}` : `Produk — ${site.name}`),
  description: () =>
    product.value
      ? `${product.value.name} — ${product.value.description}`
      : undefined,
  ogTitle: () => product.value?.name ?? `Produk — ${site.name}`,
  ogDescription: () => (product.value ? product.value.description : undefined),
  ogImage: () => product.value?.images[0] ?? undefined,
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Produk tidak ditemukan',
    fatal: true,
  })
}
</script>

<template>
  <template v-if="product">
    <section class="bg-cream pt-24 lg:pt-32">
      <div class="container-x">
        <nav
          aria-label="Breadcrumb"
          class="flex flex-wrap items-center gap-1.5 text-sm text-ink-500"
        >
          <NuxtLink to="/" class="transition-colors hover:text-ink-900">Beranda</NuxtLink>
          <ChevronRight :size="14" aria-hidden="true" />
          <NuxtLink to="/produk" class="transition-colors hover:text-ink-900">Produk</NuxtLink>
          <ChevronRight :size="14" aria-hidden="true" />
          <span class="text-ink-900" aria-current="page">{{ product.name }}</span>
        </nav>

        <div
          class="mt-8 grid gap-10 pb-16 lg:grid-cols-2 lg:gap-16 lg:pb-24"
        >
          <ProductGallery :images="product.images" :alt="product.name" />

          <div>
            <Badge>{{ categoryName(product.category) }}</Badge>
            <h1
              class="mt-4 font-display text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl"
            >
              {{ product.name }}
            </h1>
            <p class="mt-3 font-display text-2xl text-clay-700">
              {{ formatRupiah(product.price) }}
            </p>
            <p class="mt-5 text-base leading-relaxed text-ink-500">
              {{ product.description }}
            </p>

            <fieldset class="mt-8">
              <legend class="flex items-center gap-2 text-sm font-semibold text-ink-900">
                <Ruler :size="16" class="text-clay-600" aria-hidden="true" />
                Pilih Ukuran
              </legend>
              <div class="mt-3 flex flex-wrap gap-2">
                <button
                  v-for="size in product.sizes"
                  :key="size"
                  type="button"
                  :aria-pressed="selectedSize === size"
                  :class="
                    selectedSize === size
                      ? 'border-ink-900 bg-ink-900 text-cream'
                      : 'border-sand-200 bg-white text-ink-700 hover:border-ink-900/40'
                  "
                  class="rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200"
                  @click="selectedSize = selectedSize === size ? '' : size"
                >
                  {{ size }}
                </button>
              </div>
            </fieldset>

            <fieldset class="mt-6">
              <legend class="flex items-center gap-2 text-sm font-semibold text-ink-900">
                <Palette :size="16" class="text-clay-600" aria-hidden="true" />
                Pilihan Warna
              </legend>
              <ul class="mt-3 flex flex-wrap gap-2" role="list">
                <li
                  v-for="color in product.colors"
                  :key="color"
                  class="rounded-full border border-sand-200 bg-white px-4 py-2 text-sm font-medium text-ink-700"
                >
                  {{ color }}
                </li>
              </ul>
            </fieldset>

            <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button :href="waHref" external variant="primary" size="lg" class="sm:flex-1">
                <MessageCircle :size="18" aria-hidden="true" />
                Pesan via WhatsApp
              </Button>
            </div>
            <p class="mt-3 text-xs text-ink-500">
              Konsultasi ukuran dan ketersediaan stok melalui WhatsApp.
            </p>

            <ul class="mt-8 space-y-2.5 border-t border-sand-200 pt-6 text-sm text-ink-500">
              <li class="flex items-center gap-2">
                <Check :size="15" class="shrink-0 text-clay-600" aria-hidden="true" />
                Tersedia di toko maupun pengiriman
              </li>
              <li class="flex items-center gap-2">
                <Check :size="15" class="shrink-0 text-clay-600" aria-hidden="true" />
                Bisa konsultasi ukuran sebelum memesan
              </li>
              <li class="flex items-center gap-2">
                <Store :size="15" class="shrink-0 text-clay-600" aria-hidden="true" />
                Dilayani langsung oleh staf {{ site.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section v-if="relatedProducts.length" class="bg-sand-50 py-16 lg:py-24">
      <div class="container-x">
        <SectionHeading
          eyebrow="Produk Lainnya"
          title="Produk Serupa"
          description="Mungkin Anda juga ingin melihat koleksi serupa."
        />
        <div class="mt-10">
          <ProductGrid :products="relatedProducts" />
        </div>
      </div>
    </section>
  </template>
</template>