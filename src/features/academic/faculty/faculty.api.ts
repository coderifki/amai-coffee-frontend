import { apiClient } from '@core/api/base.api'
import { BasePaginatedResponse } from '@core/api/base.response'
import { Builder } from 'builder-pattern'
import { FacultyEntity } from '@/features/academic/faculty/faculty.model'
import { IFaculty } from '@/core/layouts/master-data/faculty/faculty'

export interface GetAllFacultyPaginationRequest {
  page: number
  limit: number
  filter: string
}

export interface GetFacultyByIdRequest {
  id: string
}

// export interface DeleteFacultyByIdRequest {
//   id: string
// }

const mockList: FacultyEntity[] = [
  {
    faculty_id: '1',
    faculty_name: 'Student 1',
    faculty_address: 'Student 1 Address',
    school_name: '08123456789',
    school_id: '1',
  },
]

export function createFaculty(props: any) {
  return apiClient.post('/school-management/faculties', props)
}

export function updateFaculty(props: any) {
  return apiClient.put('/school-management/faculties', props)
}

export async function getAllFacultyPagination(
  props: GetAllFacultyPaginationRequest,
  mock = false
) {
  const { page, limit, filter } = props
  let result: FacultyEntity[]

  const responseBuilder = Builder<BasePaginatedResponse<FacultyEntity[]>>()
  if (!mock) {
    const fetchApi = await apiClient.get<
      BasePaginatedResponse<FacultyEntity[]>
    >('/school-management/faculties', {
      params: {
        page,
        limit,
        filter,
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
  }
  responseBuilder.data(result)

  return responseBuilder.build()
}

export async function getAllFacultyById(props: GetFacultyByIdRequest) {
  const { id } = props
  // let result: FacultyEntity

  const responseBuilder = Builder<BasePaginatedResponse<FacultyEntity>>()
  const fetchApi = await apiClient.get<BasePaginatedResponse<FacultyEntity>>(
    `/school-management/faculties/${id}`
  )
  const result = fetchApi.data?.data || {}
  responseBuilder.message(fetchApi.data?.message || '')
  responseBuilder.data(result)

  return responseBuilder.build()
}

// export async function deleteFacultyById(props: GetFacultyByIdRequest) {
//   const { id } = props

//   const responseBuilder = Builder<BasePaginatedResponse<FacultyEntity>>()
//   const fetchApi = await apiClient.delete<BasePaginatedResponse<FacultyEntity>>(
//     `/school-management/faculties/${id}`
//   )
//   const result = fetchApi.data?.data || {}
//   responseBuilder.message(fetchApi.data?.message || '')
//   responseBuilder.data(result)

//   return responseBuilder.build()
// }

export function deleteFacultyById(props: any) {
  const { id } = props
  return apiClient.delete(`/school-management/faculties/${id}`)
}
