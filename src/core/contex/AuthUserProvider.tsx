import { AuthLoginRequest } from '@/core/layouts/auth/auth'
import { authLogin } from '@/features/auth/auth.api'
import { getUserProfile } from '@/features/auth/user/user.api'
import { UserEntity } from '@/features/auth/user/user.model'

import { deleteCookie, setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import React, { Context, createContext, useContext, useState } from 'react'
import toast from 'react-hot-toast'

export type AuthUser = {
  user: UserEntity | null
  // user: any | null
  loading: boolean
  logInWithCredentials?: (props: AuthLoginRequest) => Promise<any | undefined>
  logOut?: () => void
}

export const AuthUserContext: Context<AuthUser> = createContext<AuthUser>({
  loading: false,
  user: null,
})

export function AuthUserProvider({ children }: { children: React.ReactNode }) {
  const [customLoading, setCustomLoading] = useState(false)

  const router = useRouter()

  const logInWithCredentials = async (props: AuthLoginRequest) => {
    setCustomLoading(true)
    try {
      const isLogin: any = await authLogin({
        login_id: props.login_id,
        password: props.password,
        user_type: props?.user_type || 'SUPER_ADMIN',
      })

      if (!isLogin) {
        return null
      }
      // console.log('test jwt:', isLogin.data.data.jwt_token)
      // const result = await getUserProfile()
      // if (result) {
      //   setCookie('user', result, { maxAge: 60 * 60 * 24 * 7 })
      //   toast.success('Login success', {
      //     position: 'bottom-center',
      //   })
      //   await router.push('/dashboard')
      // }
      // return result
      setCookie('user', isLogin.data.data.jwt_token, {
        maxAge: 60 * 60 * 24 * 7,
      })
      toast.success('Login success', {
        position: 'bottom-center',
      })
      await router.push('/dashboard')
    } catch (err) {
      // setCustomLoading(false);
      toast.error('something went wrong')
      console.log({ err })
      // console.trace(err);
    } finally {
      setCustomLoading(false)
    }
  }

  const logOut = () => {
    console.trace('logOut')
    deleteCookie('user')
    deleteCookie('token')
    setCustomLoading(false)
    router.push('/')
  }

  return (
    <AuthUserContext.Provider
      value={{
        loading: customLoading,
        user: null,
        logInWithCredentials,
        logOut,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  )
}

export const useAuth = () => useContext(AuthUserContext)
