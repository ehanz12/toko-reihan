<script setup lang="ts">
import { Quote, Star } from '@lucide/vue'
import { testimonials } from '~/data/testimonials'
</script>

<template>
  <section class="bg-sand-50 py-20 lg:py-28" aria-labelledby="testimonials-heading">
    <div class="container-x">
      <SectionHeading
        id="testimonials-heading"
        eyebrow="Testimoni"
        title="Apa Kata Pelanggan Kami"
        align="center"
      />

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <Reveal v-for="testimonial in testimonials" :key="testimonial.name">
          <figure
            class="flex h-full flex-col rounded-2xl border border-sand-200 bg-cream p-8 shadow-soft"
          >
            <div class="flex items-center justify-between">
              <div
                class="flex items-center gap-1"
                role="img"
                aria-label="Penilaian 5 dari 5 bintang"
              >
                <Star
                  v-for="star in 5"
                  :key="star"
                  :size="14"
                  class="fill-clay-500 text-clay-500"
                  aria-hidden="true"
                />
              </div>
              <Quote :size="28" class="text-sand-200" aria-hidden="true" />
            </div>
            <blockquote class="mt-5 flex-1">
              <p class="text-sm leading-relaxed text-ink-700">
                &ldquo;{{ testimonial.message }}&rdquo;
              </p>
            </blockquote>
            <figcaption class="mt-6 flex items-center gap-3 border-t border-sand-200 pt-5">
              <span
                class="grid size-11 place-items-center rounded-full bg-ink-900 font-display text-base text-cream"
                aria-hidden="true"
              >
                {{ testimonial.initial }}
              </span>
              <div>
                <p class="text-sm font-semibold text-ink-900">{{ testimonial.name }}</p>
                <p class="text-xs text-ink-500">{{ testimonial.role }}</p>
              </div>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </div>
  </section>
</template>