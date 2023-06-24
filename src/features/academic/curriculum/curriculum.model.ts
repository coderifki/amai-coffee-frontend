import { SchoolEntity } from '../school/school.model'

export class CurriculumEntity {
  curriculum_id: string
  school_id: string
  school?: SchoolEntity
  curriculum_name: string
  curriculum_year: string
  created_by?: string
  created_at?: Date = new Date()
  updated_at?: Date = new Date()
  updated_by?: string
  deleted_at?: Date
  deleted_by?: string
}
