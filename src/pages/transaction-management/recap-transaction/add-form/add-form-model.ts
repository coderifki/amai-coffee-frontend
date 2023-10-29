import { CategoryProductEntity } from '@/features/product-management/category-product/category-product.model'

export interface SubmitCreateCategoryProduct {
  onFormSubmit: (data: CategoryProductEntity) => void
  defaultValues?: CategoryProductEntity
  isLoading: boolean
}
