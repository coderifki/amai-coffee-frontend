import { DepartmentEntity } from '../department/department.model'
import { SchoolEntity } from '../school/school.model'

export class CourseEntity {
  course_id: string
  school_id: string
  school?: SchoolEntity
  course_name: string
  course_code: string
  course_type?: string // Specialization, General
  department_id?: string
  department?: DepartmentEntity
  credits: number
  created_by?: string
  created_at?: Date = new Date()
  updated_at?: Date = new Date()
  updated_by?: string
  deleted_at?: Date = new Date()
  deleted_by?: string
}
