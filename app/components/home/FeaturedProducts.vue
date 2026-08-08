<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'
import { useProducts } from '~/composables/useProducts'

const { featured } = useProducts()
</script>

<template>
  <section class="bg-cream py-20 lg:py-28" aria-labelledby="featured-heading">
    <div class="container-x">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          id="featured-heading"
          eyebrow="Koleksi Unggulan"
          title="Produk Pilihan"
          description="Beberapa produk favorit pelanggan kami yang paling sering dicari."
        />
        <Button to="/produk" variant="ghost">
          Semua Produk
          <ArrowRight :size="16" aria-hidden="true" />
        </Button>
      </div>

      <div class="mt-12">
        <ProductGrid :products="featured" />
      </div>
    </div>
  </section>
</template>