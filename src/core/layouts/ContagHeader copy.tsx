import { Box, Button, Grid, Header, Image, MediaQuery } from '@mantine/core'
import { useAuth } from '../contex/AuthUserProvider'

export default function ContagHeader() {
  const { logOut } = useAuth()
  return (
    <Header height={60} p="md">
      <Grid>
        {/* <CurtainLoader /> */}
        <Grid.Col
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          md={2}
          xs={3}
        >
          <Image
            width={'104px'}
            src="/dev/contag_logo_navy.png"
            alt="header contag logo"
          />
        </Grid.Col>
        <MediaQuery smallerThan="60em" styles={{ display: 'none' }}>
          <Grid.Col
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            md={8}
            xs={7}
          >
            <Box>Test</Box>
          </Grid.Col>
        </MediaQuery>
        <Grid.Col
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          md={2}
          xs={3}
        >
          <Button variant={'outline'} onClick={logOut}>
            LogOut
          </Button>
        </Grid.Col>
      </Grid>
    </Header>
  )
}
