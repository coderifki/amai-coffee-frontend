import { AuthLoginRequest } from '@/core/layouts/auth/auth'
import {
  Box,
  Button,
  Center,
  Grid,
  Image,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useRouter } from 'next/router'
import { FaRegTimesCircle } from 'react-icons/fa'

interface Props {
  // children: React.ReactNode;
  onSubmit: (values: AuthLoginRequest) => void
  isLoading: boolean
}

export default function LoginForm({ onSubmit, isLoading }: Props) {
  const router = useRouter()

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) =>
        value.length < 2 ? 'Name must have at least 2 letters' : null,
    },
  })
  const handleSubmit = (values: AuthLoginRequest) => {
    onSubmit(values)
  }
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
          // border: '1px solid red',
          // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
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
            onClick={() => router.push('/')}
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
        <Stack
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Center
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* <div>All elements inside Center are centered</div> */}
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
              Welcome Back
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
              Don`t you have an account?{' '}
              <span style={{ color: '#018B14', cursor: 'pointer' }}>
                Register
              </span>
            </Text>
            <Box sx={{ marginTop: '66px' }}>
              {/* form for login */}
              <form
                onSubmit={form.onSubmit((values) =>
                  handleSubmit({
                    username: values.email,
                    password: values.password,
                    user_type: 'SUPER_ADMIN',
                  })
                )}
              >
                <TextInput
                  withAsterisk
                  placeholder="Email"
                  radius="md"
                  size="lg"
                  {...form.getInputProps('email')}
                  sx={{
                    width: '30em',
                    marginBottom: '40px',
                  }}
                />
                <PasswordInput
                  placeholder="Password"
                  radius="md"
                  size="lg"
                  sx={{
                    width: '30em',
                  }}
                  {...form.getInputProps('password')}
                  withAsterisk
                />

                <Text
                  c={'#CE2166'}
                  // component="a"
                  // href="#"
                  sx={{
                    fontFamily: 'Segoe UI, Poppins, sans-serif',
                    lineHeight: '44.2px',
                    marginTop: '14px',
                    '&:hover': {
                      cursor: 'pointer',
                    },
                  }}
                  // ta="center"
                  fz="16px"
                  fw={400}
                  onClick={() => {
                    // console.log('test')
                    router.push('/auth/forgot-password')
                  }}
                >
                  Forgot password?
                </Text>
                <Button
                  sx={() => ({
                    marginTop: '71px',
                    backgroundColor: '#2E3261 !important',
                    '&:hover': {
                      backgroundColor: '#454a87 !important',
                    },
                  })}
                  radius="md"
                  type="submit"
                  fullWidth
                  size="md"
                  loading={isLoading}
                >
                  Login
                </Button>
                {/* <Box>Login</Box> */}
              </form>
            </Box>
          </Center>
        </Stack>
      </Grid.Col>
    </>
  )
}
