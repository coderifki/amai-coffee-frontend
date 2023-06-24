import SentCodeForgotPassword from '@/core/layouts/auth/form/sent-code-forgot-password'
import SideCardLogin from '@components/cards/SideCardLogin'
import CurtainLoader from '@core/components/loader/CurtainLoader'
import { Grid } from '@mantine/core'
import { useRouter } from 'next/router'
import React from 'react'

export default function SentForgotCode() {
  const [loading, setLoading] = React.useState(false)
  const router = useRouter()
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
        <SentCodeForgotPassword />
      </Grid>
    </div>
  )
}
