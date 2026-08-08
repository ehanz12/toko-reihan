<script setup lang="ts">
withDefaults(defineProps<{ tone?: 'accent' | 'neutral' }>(), { tone: 'accent' })
</script>

<template>
  <span
    :class="
      tone === 'accent'
        ? 'bg-clay-50 text-clay-700 ring-clay-600/15'
        : 'bg-sand-100 text-ink-700 ring-ink-900/10'
    "
    class="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset"
  >
    <slot />
  </span>
</template>