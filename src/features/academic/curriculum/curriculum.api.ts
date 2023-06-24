import { apiClient } from '@core/api/base.api'
import { BasePaginatedResponse, BaseResponse } from '@core/api/base.response'
import { Builder } from 'builder-pattern'
import { PeriodEntity } from '@/features/academic/period/period.model'
import { CurriculumEntity } from './curriculum.model'

export interface GetAllPeriodPaginationRequest {
  page: number
  limit: number
}

const mockList: CurriculumEntity[] = [
  {
    curriculum_id: '1',
    curriculum_name: 'nama kurikulum',
    curriculum_year: 'tahun kurirkulum',
    school_id: '',
  },
]

export class CurriculumCreateRequest {
  school_id: string
  curriculum_name: string
  curriculum_year: string
}

export class CurriculumEditRequest extends CurriculumCreateRequest {
  curriculum_id: string
}

export function curriculumCreate(props: CurriculumCreateRequest) {
  return apiClient.post('/school-management/curriculums/create', props)
}

export function curriculumEdit(props: CurriculumEditRequest) {
  return apiClient.patch('school-management/curriculums/update', props)
}

export async function getCurriculumById(periodId: string) {
  const result = await apiClient.get<BaseResponse<CurriculumEntity>>(
    `/school-management/curriculums/${periodId}`
  )
  return result.data.data
}

export async function getAllCurriculumPagination(
  props: GetAllPeriodPaginationRequest,
  mock = false
) {
  const { page, limit } = props
  let result: CurriculumEntity[]

  const responseBuilder = Builder<BasePaginatedResponse<CurriculumEntity[]>>()
  if (!mock) {
    const fetchApi = await apiClient.get<
      BasePaginatedResponse<CurriculumEntity[]>
    >('/school-management/curriculums', {
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
  }
  responseBuilder.data(result)

  return responseBuilder.build()
}
