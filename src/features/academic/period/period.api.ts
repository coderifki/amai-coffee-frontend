import { apiClient } from '@core/api/base.api'
import { BasePaginatedResponse, BaseResponse } from '@core/api/base.response'
import { Builder } from 'builder-pattern'
import { PeriodEntity } from '@/features/academic/period/period.model'

export interface GetAllPeriodPaginationRequest {
  page: number
  limit: number
}

const mockList: PeriodEntity[] = [
  {
    period_id: '1',
    period_name: 'Student 1',
    school_id: '1',
    start_date: new Date(),
    end_date: new Date(),
    term_type: 'semester',
    period_code: '2021',
    period_status: '21312',
  },
]

export class PeriodCreateRequest {
  period_name: string
  period_code: string
  period_status: string
  term_type: string
  start_date: Date | string
  end_date: Date | string
  school_id: string
}

export class PeriodEditRequest extends PeriodCreateRequest {
  period_id: string
}

export function periodCreate(props: PeriodCreateRequest) {
  return apiClient.post('/school-management/periods', props)
}

export function periodEdit(props: PeriodEditRequest) {
  return apiClient.put(`school-management/periods/${props.period_id}`, props)
}

export async function getPeriodById(periodId: string) {
  const result = await apiClient.get<BaseResponse<PeriodEntity>>(
    `/school-management/periods/${periodId}`
  )
  return result.data.data
}

export async function getAllPeriodPagination(
  props: GetAllPeriodPaginationRequest,
  mock = false
) {
  const { page, limit } = props
  let result: PeriodEntity[]

  const responseBuilder = Builder<BasePaginatedResponse<PeriodEntity[]>>()
  if (!mock) {
    const fetchApi = await apiClient.get<BasePaginatedResponse<PeriodEntity[]>>(
      '/school-management/periods',
      {
        params: {
          page,
          limit,
        },
      }
    )
    result = fetchApi.data?.data || []
    responseBuilder.message(fetchApi.data?.message || '')
    responseBuilder.page(page)
    responseBuilder.per_page(limit)
    responseBuilder.total_page(fetchApi.data?.total_page || 0)
    responseBuilder.total(fetchApi.data?.total || 0)
  } else {
    result = mockList
  }
  responseBuilder.data(result)

  return responseBuilder.build()
}
