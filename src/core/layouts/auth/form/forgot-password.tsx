import TextField from '@/core/form-fields/text-field'
import { IForgotPassword } from '@/core/layouts/auth/auth'
import { Box, Button, Grid, Image, Text } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useRouter } from 'next/router'
import { FaRegTimesCircle } from 'react-icons/fa'

interface Props {
  // children: React.ReactNode;
  onSubmit: (values: IForgotPassword) => void
  isLoading: boolean
}

export default function ForgotPasswordForm({ onSubmit, isLoading }: Props) {
  const router = useRouter()

  const form = useForm({
    initialValues: {
      email: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })
  const handleSubmit = (values: IForgotPassword) => {
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
              fz="34px"
              fw={700}
            >
              Forgot Password
            </Text>
          </Grid.Col>
          <form
            onSubmit={form.onSubmit((values) =>
              handleSubmit({
                email: values.email,
              })
            )}
          >
            <TextField
              label="Email"
              placeholder="Masukan email"
              required={true}
              size="md"
              {...form.getInputProps('email')}
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
