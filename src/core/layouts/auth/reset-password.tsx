import { IResetPassword } from '@/core/layouts/auth/auth'
import ResetPasswordForm from '@/core/layouts/auth/form/reset-password'
import { sendResetPassword } from '@/features/auth/auth.api'
import SideCardLogin from '@components/cards/SideCardLogin'
import CurtainLoader from '@core/components/loader/CurtainLoader'
import { Grid } from '@mantine/core'
import { useRouter } from 'next/router'
import React from 'react'
import toast from 'react-hot-toast'

export default function ResetPassword() {
  const [loading, setLoading] = React.useState(false)
  const router = useRouter()

  const handleSubmit = async (data: IResetPassword) => {
    try {
      setLoading(true)
      await sendResetPassword(data)
      toast.success(`Reset password success`, {
        position: 'bottom-center',
      })
      await router.push('/auth/login')
    } catch (error: any) {
      toast.error(`${error.message}`, {
        position: 'bottom-center',
      })
      console.error({ error })
    } finally {
      setLoading(false)
    }
  }
  const code = (router.query.code as string) || '-'
  return (
    <div>
      <Grid
        justify="center"
        sx={{
          height: '100vh',
          alignItems: 'center',
        }}
      >
        <CurtainLoader />
        <SideCardLogin />
        <ResetPasswordForm
          onSubmit={handleSubmit}
          isLoading={loading}
          code={code}
        />
      </Grid>
    </div>
  )
}
