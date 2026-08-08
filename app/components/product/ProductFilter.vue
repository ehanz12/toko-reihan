<script setup lang="ts">
import { ChevronDown, Search, SlidersHorizontal, X } from '@lucide/vue'
import { categoryFilters } from '~/data/categories'

const props = defineProps<{
  query: string
  category: string
  sort: string
}>()

const emit = defineEmits<{
  'update:query': [value: string]
  'update:category': [value: string]
  'update:sort': [value: string]
}>()

const sortOptions = [
  { value: 'featured', label: 'Rekomendasi' },
  { value: 'price-asc', label: 'Harga Terendah' },
  { value: 'price-desc', label: 'Harga Tertinggi' },
  { value: 'name-asc', label: 'Nama A–Z' },
]
</script>

<template>
  <div class="space-y-6">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center">
      <div class="relative flex-1">
        <label for="product-search" class="sr-only">Cari produk</label>
        <Search
          :size="18"
          class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-500"
          aria-hidden="true"
        />
        <input
          id="product-search"
          :value="props.query"
          type="search"
          placeholder="Cari produk…"
          class="w-full rounded-xl border border-sand-200 bg-cream py-3 pl-11 pr-11 text-sm text-ink-900 placeholder:text-ink-500/60 transition-colors focus:border-clay-600"
          @input="emit('update:query', ($event.target as HTMLInputElement).value)"
        />
        <button
          v-if="props.query"
          type="button"
          aria-label="Bersihkan pencarian"
          class="absolute right-3 top-1/2 grid size-7 -translate-y-1/2 place-items-center rounded-full text-ink-500 transition-colors hover:bg-sand-100 hover:text-ink-900"
          @click="emit('update:query', '')"
        >
          <X :size="15" aria-hidden="true" />
        </button>
      </div>

      <div class="relative sm:w-52">
        <label for="product-sort" class="sr-only">Urutkan produk</label>
        <select
          id="product-sort"
          :value="props.sort"
          class="w-full appearance-none rounded-xl border border-sand-200 bg-white py-3 pr-10 pl-4 text-sm text-ink-900 transition-colors focus:border-clay-600"
          @change="emit('update:sort', ($event.target as HTMLSelectElement).value)"
        >
          <option v-for="option in sortOptions" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
        <ChevronDown
          :size="16"
          class="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-500"
          aria-hidden="true"
        />
      </div>
    </div>

    <div
      role="group"
      aria-label="Filter kategori"
      class="flex flex-wrap items-center gap-2"
    >
      <SlidersHorizontal :size="16" class="mr-1 text-ink-500" aria-hidden="true" />
      <button
        v-for="filter in categoryFilters"
        :key="filter.slug"
        type="button"
        :aria-pressed="props.category === filter.slug"
        :class="
          props.category === filter.slug
            ? 'bg-ink-900 text-cream'
            : 'bg-white text-ink-600 hover:bg-sand-100'
        "
        class="rounded-full border border-sand-200 px-4 py-2 text-sm font-medium transition-colors duration-200"
        @click="emit('update:category', filter.slug)"
      >
        {{ filter.label }}
      </button>
    </div>
  </div>
</template>