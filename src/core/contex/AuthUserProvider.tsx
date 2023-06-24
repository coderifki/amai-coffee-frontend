import { AuthLoginRequest } from '@/core/layouts/auth/auth'
import { authLogin } from '@/features/auth/auth.api'
import { getUserProfile } from '@/features/auth/user/user.api'
import { UserEntity } from '@/features/auth/user/user.model'
import { deleteCookie, setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import React, { Context, createContext, useContext, useState } from 'react'
import toast from 'react-hot-toast'

export type AuthUser = {
  // user: UserEntity | null;
  user: any | null
  loading: boolean
  logInWithCredentials?: (props: AuthLoginRequest) => Promise<any | undefined>
  // logOut?: () => Promise<void>;
  logOut?: () => void
  isAuth?: boolean
}

export const AuthUserContext: Context<AuthUser> = createContext<AuthUser>({
  loading: false,
  user: null,
})

export function AuthUserProvider({ children }: { children: React.ReactNode }) {
  const [customLoading, setCustomLoading] = useState(false)

  const router = useRouter()

  const [isAuth, setIsAuth] = useState(false)
  // const [authUser, setAuthUser] = useState<UserEntity | null>(null);
  const [authUser, setAuthUser] = useState<UserEntity | null>(null)

  const logInWithCredentials = async (props: AuthLoginRequest) => {
    setCustomLoading(true)
    // console.log('process.env.NEXT_API_URL: ', process.env.NEXT_PUBLIC_API_URL)
    try {
      const isLogin = await authLogin({
        username: props.username,
        password: props.password,
        user_type: 'SUPER_ADMIN',
      })

      if (!isLogin) {
        return
      }
      const result = await getUserProfile()
      // console.log('rest', res.data.user);
      if (result) {
        setCookie('user', result, { maxAge: 60 * 60 * 24 * 7 })
        setAuthUser(result)
        setIsAuth(true)
        // setCookie('user', res.data.data.user, { maxAge: 60 * 60 * 24 * 7 });
        // setCookie('token', res.data.data.token, { maxAge: 60 * 60 * 24 * 7 });
        toast.success('Login success', {
          position: 'bottom-center',
        })
        await router.push('/dashboard')
      }
      return result
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
    setIsAuth(false)
    setAuthUser(null)
    setCustomLoading(false)
    router.push('/')
  }

  return (
    <AuthUserContext.Provider
      value={{
        loading: customLoading,
        user: authUser,
        logInWithCredentials,
        logOut,
        isAuth,
      }}
    >
      {children}
    </AuthUserContext.Provider>
  )
}

export const useAuth = () => useContext(AuthUserContext)
