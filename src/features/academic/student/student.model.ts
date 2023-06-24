import { UserEntity } from '@/features/auth/user/user.model'

export class StudentEntity {
  student_id: string
  school_id: string
  student_photo?: string
  student_name: string
  student_address?: string
  student_email?: string
  student_password?: string
  student_phone?: string
  admission_date?: Date
  class_id?: string
  user_id: string
  createdAt?: Date
  updatedAt?: Date
  user?: UserEntity
}

export class StudentAttendanceEntity {
  student_attendance_id: string
  student_id: string
  student?: StudentEntity
  class_id: string
  course_id: string
  attendance_date: Date
  attendance_status: string // absent , present
}

export interface CreateStudentRequest {
  student_name?: string
  student_address?: string
  student_email?: string
  student_password?: string
  student_phone?: string
  school_id?: string
}

export interface GetStudentRequest {
  student_id?: string
}
