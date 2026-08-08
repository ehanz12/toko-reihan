import type { Product } from '~/types/product'
import { site } from './site'

export function buildWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${site.waNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export function buildProductInquiry(product: Product, size?: string): string {
  const sizeText = size ? ` ukuran ${size}` : ''
  return `Halo ${site.name}, saya ingin menanyakan produk ${product.name}${sizeText}. Apakah masih tersedia?`
}

export function buildContactInquiry(name: string, message: string): string {
  return `Halo ${site.name}, saya ${name}. ${message}`
}
