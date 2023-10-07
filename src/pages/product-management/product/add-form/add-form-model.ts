import { ProductEntity } from '@/features/product-management/product/product.model'

export interface SubmitCreateProduct {
  onFormSubmit: (data: ProductEntity) => void
  defaultValues?: ProductEntity
  isLoading: boolean
}
