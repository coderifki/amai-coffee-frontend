export type AuthLoginRequest = {
  username: string
  password: string
  user_type?: string
}

export type IForgotPassword = {
  email: string
  user_type?: string
  organization_id?: string
}

export type IResetPassword = {
  code: string
  password: string
  new_password: string
}

export type IVerifyCode = {
  code: string
}
