export interface ProductEntity {
  id: string
  name: string
  price: number
  file?: File | String
  cat_product_id?: string
}
