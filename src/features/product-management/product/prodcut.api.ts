import { ProductEntity } from '@/features/product-management/product/product.model'
import { apiClient } from '@core/api/base.api'
import { BasePaginatedResponse, BaseResponse } from '@core/api/base.response'
import { Builder } from 'builder-pattern'

interface GetAllPaginationRequest {
  page: number
  limit: number
}

const mockList: ProductEntity[] = [
  {
    id: '1',
    name: 'product',
    price: 100000,
    cat_product_id: 'cat1',
    file: '',
  },
]

const mockData: ProductEntity = {
  id: '1',
  name: 'product',
  price: 100000,
  cat_product_id: 'cat1',
  file: '',
}

export function createProduct(props: ProductEntity) {
  return apiClient.post('products/create', props, { accessToken: 'token' })
}

export function updateProduct(props: ProductEntity) {
  return apiClient.patch(`products/update/${props.id}`, props)
}

export async function getProductById(props: string) {
  const result = await apiClient.get<BaseResponse<ProductEntity>>(
    `/products/find${props}`
  )
  return result.data.data
}

export async function getAllProductPagination(
  props: GetAllPaginationRequest,
  mock = false
) {
  const { page, limit } = props
  let result: ProductEntity[]

  const responseBuilder = Builder<BasePaginatedResponse<ProductEntity[]>>()
  if (!mock) {
    const fetchApi = await apiClient.get<
      BasePaginatedResponse<ProductEntity[]>
    >('/products', {
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
