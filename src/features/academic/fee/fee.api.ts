import { apiClient } from '@core/api/base.api'
import { BasePaginatedResponse } from '@core/api/base.response'
import { Builder } from 'builder-pattern'
import { FeeEntity } from '@/features/academic/fee/fee.model'

export interface GetAllFeePaginationRequest {
  page: number
  limit: number
}

const mockList: FeeEntity[] = [
  {
    fee_id: '1',
    fee_amount: 1000,
    fee_date: new Date(),
    fee_type: 'Annual',
    invoice_number: 'INV-001',
    payment_method: 'Cash',
    payment_status: 'Paid',
    student: {
      student_id: '1',
      student_name: 'Asep',
      school_id: '1',
      user_id: '1',
    },
  },
]

export async function getAllFeePagination(
  props: GetAllFeePaginationRequest,
  mock = false
) {
  const { page, limit } = props
  let result: FeeEntity[]

  const responseBuilder = Builder<BasePaginatedResponse<FeeEntity[]>>()
  if (!mock) {
    const fetchApi = await apiClient.get<BasePaginatedResponse<FeeEntity[]>>(
      '/faculties',
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
  } else {
    result = mockList
  }
  responseBuilder.data(result)

  return responseBuilder.build()
}
