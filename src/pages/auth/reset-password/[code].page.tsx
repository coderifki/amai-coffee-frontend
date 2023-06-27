import Layouts from '@/core/Layouts'
import ResetPassword from '@/core/layouts/auth/reset-password'

export default function VerifyForgotCodePage() {
  // console.log('masuk sini')
  return (
    <Layouts title="Welcome To Melina Coffee">
      <ResetPassword />
    </Layouts>
  )
}
