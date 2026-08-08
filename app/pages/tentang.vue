<script setup lang="ts">
import { BadgeCheck, HeartHandshake, Wallet } from '@lucide/vue'
import { site } from '~/utils/site'

useSeoMeta({
  title: `Tentang Kami — ${site.name}`,
  description: `Kenali perjalanan ${site.name}: toko busana keluarga yang tumbuh bersama pelanggan sejak ${site.foundedYear}.`,
  ogTitle: `Tentang Kami — ${site.name}`,
  ogDescription: `Kenali perjalanan ${site.name}.`,
  ogImage: site.ogImage,
  ogType: 'website',
})

const values = [
  {
    icon: BadgeCheck,
    title: 'Kualitas Tanpa Kompromi',
    description:
      'Kami memilih bahan dengan teliti dan memastikan jahitan rapi di setiap produk yang masuk ke rak kami.',
  },
  {
    icon: Wallet,
    title: 'Harga yang Jujur',
    description:
      'Harga kami wajar dan transparan. Kami tumbuh karena pelanggan kembali, bukan karena harga yang mengecoh.',
  },
  {
    icon: HeartHandshake,
    title: 'Pelayanan yang Hangat',
    description:
      'Setiap pelanggan diperlakukan seperti keluarga sendiri, dilayani dengan sabar dan penuh perhatian.',
  },
]

const journey = [
  {
    year: site.foundedYear,
    title: 'Toko pertama dibuka',
    description:
      'Sebuah toko kecil dengan tiga rak pakaian menjadi awal perjalanan kami melayani keluarga di sekitar.',
  },
  {
    year: '2012',
    title: 'Dikenal sebagai tujuan seragam',
    description:
      'Sekolah-sekolah di sekitar mulai mempercayakan kebutuhan seragam kepada kami.',
  },
  {
    year: '2019',
    title: 'Koleksi busana muslim tumbuh',
    description:
      'Gamis, baju koko, dan busana muslim menjadi bagian keluarga dari katalog kami.',
  },
  {
    year: '2026',
    title: 'Melangkah ke dunia digital',
    description:
      'Website ini hadir agar lebih banyak keluarga dapat menemukan kami, di mana pun berada.',
  },
]
</script>

<template>
  <div class="bg-cream">
    <section class="container-x pt-32 pb-16 lg:pb-24">
      <p class="eyebrow">Tentang Kami</p>
      <h1
        class="mt-3 max-w-3xl font-display text-4xl font-medium tracking-tight text-ink-900 sm:text-5xl"
      >
        Berawal dari Toko, Tumbuh Bersama Pelanggan
      </h1>
      <p class="mt-5 max-w-2xl text-base leading-relaxed text-ink-500 sm:text-lg">
        {{ site.name }} adalah toko busana keluarga yang telah melayani kebutuhan
        seragam sekolah, busana muslim, dan pakaian sehari-hari sejak {{ site.foundedYear }}.
      </p>
    </section>

    <section class="border-t border-sand-200 bg-sand-50 py-16 lg:py-24">
      <div class="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading eyebrow="Perjalanan Kami" title="Dari Pojok Pasar ke Hati Banyak Keluarga" />
          <div class="mt-6 space-y-4 text-base leading-relaxed text-ink-500">
            <p>
              Semuanya bermula dari satu toko kecil yang menjual beberapa potong pakaian.
              Dengan pelayanan yang jujur dan harga yang wajar, pelanggan mulai
              berdatangan kembali — membawa serta keluarga, tetangga, dan teman.
            </p>
            <p>
              Berkat kepercayaan itu, kami tumbuh: koleksi semakin lengkap, toko semakin
              luas, dan nama {{ site.name }} mulai dikenal sebagai tempat belanja busana
              keluarga yang lengkap dan terpercaya.
            </p>
            <p>
              Namun prinsip yang sama tetap kami pegang sampai hari ini — produk
              berkualitas, harga jujur, dan senyum untuk setiap pelanggan.
            </p>
          </div>
        </div>
        <div class="overflow-hidden rounded-[2rem] shadow-soft">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
            :alt="`Suasana di dalam toko ${site.name}`"
            loading="lazy"
            class="aspect-[4/3] size-full object-cover"
          />
        </div>
      </div>
    </section>

    <section class="bg-cream py-16 lg:py-24" aria-labelledby="values-heading">
      <div class="container-x">
        <SectionHeading
          id="values-heading"
          eyebrow="Nilai Kami"
          title="Prinsip yang Kami Pegang"
          align="center"
        />
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <Reveal v-for="value in values" :key="value.title">
            <div class="h-full rounded-2xl border border-sand-200 bg-white p-8 shadow-soft">
              <span class="grid size-12 place-items-center rounded-xl bg-clay-50 text-clay-600" aria-hidden="true">
                <component :is="value.icon" :size="22" />
              </span>
              <h3 class="mt-5 font-display text-lg font-medium text-ink-900">{{ value.title }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-ink-500">{{ value.description }}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <section class="bg-sand-50 py-16 lg:py-24" aria-labelledby="quality-heading">
      <div class="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div class="order-2 lg:order-1 overflow-hidden rounded-[2rem] shadow-soft">
          <img
            src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1000&q=80"
            alt="Koleksi pakaian pria tersimpan rapi"
            loading="lazy"
            class="aspect-[4/5] size-full object-cover sm:aspect-[4/3]"
          />
        </div>
        <div class="order-1 lg:order-2">
          <SectionHeading
            id="quality-heading"
            eyebrow="Kualitas Produk"
            title="Dipilih untuk Dipakai Sehari-hari"
          />
          <p class="mt-6 text-base leading-relaxed text-ink-500">
            Kami tidak hanya menjual pakaian — kami memastikan setiap pakaian layak
            dipakai berulang, dicuci berkali-kali, dan tetap nyaman. Itulah sebabnya kami
            bekerja sama dengan penyedia bahan terbaik dan memeriksa setiap produk
            sebelum sampai ke rak.
          </p>
          <ul class="mt-6 space-y-3 text-sm text-ink-600">
            <li class="flex items-center gap-2.5">
              <Check :size="15" class="shrink-0 text-clay-600" aria-hidden="true" />
              Bahan dipilih dari tekstil yang halus, adem, dan tidak mudah luntur
            </li>
            <li class="flex items-center gap-2.5">
              <Check :size="15" class="shrink-0 text-clay-600" aria-hidden="true" />
              Jahitan diperiksa satu per satu sebelum dijual
            </li>
            <li class="flex items-center gap-2.5">
              <Check :size="15" class="shrink-0 text-clay-600" aria-hidden="true" />
              Ukuran akurat, konsisten antara satu produk dengan lainnya
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="bg-cream py-16 lg:py-24" aria-labelledby="service-heading">
      <div class="container-x">
        <SectionHeading
          id="service-heading"
          eyebrow="Pelayanan"
          title="Kami Melayani, Bukan Sekadar Menjual"
          description="Pelayanan adalah wajah toko kami. Dari mencoba baju hingga membantu memilih ukuran anak, kami ada untuk membantu."
        />
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="service in ['Konsultasi ukuran & bahan', 'Coba langsung di toko', 'Pengiriman ke luar kota', 'Pemesanan jumlah banyak']" :key="service" class="rounded-2xl border border-sand-200 bg-white px-6 py-8 text-center shadow-soft">
            <p class="font-medium text-ink-900">{{ service }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-ink-900 py-16 lg:py-24" aria-labelledby="journey-heading">
      <div class="container-x">
        <div class="max-w-2xl">
          <p class="eyebrow text-clay-100">Perjalanan Kami</p>
          <h2 id="journey-heading" class="mt-3 font-display text-3xl font-medium tracking-tight text-cream sm:text-4xl">
            Melangkah ke Dunia Digital
          </h2>
          <p class="mt-4 text-base leading-relaxed text-sand-200">
            Website ini adalah langkah baru kami untuk menjangkau lebih banyak keluarga.
            Katalog online hadir lebih dulu — selanjutnya, masih ada perjalanan yang
            menyenangkan menanti.
          </p>
        </div>

        <ol class="mt-12 space-y-0">
          <li v-for="(item, index) in journey" :key="item.year" class="relative pl-10 pb-10 last:pb-0 sm:pl-14">
            <span v-if="index < journey.length - 1" class="absolute left-3 top-3 bottom-0 w-px bg-ink-700 sm:left-4" aria-hidden="true"></span>
            <span class="absolute left-0 top-1 size-6 rounded-full border-2 border-clay-500 bg-ink-900 sm:size-8" aria-hidden="true">
              <span class="absolute inset-1 rounded-full bg-clay-500 sm:inset-1.5"></span>
            </span>
            <p class="font-display text-sm font-medium text-clay-500">{{ item.year }}</p>
            <h3 class="mt-1 font-display text-xl font-medium text-cream">{{ item.title }}</h3>
            <p class="mt-2 max-w-xl text-sm leading-relaxed text-sand-300">{{ item.description }}</p>
          </li>
        </ol>

        <div class="mt-14 flex flex-wrap gap-4">
          <Button to="/produk">Lihat Koleksi Kami</Button>
          <Button to="/kontak" variant="light-outline">Hubungi Kami</Button>
        </div>
      </div>
    </section>
  </div>
</template>