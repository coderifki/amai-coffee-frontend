import { apiClient } from '@core/api/base.api'
import { BasePaginatedResponse } from '@core/api/base.response'
import { Builder } from 'builder-pattern'
import { HolidayEntity } from '@/features/academic/holiday/holiday.model'

export interface GetAllHolidayPaginationRequest {
  page: number
  limit: number
}

const mockList: HolidayEntity[] = [
  {
    holiday_id: '1',
    holiday_name: 'Student 1',
    school_name: '08123456789',
    school_id: '1',
  },
]

export async function getAllHolidayPagination(
  props: GetAllHolidayPaginationRequest,
  mock = false
) {
  const { page, limit } = props
  let result: HolidayEntity[]

  const responseBuilder = Builder<BasePaginatedResponse<HolidayEntity[]>>()
  if (!mock) {
    const fetchApi = await apiClient.get<
      BasePaginatedResponse<HolidayEntity[]>
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
