<script setup lang="ts">
withDefaults(defineProps<{
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}>(), { align: 'left' })
</script>

<template>
  <div :class="align === 'center' ? 'mx-auto text-center' : ''" class="max-w-2xl">
    <p v-if="eyebrow" class="eyebrow">{{ eyebrow }}</p>
    <h2
      class="mt-3 font-display text-3xl font-medium tracking-tight text-ink-900 sm:text-4xl"
    >
      {{ title }}
    </h2>
    <p v-if="description" class="mt-4 text-base leading-relaxed text-ink-500 sm:text-lg">
      {{ description }}
    </p>
  </div>
</template>