import {
  AuthLoginRequest,
  IForgotPassword,
  IResetPassword,
} from '@/core/layouts/auth/auth'
import { apiClient } from '@core/api/base.api'
import { data } from 'autoprefixer'

export function authLogin(props: AuthLoginRequest) {
  return apiClient.post('/auth/login', props)
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
