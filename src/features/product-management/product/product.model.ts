export interface ProductEntity {
  id: string
  name: string
  price: number
  images?: File | String
  cat_product_id?: string
}
