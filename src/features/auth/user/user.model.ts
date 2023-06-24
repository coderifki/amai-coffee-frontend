import { EmployeeEntity } from '../employee/employee.model'

export class UserEntity {
  id: string
  phone: string
  email: string
  password: string
  role: string
  employee?: EmployeeEntity
}
