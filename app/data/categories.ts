import type { Category } from '~/types/product'

export const categories: Category[] = [
  {
    slug: 'seragam-sekolah',
    name: 'Seragam Sekolah',
    description: 'Seragam SD, SMP, hingga SMA dengan bahan adem dan ukuran lengkap.',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'baju-koko',
    name: 'Baju Koko',
    description: 'Baju koko pria dan anak dari bahan berkualitas, nyaman untuk ibadah dan acara formal.',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'gamis',
    name: 'Gamis',
    description: 'Gamis syar\u2019i dengan potongan rapi dan bahan jatuh, nyaman dipakai sepanjang hari.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'busana-muslim',
    name: 'Busana Muslim',
    description: 'Rok, atasan, kerudung, hingga perlengkapan busana muslim untuk seluruh keluarga.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'kemeja',
    name: 'Kemeja',
    description: 'Kemeja formal dan casual untuk pria, wanita, dan anak.',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=900&q=80',
  },
  {
    slug: 'lainnya',
    name: 'Lainnya',
    description: 'Celana, aksesori, dan kebutuhan busana lainnya dalam satu tempat.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=900&q=80',
  },
]

export const categoryFilters = [
  { slug: 'all', label: 'Semua' },
  { slug: 'seragam-sekolah', label: 'Seragam' },
  { slug: 'baju-koko', label: 'Koko' },
  { slug: 'gamis', label: 'Gamis' },
  { slug: 'busana-muslim', label: 'Busana Muslim' },
  { slug: 'kemeja', label: 'Kemeja' },
  { slug: 'celana', label: 'Celana' },
  { slug: 'aksesori', label: 'Aksesori' },
]
