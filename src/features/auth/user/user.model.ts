import { PersonalDataEntity } from '@/features/auth/personal/personal.model'

export class UserEntity {
  user_id?: string
  country_code?: string
  created_at?: string
  created_by?: string
  email?: string
  email_verified?: boolean
  fcm_token?: string[]
  organization_id?: string
  password?: string
  phone?: string
  secondary_phone?: string
  updated_at?: string
  updated_by?: string
  user_type?: string
  username?: string
  personal_data?: PersonalDataEntity
}
