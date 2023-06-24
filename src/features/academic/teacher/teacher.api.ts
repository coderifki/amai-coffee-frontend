import { apiClient } from '@core/api/base.api'
import { BasePaginatedResponse } from '@core/api/base.response'
import { Builder } from 'builder-pattern'
import { TeacherEntity } from '@/features/academic/teacher/teacher.model'

export interface GetAllTeacherPaginationRequest {
  page: number
  limit: number
}

const mockList: TeacherEntity[] = [
  {
    teacher_id: '1',
    teacher_name: 'Student 1',
    teacher_address: 'Student 1 Address',
    teacher_phone: '08123456789',
    school_id: '1',
    user_id: '1',
  },
]

export async function getAllTeacherPagination(
  props: GetAllTeacherPaginationRequest,
  mock = false
) {
  const { page, limit } = props
  let result: TeacherEntity[]

  const responseBuilder = Builder<BasePaginatedResponse<TeacherEntity[]>>()
  if (!mock) {
    const fetchApi = await apiClient.get<
      BasePaginatedResponse<TeacherEntity[]>
    >('/teachers', {
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
