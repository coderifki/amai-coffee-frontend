import { CategoryProductEntity } from '@/features/product-management/category-product/category-product.model'
import { apiClient } from '@core/api/base.api'
import { BasePaginatedResponse, BaseResponse } from '@core/api/base.response'
import { Builder } from 'builder-pattern'

interface GetAllPaginationRequest {
  page: number
  limit: number
}

const mockList: CategoryProductEntity[] = [
  {
    cat_product_id: 'cat1',
    id: '1',
    name: 'categoryproduct',
  },
]

const mockData: CategoryProductEntity = {
  cat_product_id: 'cat1',
  id: '1',
  name: 'categoryproduct',
}

export function createCatProduct(props: CategoryProductEntity) {
  return apiClient.post('categoryproducts/create', props, {
    accessToken: 'token',
  })
}

export function updateCatProduct(props: CategoryProductEntity) {
  return apiClient.patch(`categoryproducts/update/${props.id}`, props)
}

export async function getCategoryProductById(query: string) {
  const result = await apiClient.get<BaseResponse<CategoryProductEntity>>(
    `/categoryproducts/find${query}`
  )
  return result.data.data
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
