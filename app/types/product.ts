export interface Product {
  id: number
  name: string
  slug: string
  category: string
  price: number
  description: string
  images: string[]
  sizes: string[]
  colors: string[]
  featured: boolean
}

export interface Category {
  slug: string
  name: string
  description: string
  image: string
}

export type GalleryCategory = 'produk' | 'toko' | 'pelayanan' | 'koleksi'

export interface GalleryItem {
  id: number
  category: GalleryCategory
  title: string
  image: string
  aspect: string
}

export interface Testimonial {
  name: string
  role: string
  message: string
  initial: string
}

export interface Faq {
  question: string
  answer: string
}
