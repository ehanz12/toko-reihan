<script setup lang="ts">
import { site } from '~/utils/site'

useSeoMeta({
  ogTitle: site.seoTitle,
  description: site.description,
  ogDescription: site.description,
  ogImage: site.ogImage,
  ogType: 'website',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <Hero />
    <WhyChooseUs />
    <Categories />
    <FeaturedProducts />
    <PromoBanner />
    <AboutPreview />
    <GalleryPreview />
    <Testimonials />
    <ContactCTA />
  </div>
</template>