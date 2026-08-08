import { computed } from 'vue'
import { products } from '~/data/products'
import { categories } from '~/data/categories'
import type { Product } from '~/types/product'

export function useProducts() {
  const all = computed(() => products)

  const featured = computed(() => products.filter((product) => product.featured).slice(0, 6))

  function byCategory(category: string): Product[] {
    return products.filter((product) => product.category === category)
  }

  function bySlug(slug: string): Product | undefined {
    return products.find((product) => product.slug === slug)
  }

  function search(query: string): Product[] {
    const q = query.trim().toLowerCase()
    if (!q) return products
    return products.filter((product) =>
      [product.name, product.description].join(' ').toLowerCase().includes(q),
    )
  }

  function related(product: Product, limit = 4): Product[] {
    return products
      .filter((item) => item.category === product.category && item.id !== product.id)
      .slice(0, limit)
  }

  function categoryName(slug: string): string {
    return categories.find((category) => category.slug === slug)?.name ?? slug
  }

  return { products: all, featured, byCategory, bySlug, search, related, categoryName }
}
