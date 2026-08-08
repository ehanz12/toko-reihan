<script setup lang="ts">
import { ArrowRight, ArrowUpRight, Ruler } from '@lucide/vue'
import { useProducts } from '~/composables/useProducts'
import { formatRupiah } from '~/utils/format'
import type { Product } from '~/types/product'

defineProps<{ product: Product }>()

const { categoryName } = useProducts()
</script>

<template>
  <article class="group">
    <NuxtLink :to="`/produk/${product.slug}`" class="block" :aria-label="product.name">
      <div class="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand-100">
        <img
          :src="product.images[0]"
          :alt="product.name"
          loading="lazy"
          class="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <Badge class="absolute left-3 top-3">
          {{ categoryName(product.category) }}
        </Badge>
        <span
          class="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-cream/90 text-ink-900 opacity-0 shadow-soft backdrop-blur transition-all duration-300 group-hover:opacity-100"
          aria-hidden="true"
        >
          <ArrowUpRight :size="16" />
        </span>
      </div>

      <div class="mt-4 space-y-1.5">
        <p class="text-xs font-medium tracking-wide text-ink-500 uppercase">
          {{ categoryName(product.category) }}
        </p>
        <h3
          class="font-medium text-ink-900 transition-colors duration-200 group-hover:text-clay-700"
        >
          {{ product.name }}
        </h3>
        <p class="font-display text-lg text-ink-900">{{ formatRupiah(product.price) }}</p>
        <p class="flex items-center gap-1.5 text-xs text-ink-500">
          <Ruler :size="13" aria-hidden="true" />
          Ukuran: {{ product.sizes.join(', ') }}
        </p>
        <p class="inline-flex items-center gap-1.5 text-sm font-semibold text-clay-700">
          Lihat Detail
          <ArrowRight :size="14" aria-hidden="true" />
        </p>
      </div>
    </NuxtLink>
  </article>
</template>