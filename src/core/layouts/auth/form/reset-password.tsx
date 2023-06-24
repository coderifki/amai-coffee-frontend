import TextField from '@/core/form-fields/text-field'
import { IResetPassword } from '@/core/layouts/auth/auth'
import { Box, Button, Grid, Image, Space, Text } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useRouter } from 'next/router'
import { FaRegTimesCircle } from 'react-icons/fa'

interface Props {
  // children: React.ReactNode;
  onSubmit: (values: IResetPassword) => void
  isLoading: boolean
  code: string
}

export default function ResetPasswordForm({
  onSubmit,
  isLoading,
  code,
}: Props) {
  const router = useRouter()

  const form = useForm({
    initialValues: {
      password: '',
      new_password: '',
    },
    validate: {
      password: (value) =>
        value.length < 6 ? 'Password must be at least 6 characters' : null,
      new_password: (value, values) =>
        value.length < 6
          ? 'Password must be at least 6 characters'
          : value !== values.password
          ? 'Passwords did not match'
          : null,
    },
  })
  const handleSubmit = (values: IResetPassword) => {
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
            sx={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}
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
              Reset Your Password
            </Text>
          </Grid.Col>
          <form
            onSubmit={form.onSubmit((values) =>
              handleSubmit({
                // email: values.email,
                code: code,
                password: values.password,
                new_password: values.new_password,
              })
            )}
          >
            <TextField
              label="Password"
              placeholder="Masukan password"
              required={true}
              type="password"
              size="md"
              {...form.getInputProps('password')}
            />
            <Space h="lg" />
            <TextField
              label="Confirm Password"
              placeholder="Masukan confirm password"
              required={true}
              type="password"
              size="md"
              {...form.getInputProps('new_password')}
            />
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
              Send
            </Button>
          </form>
        </Grid.Col>
      </Grid.Col>
    </>
  )
}
