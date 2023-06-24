import {
  CreateStudentRequest,
  StudentEntity,
} from '@/features/academic/student/student.model'
import { apiClient } from '@core/api/base.api'
import { BasePaginatedResponse, BaseResponse } from '@core/api/base.response'
import { Builder } from 'builder-pattern'

export interface GetAllStudentPaginationRequest {
  page: number
  limit: number
}

const mockStudentList: StudentEntity[] = [
  {
    student_id: '1',
    student_name: 'Student 1',
    student_address: 'Student 1 Address',
    student_email: 'antoniusjoshua47@gmail.com',
    student_password: '123456',
    student_phone: '08123456789',
    school_id: '1',
    user_id: '1',
  },
]

export async function getAllStudentPagination(
  props: GetAllStudentPaginationRequest,
  mock = false
) {
  const { page, limit } = props
  let result: StudentEntity[]

  const responseBuilder = Builder<BasePaginatedResponse<StudentEntity[]>>()
  if (!mock) {
    const fetchApi = await apiClient.get<
      BasePaginatedResponse<StudentEntity[]>
    >('/school-management/students', {
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
    result = mockStudentList
  }
  responseBuilder.data(result)

  return responseBuilder.build()
}

export async function createStudent(payload: CreateStudentRequest) {
  const result = await apiClient.post<
    CreateStudentRequest,
    BaseResponse<StudentEntity>
  >('/students')
  return result.data.data
}

export async function getStudentById(studentId: string) {
  const result = await apiClient.get<BaseResponse<StudentEntity>>(
    `/students/${studentId}`
  )
  return result.data.data
}
