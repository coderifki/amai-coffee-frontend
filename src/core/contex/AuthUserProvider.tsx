import { AuthLoginRequest } from '@/core/layouts/auth/auth'
import { authLogin } from '@/features/auth/auth.api'
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
// export const AuthUserContext: Context<AuthUser | null> =
//   createContext<AuthUser | null>(null) // Updated context to allow null values

export function AuthUserProvider({ children }: { children: React.ReactNode }) {
  const [customLoading, setCustomLoading] = useState(false)
  const [user, setUser] = useState<UserEntity | null>(null) // Tambahkan state untuk menyimpan informasi pengguna

  const router = useRouter()

  const logInWithCredentials = async (props: AuthLoginRequest) => {
    setCustomLoading(true)
    try {
      const isLogin: any = await authLogin({
        login_id: props.login_id,
        password: props.password,
        user_type: props?.user_type || 'ADMIN' || 'CASHIER',
      })

      if (!isLogin) {
        setUser(isLogin.data.data.user) // Asumsi informasi pengguna ada di isLogin.data.data.user
        // localStorage.setItem('user', JSON.stringify(isLogin.data.data.user))
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
      localStorage.setItem('access_token', isLogin.data.data.jwt_token)
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
    localStorage.removeItem('access_token')
    setUser(null)
    setCustomLoading(false)
    router.push('/')
  }

  return (
    <AuthUserContext.Provider
      value={{
        loading: customLoading,
        user: user,
        logInWithCredentials,
        logOut,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  )
}

export const useAuth = () => useContext(AuthUserContext)
