<script setup lang="ts">
import { House } from '@lucide/vue'

const props = defineProps<{
  error: { statusCode?: number; statusMessage?: string; message?: string }
}>()

const is404 = computed(() => props.error?.statusCode === 404)

useSeoMeta({
  title: is404.value ? 'Halaman Tidak Ditemukan' : 'Terjadi Kesalahan',
  robots: { index: false },
})
</script>

<template>
  <div class="container-x flex min-h-screen flex-col items-center justify-center py-24 text-center">
    <p class="font-display text-8xl font-medium text-clay-600 sm:text-9xl">
      {{ error?.statusCode ?? 500 }}
    </p>
    <h1 class="mt-5 font-display text-2xl font-medium text-ink-900 sm:text-3xl">
      {{ is404 ? 'Halaman tidak ditemukan' : 'Terjadi kesalahan' }}
    </h1>
    <p class="mt-3 max-w-md text-sm leading-relaxed text-ink-500">
      {{
        is404
          ? 'Halaman yang Anda cari mungkin telah dipindahkan atau tidak tersedia.'
          : (error?.message ?? 'Maaf, terjadi kesalahan yang tidak terduga.')
      }}
    </p>
    <div class="mt-8">
      <Button to="/" size="lg">
        <House :size="17" aria-hidden="true" />
        Kembali ke Beranda
      </Button>
    </div>
  </div>
</template>