import {
  CreateProductProps,
  ProductEntity,
} from '@/features/product-management/product/product.model'

export interface SubmitCreateProduct {
  onFormSubmit: (data: CreateProductProps) => void
  defaultValues?: ProductEntity
  isLoading: boolean
}
