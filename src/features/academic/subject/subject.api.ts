import { apiClient } from '@core/api/base.api'
import { BasePaginatedResponse } from '@core/api/base.response'
import { Builder } from 'builder-pattern'
import { SubjectEntity } from '@/features/academic/subject/subject.model'

export interface GetAllSubjectPaginationRequest {
  page: number
  limit: number
}

const mockList: SubjectEntity[] = [
  {
    subject_id: '1',
    subject_name: 'Student 1',
    faculty_name: 'Student 1 Address',
    school_name: '08123456789',
    school_id: '1',
  },
]

export async function getAllSubjectPagination(
  props: GetAllSubjectPaginationRequest,
  mock = false
) {
  const { page, limit } = props
  let result: SubjectEntity[]

  const responseBuilder = Builder<BasePaginatedResponse<SubjectEntity[]>>()
  if (!mock) {
    const fetchApi = await apiClient.get<
      BasePaginatedResponse<SubjectEntity[]>
    >('/school-management/subjects', {
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
