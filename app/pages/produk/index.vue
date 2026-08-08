<script setup lang="ts">
import { MessageCircle } from '@lucide/vue'
import { useProducts } from '~/composables/useProducts'
import { site } from '~/utils/site'
import { buildWhatsAppUrl } from '~/utils/whatsapp'

const route = useRoute()
const router = useRouter()
const { search } = useProducts()

const query = ref('')
const category = ref('all')
const sort = ref('featured')

function syncFromRoute() {
  const params = route.query
  query.value = typeof params.q === 'string' ? params.q : ''
  category.value = typeof params.kategori === 'string' ? params.kategori : 'all'
}

syncFromRoute()

watch(() => route.query, syncFromRoute)

watch([query, category, sort], () => {
  router.replace({
    query: {
      ...(query.value ? { q: query.value } : {}),
      ...(category.value !== 'all' ? { kategori: category.value } : {}),
    },
  })
})

const filtered = computed(() => {
  let result = search(query.value)
  if (category.value !== 'all') {
    result = result.filter((product) => product.category === category.value)
  }
  const sorted = [...result]
  switch (sort.value) {
    case 'price-asc':
      sorted.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      sorted.sort((a, b) => b.price - a.price)
      break
    case 'name-asc':
      sorted.sort((a, b) => a.name.localeCompare(b.name, 'id'))
      break
    default:
      sorted.sort((a, b) => Number(b.featured) - Number(a.featured))
  }
  return sorted
})

useSeoMeta({
  title: `Koleksi Produk — ${site.name}`,
  description: `Jelajahi koleksi lengkap ${site.name}: seragam sekolah, baju koko, gamis, busana muslim, kemeja, dan aksesori untuk keluarga.`,
  ogTitle: `Koleksi Produk — ${site.name}`,
  ogDescription: `Koleksi lengkap ${site.name} untuk kebutuhan busana keluarga.`,
  ogImage: site.ogImage,
  ogType: 'website',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="bg-cream pt-24 lg:pt-32">
    <section class="container-x pb-14 lg:pb-16">
      <p class="eyebrow">Katalog</p>
      <h1
        class="mt-3 font-display text-4xl font-medium tracking-tight text-ink-900 sm:text-5xl"
      >
        Semua Koleksi
      </h1>
      <p class="mt-4 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg">
        Temukan produk yang sesuai dengan kebutuhan Anda.
      </p>
    </section>

    <section class="border-t border-sand-200">
      <div class="container-x py-10">
        <ProductFilter
          :query="query"
          :category="category"
          :sort="sort"
          @update:query="query = $event"
          @update:category="category = $event"
          @update:sort="sort = $event"
        />
        <p class="mt-8 text-sm text-ink-500" role="status">
          Menampilkan {{ filtered.length }} produk
        </p>
        <div class="mt-6">
          <ProductGrid
            :products="filtered"
            empty-message="Tidak ada produk yang cocok dengan kata kunci atau filter Anda."
          />
        </div>
      </div>
    </section>

    <section class="border-t border-sand-200 bg-sand-50">
      <div class="container-x flex flex-col items-center py-16 text-center">
        <h2 class="font-display text-2xl font-medium text-ink-900">
          Butuh bantuan memilih?
        </h2>
        <p class="mt-3 max-w-md text-sm leading-relaxed text-ink-500">
          Konsultasikan ukuran dan kebutuhan Anda langsung dengan staf kami melalui
          WhatsApp.
        </p>
        <div class="mt-7">
          <Button
            :href="buildWhatsAppUrl('Halo, saya ingin bertanya tentang produk di toko Anda.')"
            external
            size="lg"
          >
            <MessageCircle :size="18" aria-hidden="true" />
            Tanya via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>