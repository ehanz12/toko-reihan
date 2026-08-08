import type { GalleryItem } from '~/types/product'

function img(id: string, width = 900): string {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: 'produk',
    title: 'Kemeja putih siap kirim',
    image: img('photo-1521572163474-6864f9cf17ab'),
    aspect: 'aspect-[3/4]',
  },
  {
    id: 2,
    category: 'toko',
    title: 'Suasana toko kami',
    image: img('photo-1441986300917-64674bd600d8'),
    aspect: 'aspect-square',
  },
  {
    id: 3,
    category: 'produk',
    title: 'Koleksi gamis pilihan',
    image: img('photo-1539109136881-3be0616acf4b'),
    aspect: 'aspect-[4/5]',
  },
  {
    id: 4,
    category: 'pelayanan',
    title: 'Membantu pemilihan ukuran',
    image: img('photo-1483985988355-763728e1935b'),
    aspect: 'aspect-[3/4]',
  },
  {
    id: 5,
    category: 'koleksi',
    title: 'Koleksi seragam anak',
    image: img('photo-1562157873-818bc0726f68'),
    aspect: 'aspect-[4/3]',
  },
  {
    id: 6,
    category: 'produk',
    title: 'Busana muslim anak',
    image: img('photo-1515886657613-9f3515b0c78f'),
    aspect: 'aspect-square',
  },
  {
    id: 7,
    category: 'toko',
    title: 'Rak celana dan kemeja',
    image: img('photo-1558769132-cb1aea458c5e'),
    aspect: 'aspect-[3/4]',
  },
  {
    id: 8,
    category: 'koleksi',
    title: 'Koleksi baru musim ini',
    image: img('photo-1524504388940-b1c1722653e1'),
    aspect: 'aspect-[4/5]',
  },
  {
    id: 9,
    category: 'pelayanan',
    title: 'Penataan produk harian',
    image: img('photo-1490578474895-699cd4e2cf59'),
    aspect: 'aspect-[4/3]',
  },
  {
    id: 10,
    category: 'produk',
    title: 'Kemeja formal pilihan',
    image: img('photo-1506629082955-511b1aa562c8'),
    aspect: 'aspect-[3/4]',
  },
  {
    id: 11,
    category: 'koleksi',
    title: 'Editorial foto produk',
    image: img('photo-1509631179647-0177331693ae'),
    aspect: 'aspect-square',
  },
  {
    id: 12,
    category: 'pelayanan',
    title: 'Konsultasi ukuran bersama staf',
    image: img('photo-1594938298603-c8148c4dae35'),
    aspect: 'aspect-[4/5]',
  },
]
