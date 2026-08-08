<script setup lang="ts">
const props = defineProps<{ images: string[]; alt: string }>()

const active = ref(0)

watch(
  () => props.images,
  () => {
    active.value = 0
  },
)
</script>

<template>
  <div class="space-y-3">
    <div class="aspect-[4/5] overflow-hidden rounded-2xl bg-sand-100">
      <img :src="images[active]" :alt="alt" class="size-full object-cover" />
    </div>

    <div
      v-if="images.length > 1"
      class="grid grid-cols-4 gap-3"
      role="tablist"
      aria-label="Pilih gambar produk"
    >
      <button
        v-for="(image, index) in images"
        :key="image + index"
        type="button"
        role="tab"
        :aria-selected="active === index"
        :aria-label="`Tampilkan gambar ${index + 1}`"
        :class="
          active === index
            ? 'ring-2 ring-clay-600 ring-offset-2 ring-offset-cream'
            : 'opacity-70 hover:opacity-100'
        "
        class="aspect-[4/5] overflow-hidden rounded-lg bg-sand-100 transition-all duration-300"
        @click="active = index"
      >
        <img
          :src="image"
          :alt="`${alt} — tampilan ${index + 1}`"
          loading="lazy"
          class="size-full object-cover"
        />
      </button>
    </div>
  </div>
</template>