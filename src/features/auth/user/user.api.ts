import { apiClient } from '@core/api/base.api'
import { BaseResponse } from '@core/api/base.response'
import { UserEntity } from '@/features/auth/user/user.model'

const mockUserProfile: UserEntity = {
  user_id: '6467da4802b92f76e3919137',
  country_code: '+62',
  email: 'admin@contag.id',
  email_verified: false,
  fcm_token: [],
  organization_id: '6459315f559bfef77a455060',
  password: '$2b$12$jVbp0y2pHp4MxNfPcVc1Yelj.RVGSbjWy7Vxi5zlmnMlEy/ICwZzu',
  phone: '081322307975',
  secondary_phone: '',
  updated_by: '',
  user_type: 'SUPER_ADMIN',
  username: 'admin_contag',
}

export async function getUserProfile(mock = false) {
  let result: UserEntity | null
  // const responseBuilder = Builder<BaseResponse<UserEntity>>()
  if (!mock) {
    const fetchApi = await apiClient.get<BaseResponse<UserEntity>>('/users/me')
    result = fetchApi.data?.data || null
  } else {
    result = mockUserProfile
  }
  // responseBuilder.data(result)

  return result
}
