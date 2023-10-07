export interface IProductTableData {
  cat_product_id: string
  name: string
  price: number
  areas_of_expertise: string
}

export interface IProductForm {
  cat_product_id: string
  name: string
  price: number
  avatar: File | string
}
