import { ProductEntity } from '@/features/product-management/product/product.model'
import { apiClient } from '@core/api/base.api'
import { BasePaginatedResponse, BaseResponse } from '@core/api/base.response'
import axios from 'axios'
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
    // cat_product_name: 'makanan',
    file: '',
  },
]

const mockData: ProductEntity = {
  id: '1',
  name: 'product',
  price: 100000,
  cat_product_id: 'cat1',
  // cat_product_name: 'minuman',

  file: '',
}

export function createProduct(props: ProductEntity) {
  return apiClient.post('products/create', props, { accessToken: 'token' })
}

export function updateProduct(props: ProductEntity) {
  return apiClient.put(`products/update/${props.id}`, props)
}

export async function getProductById(props: string) {
  const result = await apiClient.get<BaseResponse<ProductEntity>>(
    `/products/find${props}`
  )
  return result.data.data
}

// export async function fetchCategoryInfo(cat_product_name: string) {
//   try {
//     const response = await axios.get(`/categoryproducts/${cat_product_name}`)
//     return response.data
//   } catch (error) {
//     // Handle error (e.g., log it or return a default category)
//     console.error('Error fetching category information:', error)
//     return { name: 'Unknown Category' } // Return a default category in case of error
//   }
// }

export async function getAllProductPagination(
  props: GetAllPaginationRequest,
  mock = false
  // includeCategoryName = true
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

    // if (includeCategoryName) {
    //   // Fetch category information for each product
    //   const updatedData = await Promise.all(
    //     result.map(async (product) => {
    //       const categoryResponse = await fetchCategoryInfo(
    //         product.cat_product_id
    //       )
    //       const categoryData = await categoryResponse.data // Assuming categoryResponse.data contains category information
    //       return {
    //         ...product,
    //         category_name: categoryData.name, // Assuming categoryData has a property 'name' for the category name
    //       }
    //     })
    //   )

    //   responseBuilder.data(updatedData)
    // } else {
    //   responseBuilder.data(result)
    // }
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
