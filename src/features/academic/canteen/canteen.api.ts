import { apiClient } from '@core/api/base.api'
import { BasePaginatedResponse } from '@core/api/base.response'
import { Builder } from 'builder-pattern'
import { CanteenEntity } from '@/features/academic/canteen/canteen.model'

export interface GetAllCanteenPaginationRequest {
  page: number
  limit: number
}

const mockList: CanteenEntity[] = [
  {
    canteen_id: '1',
    canteen_name: 'Student 1',
    school_id: '1',
  },
]

export async function getAllCanteenPagination(
  props: GetAllCanteenPaginationRequest,
  mock = false
) {
  const { page, limit } = props
  let result: CanteenEntity[]

  const responseBuilder = Builder<BasePaginatedResponse<CanteenEntity[]>>()
  if (!mock) {
    const fetchApi = await apiClient.get<
      BasePaginatedResponse<CanteenEntity[]>
    >('/faculties', {
      params: {
        page,
        limit,
      },
    })
    result = fetchApi.data?.data || []
    responseBuilder.message(fetchApi.data?.message || '')
    responseBuilder.page(page)
    responseBuilder.per_page(limit)
  } else {
    result = mockList
  }
  responseBuilder.data(result)

  return responseBuilder.build()
}
