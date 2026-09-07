<script setup lang="ts">
import { Menu, MessageCircle, X } from '@lucide/vue'
import { navLinks } from '~/utils/site'
import { buildWhatsAppUrl } from '~/utils/whatsapp'

const route = useRoute()
const scrolled = ref(false)
const open = ref(false)
const panel = ref<HTMLElement | null>(null)
let desktopQuery: MediaQueryList | undefined
let lastActive: HTMLElement | null = null

function onScroll() {
  scrolled.value = window.scrollY > 8
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') close()
}

function lockScroll() {
  document.documentElement.style.overflow = 'hidden'
  document.body.style.overflow = 'hidden'
}

function unlockScroll() {
  document.documentElement.style.overflow = ''
  document.body.style.overflow = ''
}

function close() {
  open.value = false
}

function toggle() {
  if (open.value) {
    close()
  } else {
    lastActive = document.activeElement as HTMLElement | null
    open.value = true
  }
}

function onBreakpointChange(event: MediaQueryListEvent) {
  if (event.matches) close()
}

function isActive(to: string): boolean {
  if (to === '/') return route.path === '/'
  return route.path === to || route.path.startsWith(`${to}/`)
}

watch(open, (value) => {
  if (value) {
    lockScroll()
    window.addEventListener('keydown', onKeydown)
    nextTick(() => panel.value?.focus({ preventScroll: true }))
  } else {
    unlockScroll()
    window.removeEventListener('keydown', onKeydown)
    lastActive?.focus?.()
    lastActive = null
  }
})

watch(
  () => route.fullPath,
  () => close(),
)

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  desktopQuery = window.matchMedia('(min-width: 1024px)')
  if (desktopQuery.matches) close()
  desktopQuery.addEventListener('change', onBreakpointChange)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  desktopQuery?.removeEventListener('change', onBreakpointChange)
  unlockScroll()
})
</script>

<template>
  <header
    :class="
      scrolled || open
        ? 'bg-cream/90 shadow-[0_1px_0_rgba(33,29,23,0.07)] backdrop-blur-md'
        : 'bg-transparent'
    "
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
  >
    <nav class="container-x flex h-16 items-center justify-between lg:h-20" aria-label="Navigasi utama">
      <Logo />

      <ul class="hidden items-center gap-1 lg:flex">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink
            :to="link.to"
            :class="isActive(link.to) ? 'text-ink-900' : 'text-ink-500 hover:text-ink-900'"
            class="rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200"
            :aria-current="isActive(link.to) ? 'page' : undefined"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <div class="flex items-center gap-3">
        <Button
          :href="buildWhatsAppUrl()"
          external
          variant="secondary"
          size="sm"
          class="hidden sm:inline-flex"
        >
          <MessageCircle :size="16" />
          Hubungi Kami
        </Button>
        <button
          type="button"
          class="relative z-10 grid size-10 place-items-center rounded-lg text-ink-900 transition-colors hover:bg-sand-100 lg:hidden"
          :aria-expanded="open"
          aria-controls="mobile-menu"
          :aria-label="open ? 'Tutup menu navigasi' : 'Buka menu navigasi'"
          @click="toggle"
        >
          <Menu v-if="!open" :size="22" aria-hidden="true" />
          <X v-else :size="22" aria-hidden="true" />
        </button>
      </div>
    </nav>
  </header>

  <Teleport to="body">
    <Transition name="mobile-menu">
      <div
        v-if="open"
        id="mobile-menu"
        ref="panel"
        tabindex="-1"
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
        class="fixed top-16 inset-x-0 bottom-0 z-50 overflow-y-auto bg-cream shadow-[0_1px_0_rgba(33,29,23,0.07)] lg:hidden"
      >
        

        <div class="container-x flex flex-col gap-1 pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            :class="
              isActive(link.to)
                ? 'bg-sand-100 text-ink-900'
                : 'text-ink-600'
            "
            class="rounded-xl px-4 py-3.5 font-display text-xl font-medium transition-colors"
          >
            {{ link.label }}
          </NuxtLink>
          <div class="mt-4 border-t border-sand-200 pt-6">
            <Button :href="buildWhatsAppUrl()" external size="lg" class="w-full">
              <MessageCircle :size="18" />
              Hubungi Kami via WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
