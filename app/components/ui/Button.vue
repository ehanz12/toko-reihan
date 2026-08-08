<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'light' | 'light-outline'
type ButtonSize = 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    to?: RouteLocationRaw
    href?: string
    variant?: ButtonVariant
    size?: ButtonSize
    type?: 'button' | 'submit'
    disabled?: boolean
    external?: boolean
    ariaLabel?: string
  }>(),
  {
    variant: 'primary',
    size: 'md',
    type: 'button',
    disabled: false,
    external: false,
  },
)

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 select-none'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-clay-600 text-cream shadow-sm hover:bg-clay-700 active:bg-clay-800',
  secondary:
    'bg-transparent text-ink-900 ring-1 ring-inset ring-ink-900/20 hover:bg-ink-900 hover:text-cream hover:ring-ink-900',
  ghost: 'bg-transparent text-ink-900 hover:bg-sand-100',
  light: 'bg-cream text-ink-900 shadow-sm hover:bg-sand-100',
  'light-outline':
    'bg-transparent text-cream ring-1 ring-inset ring-cream/30 hover:bg-cream/10 hover:ring-cream/50',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

const classes = computed(() =>
  [
    base,
    variants[props.variant],
    sizes[props.size],
    props.disabled ? 'pointer-events-none opacity-50' : '',
  ].join(' '),
)
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="classes" :aria-label="ariaLabel">
    <slot />
  </NuxtLink>
  <a
    v-else-if="href"
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :class="classes"
    :aria-label="ariaLabel"
  >
    <slot />
  </a>
  <button
    v-else
    :type="type"
    :disabled="disabled"
    :class="classes"
    :aria-label="ariaLabel"
  >
    <slot />
  </button>
</template>