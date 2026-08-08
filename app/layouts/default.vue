<template>
  <div class="flex min-h-screen flex-col">
    <a
      href="#main"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink-900 focus:px-4 focus:py-2 focus:text-sm focus:text-cream"
    >
      Lewati ke konten utama
    </a>
    <Navbar />
    <main id="main" class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>