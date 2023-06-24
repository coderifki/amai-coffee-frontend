import { Grid } from '@mantine/core'
import SideCardLogin from '@components/cards/SideCardLogin'
import LoginForm from '@/core/layouts/auth/form/LoginForm'
import { useAuth } from '@core/contex/AuthUserProvider'
import CurtainLoader from '@core/components/loader/CurtainLoader'
import { AuthLoginRequest } from '@/core/layouts/auth/auth'

export default function Login() {
  const { logInWithCredentials, loading } = useAuth()

  const handleSubmit = async (data: AuthLoginRequest) => {
    const { login_id, password, user_type } = data
    // console.log('data', data)
    if (logInWithCredentials && data) {
      await logInWithCredentials({ login_id, password, user_type })
    }
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
        <LoginForm onSubmit={handleSubmit} isLoading={loading} />
      </Grid>
    </div>
  )
}
