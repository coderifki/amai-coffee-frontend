import { apiClient } from '@core/api/base.api'
import { BasePaginatedResponse } from '@core/api/base.response'
import { Builder } from 'builder-pattern'
import { DepartmentEntity } from '@/features/academic/department/department.model'

export interface GetAllDepartmentPaginationRequest {
  page: number
  limit: number
}

const mockList: DepartmentEntity[] = [
  {
    department_id: '1',
    department_name: 'Student 1',
    faculty_name: 'Student 1 Address',
    school_name: '08123456789',
    school_id: '1',
  },
]

export async function getAllDepartmentPagination(
  props: GetAllDepartmentPaginationRequest,
  mock = false
) {
  const { page, limit } = props
  let result: DepartmentEntity[]

  const responseBuilder = Builder<BasePaginatedResponse<DepartmentEntity[]>>()
  if (!mock) {
    const fetchApi = await apiClient.get<
      BasePaginatedResponse<DepartmentEntity[]>
    >('/school-management/departments', {
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
    responseBuilder.total(result.length)
    responseBuilder.total_page(1)
    responseBuilder.per_page(limit)
    responseBuilder.page(page)
  }
  responseBuilder.data(result)

  return responseBuilder.build()
}
