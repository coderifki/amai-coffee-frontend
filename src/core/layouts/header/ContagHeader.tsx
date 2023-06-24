// import { useAuth } from '@core/contex/AuthUserProvider'
import NotificationIcon from '@core/layouts/header/NotificationIcon'
import UserButtonMenu from '@core/layouts/header/UserButtonMenu'
import { Burger, createStyles, Grid, Header, Image, rem } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { useRouter } from 'next/router'
// import { IconChevronDown } from '@tabler/icons-react';

// import { MantineLogo } from '@mantine/ds';

const HEADER_HEIGHT = rem(70)

const MOBILE_HEADER_HEIGHT = rem(140)

const useStyles = createStyles((theme) => ({
  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
  gridLogo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: '20px',
  },
  gridIconNotif: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: '14px',
  },
  gridUserBUtton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '14px',
  },
}))

interface HeaderActionProps {
  opened: boolean
  setOpened: (opened: boolean) => void
  links: {
    link: string
    label: string
    links?: {
      link: string
      label: string
      links?: { link: string; label: string }[]
    }[]
  }[]
}

export function ContagHeader({ links, opened, setOpened }: HeaderActionProps) {
  // const [opened, { toggle }] = /*useDisclosure*/(false)
  // const { logOut } = useAuth()
  const { classes } = useStyles()
  const router = useRouter()
  const largeScreen = useMediaQuery('(min-width: 48em)')

  return (
    <Header
      height={largeScreen ? HEADER_HEIGHT : MOBILE_HEADER_HEIGHT}
      sx={{ borderBottom: 0 }}
      mb={120}
    >
      {/* <Container className={classes.inner} fluid> */}
      <Grid>
        <Grid.Col className={classes.gridLogo} span={'content'}>
          <Burger
            opened={opened}
            onClick={() => setOpened(!opened)}
            className={classes.burger}
            size="sm"
          />
          {/* <MantineLogo size={28} /> */}
          <Image
            width={'104px'}
            src="/dev/contag_logo_navy.png"
            alt="header contag logo"
            sx={{
              marginTop: '5px',
              marginLeft: '10px',
              cursor: 'pointer',
            }}
            onClick={() => router.push('/dashboard')}
          />
        </Grid.Col>
        <Grid.Col className={classes.gridIconNotif} span={'auto'}>
          <NotificationIcon />
        </Grid.Col>
        <Grid.Col className={classes.gridUserBUtton} md={3} sm={3} xs={12}>
          <UserButtonMenu />
        </Grid.Col>
      </Grid>
      {/* <CurtainLoader /> */}
      {/* <HeaderMenu links={links} /> */}

      {/* </Container> */}
    </Header>
  )
}
