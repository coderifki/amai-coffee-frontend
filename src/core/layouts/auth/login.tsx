import { Grid } from '@mantine/core'
import SideCardLogin from '@components/cards/SideCardLogin'
import LoginForm from '@/core/layouts/auth/form/LoginForm'
import { useAuth } from '@core/contex/AuthUserProvider'
import CurtainLoader from '@core/components/loader/CurtainLoader'
import { AuthLoginRequest } from '@/core/layouts/auth/auth'

export default function Login() {
  const { logInWithCredentials, loading } = useAuth()

  const handleSubmit = async (data: AuthLoginRequest) => {
    const { username, password, user_type } = data
    // console.log('data', data)
    if (logInWithCredentials && data) {
      await logInWithCredentials({ username, password, user_type })
      // console.log('result', result);
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
