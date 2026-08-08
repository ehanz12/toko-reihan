<script setup lang="ts">
import { PackageSearch } from '@lucide/vue'
import type { Product } from '~/types/product'

withDefaults(defineProps<{ products: Product[]; emptyMessage?: string }>(), {
  emptyMessage: 'Coba ubah kata kunci atau filter pencarian Anda.',
})
</script>

<template>
  <div
    v-if="products.length"
    class="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4"
    aria-label="Daftar produk"
  >
    <ProductCard v-for="product in products" :key="product.id" :product="product" />
  </div>

  <div
    v-else
    class="rounded-2xl border border-dashed border-sand-300 bg-sand-50 px-6 py-20 text-center"
  >
    <PackageSearch :size="40" class="mx-auto text-ink-500/50" aria-hidden="true" />
    <h3 class="mt-4 font-display text-xl text-ink-900">Tidak ada produk ditemukan</h3>
    <p class="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-ink-500">
      {{ emptyMessage }}
    </p>
  </div>
</template>