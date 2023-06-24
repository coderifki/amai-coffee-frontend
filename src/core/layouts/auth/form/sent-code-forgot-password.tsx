import TextField from '@/core/form-fields/text-field'
import { IVerifyCode } from '@/core/layouts/auth/auth'
import { Box, Button, Grid, Image, Text } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useRouter } from 'next/router'
import { FaRegTimesCircle } from 'react-icons/fa'

export default function SentCodeForgotPassword() {
  const router = useRouter()

  return (
    <>
      <Grid.Col
        md={7}
        xs={12}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          height: '43em',
          boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '0',
            right: '0',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#2E3261',
            borderRadius: '0 0 0 30px',
            width: '50px',
            height: '50px',
          }}
        >
          <FaRegTimesCircle
            fontSize={'23px'}
            style={{ color: '#fff', cursor: 'pointer' }}
            onClick={() => router.push('/auth/login')}
          />
        </Box>
        <Image
          width={'104px'}
          src="/assets/images/login/login_corner_rectangle.png"
          alt="Random unsplash image"
          sx={{
            position: 'absolute',
            right: '0',
            bottom: '0',
            zIndex: 1,
          }}
        />
        <Grid.Col md={8}>
          <Grid.Col
            md={12}
            sx={{
              display: 'flex',
              // justifyContent: 'center',
              textAlign: 'center',
              flexDirection: 'column',
              margin: '20px 0',
            }}
          >
            <Text
              c={'#2E3261'}
              sx={{
                fontFamily: 'Segoe UI, Poppins, sans-serif',
                lineHeight: '44.2px',
              }}
              // ta="center"
              fz="34px"
              fw={700}
            >
              Verification Code
            </Text>
            <Text
              c={'#2E3261'}
              sx={{
                fontFamily: 'Segoe UI, Poppins, sans-serif',
                lineHeight: '27.9px',
                marginTop: '15px',
              }}
              // ta="center"
              fz="18px"
              fw={400}
            >
              Verification code has been sent to your email, please check your
              e-mail
            </Text>
          </Grid.Col>
        </Grid.Col>
      </Grid.Col>
    </>
  )
}
