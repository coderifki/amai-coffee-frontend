import { apiClient } from '@core/api/base.api'
import { BasePaginatedResponse, BaseResponse } from '@core/api/base.response'
import { Builder } from 'builder-pattern'
import { CourseEntity } from '@/features/academic/course/course.model'

export interface GetAllCoursePaginationRequest {
  page: number
  limit: number
}

const mockList: CourseEntity[] = [
  {
    course_id: '1',
    course_code: '1212312',
    course_name: 'Mathematics 1',
    course_type: 'General',
    credits: 2,
    school_id: '1',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    course_id: '2',
    course_code: '1212312',
    course_name: 'Mathematics 1',
    course_type: 'General',
    credits: 2,
    school_id: '1',
    created_at: new Date(),
    updated_at: new Date(),
  },
]

export class CourseCreateRequest {
  school_id: string
  department_id?: string // apakah opsional?
  course_name: string
  course_code: string
  course_type?: string
  credits: number
  created_by?: string
}

export class CourseEditRequest extends CourseCreateRequest {
  course_id: string
}

export function courseCreate(props: CourseCreateRequest) {
  return apiClient.post('school-management/courses', props)
}

export function courseEdit(props: CourseEditRequest) {
  return apiClient.patch(`school-management/courses/${props.course_id}`, props)
}

export async function getCourseById(courseId: string) {
  const result = await apiClient.get<BaseResponse<CourseEntity>>(
    `/school-management/courses/${courseId}`
  )
  return result.data.data
}

export async function getAllCoursePagination(
  props: GetAllCoursePaginationRequest,
  mock = false
) {
  const { page, limit } = props
  let result: CourseEntity[]

  const responseBuilder = Builder<BasePaginatedResponse<CourseEntity[]>>()
  if (!mock) {
    const fetchApi = await apiClient.get<BasePaginatedResponse<CourseEntity[]>>(
      '/school-management/courses',
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
    responseBuilder.total(2)
    responseBuilder.total_page(1)
  }
  responseBuilder.data(result)
  responseBuilder.page(page)
  responseBuilder.per_page(limit)

  return responseBuilder.build()
}
