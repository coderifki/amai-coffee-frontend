import { StudentEntity } from '@/features/academic/student/student.model'

export class FeeEntity {
  fee_id?: string
  student?: StudentEntity
  fee_type?: string // Annual, Transport, Monthly, Library
  fee_amount?: number
  fee_date?: Date
  invoice_number?: string
  payment_status?: string // Paid, Unpaid, Partially Paid , Overdue , Pending
  payment_method?: string // Cash, Cheque, Online
}
