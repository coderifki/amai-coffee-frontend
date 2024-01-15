export interface ProductEntity {
  id: string
  name?: string
  price?: number
  images?: File | String | null
  cat_product_id: string
}

export interface CreateProductProps {
  name: string
  price: number
  image?: File | null
  cat_product_id: string
}
