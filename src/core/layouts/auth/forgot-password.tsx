import { IForgotPassword } from '@/core/layouts/auth/auth'
import ForgotPasswordForm from '@/core/layouts/auth/form/forgot-password'
import { sendEmailForgotPassword } from '@/features/auth/auth.api'
import SideCardLogin from '@components/cards/SideCardLogin'
import CurtainLoader from '@core/components/loader/CurtainLoader'
import { Grid } from '@mantine/core'
import { useRouter } from 'next/router'
import React from 'react'
import toast from 'react-hot-toast'

export default function ForgotPassword() {
  const [loading, setLoading] = React.useState(false)
  // const { logInWithCredentials, loading } = useAuth()
  const router = useRouter()

  const handleSubmit = async (data: IForgotPassword) => {
    const payload: IForgotPassword = {
      email: data.email,
      organization_id: '64720baae69ce0cbf6fc5501',
      user_type: 'ACADEMIC_STUDENT',
    }
    try {
      setLoading(true)
      await sendEmailForgotPassword(payload)
      toast.success(`Verification has been sent to ${data.email}`, {
        position: 'bottom-center',
      })
      // await router.push('/academic/master-data/faculty')
    } catch (error: any) {
      toast.error(`${error.message}`, {
        position: 'bottom-center',
      })
      console.error({ error })
    } finally {
      setLoading(false)
    }
    // router.push('/auth/verify-forgot-code')
    // router.push('/auth/sent-forgot-code')
  }
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
        <ForgotPasswordForm onSubmit={handleSubmit} isLoading={loading} />
      </Grid>
    </div>
  )
}
