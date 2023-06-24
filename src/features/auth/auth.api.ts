import {
  AuthLoginRequest,
  IForgotPassword,
  IResetPassword,
} from '@/core/layouts/auth/auth'
import { apiClient } from '@core/api/base.api'
// export function authLogin(props: AuthLoginRequest) {
//   const { login_id, password } = props
//   return apiClient.post('/auth/employee/login', { login_id, password })
// }
export function authLogin(props: AuthLoginRequest) {
  return apiClient.post('/auth/employee/login', props)
}

export function sendEmailForgotPassword(props: IForgotPassword) {
  return apiClient.post('/forgot-password/send-email', props)
}

export function sendResetPassword(props: IResetPassword) {
  const { new_password, code, ...data } = props
  return apiClient.post(`/forgot-password/reset/${code}`, {
    new_password: new_password,
  })
}
