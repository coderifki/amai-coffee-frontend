import { CategoryProductEntity } from '@/features/product-management/category-product/category-product.model'
import { CourseFormProps } from '@/pages/academic/master-data/course/form/course.form'
import { CategoryProductFormProps } from '@/pages/product-management/category-product/edit-form/edit-catproduct.form'
import { apiClient } from '@core/api/base.api'
import { BasePaginatedResponse, BaseResponse } from '@core/api/base.response'
import { Builder } from 'builder-pattern'

interface GetAllPaginationRequest {
  page: number
  limit: number
}

const mockList: CategoryProductEntity[] = [
  // {
  //   // cat_product_id: 'cat1',
  //   id: '1',
  //   name: 'categoryproduct',
  // },
]

// const mockData: CategoryProductEntity = {
//   // cat_product_id: 'cat1',
//   id: '1',
//   name: 'categoryproduct',
// }

// export class CategoryProductCreateRequest {
//   name: string
// }

// export class CategoryProductEditRequest extends CategoryProductCreateRequest {
//   id: string
// }

export function createCatProduct(props: CategoryProductEntity) {
  return apiClient.post('categoryproducts/create', props)
}

export function updateCatProduct(props: CategoryProductEntity) {
  return apiClient.put(`categoryproducts/update`, props)
}
// console.log(CategoryProductFormProps)
export async function getCategoryProductById(query: string) {
  const result = await apiClient.get<BaseResponse<CategoryProductEntity>>(
    `/categoryproducts/find`,
    { params: { id: query || undefined } }
  )
  return result.data.data
}
// // Delete data with HTTP method
// export function deleteCatProduct(props: CategoryProductEntity) {
//   const { id } = props
//   return apiClient.delete(`/categoryproducts/${id}`)
// }

export function deleteCatProduct(id: string) {
  return apiClient.delete(`/categoryproducts/${id}`)
}

export async function getAllCategoryProductPagination(
  props: GetAllPaginationRequest,
  mock = false
) {
  const { page, limit } = props
  let result: CategoryProductEntity[]

  const responseBuilder =
    Builder<BasePaginatedResponse<CategoryProductEntity[]>>()
  if (!mock) {
    const fetchApi = await apiClient.get<
      BasePaginatedResponse<CategoryProductEntity[]>
    >('/categoryproducts', {
      params: {
        page,
        limit,
      },
    })
    result = fetchApi.data?.data || []
    responseBuilder.message(fetchApi.data?.message || '')
    responseBuilder.page(page)
    responseBuilder.per_page(limit)
    responseBuilder.total_page(fetchApi.data?.total_page || 0)
    responseBuilder.total(fetchApi.data?.total || 0)
  } else {
    result = mockList
    responseBuilder.total(2)
    responseBuilder.total_page(1)
  }
  responseBuilder.data(result)
  responseBuilder.page(page)
  responseBuilder.per_page(limit)

  return responseBuilder.build()
}
