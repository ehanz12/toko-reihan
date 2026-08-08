<script setup lang="ts">
import { site } from '~/utils/site'

withDefaults(defineProps<{ size?: 'sm' | 'md'; tone?: 'light' | 'dark' }>(), {
  size: 'md',
  tone: 'light',
})

const initial = computed(() => site.name.charAt(0).toUpperCase())
</script>

<template>
  <NuxtLink
    to="/"
    :aria-label="`${site.name} — Beranda`"
    class="inline-flex items-center gap-2.5"
  >
    <span
      :class="[size === 'sm' ? 'size-8 text-sm' : 'size-10 text-base', tone === 'dark' ? 'bg-cream text-ink-900' : 'bg-ink-900 text-cream']"
      class="grid place-items-center rounded-xl font-display font-semibold"
    >
      {{ initial }}
    </span>
    <span class="flex flex-col leading-tight">
      <span
        :class="[size === 'sm' ? 'text-sm' : 'text-base', tone === 'dark' ? 'text-cream' : 'text-ink-900']"
        class="font-display font-semibold tracking-tight uppercase"
      >
        {{ site.name }}
      </span>
      <span
        :class="[size === 'sm' ? 'text-[10px]' : 'text-[11px]', tone === 'dark' ? 'text-sand-300' : 'text-ink-500']"
        class="tracking-[0.18em] uppercase"
      >
        Family Fashion Store
      </span>
    </span>
  </NuxtLink>
</template>