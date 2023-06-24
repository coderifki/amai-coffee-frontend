// import { IconEye, IconMessageCircle } from '@tabler/icons-react';
import {
  createStyles,
  Grid,
  Image,
  MediaQuery,
  Paper,
  Text,
} from '@mantine/core'
import LanguageButton from '../button/LanguageButton'

const useStyles = createStyles((theme) => ({
  paper: {
    position: 'relative',
    // height: rem(280),
    width: '100%',
    height: '55vh',
    backgroundColor: 'rgb(255, 255, 255, 0.2)',
    display: 'inline-block',
    // opacity: 0.2,
  },
  textheader: {
    lineHeight: '30px',
    paddingTop: 20,
    paddingLeft: 20,
    [theme.fn.smallerThan('sm')]: {
      paddingTop: 55,
    },
  },
  textdesc: {
    lineHeight: '30px',
    paddingLeft: 20,
  },
}))

export default function BackgroundCardDashboard() {
  const { classes } = useStyles()

  return (
    <Paper shadow="xs" radius="lg" p="sm" className={classes.paper}>
      {/* <Text>Paper is the most basic ui form</Text> */}
      <Grid>
        <Grid.Col md={6} xs={12}>
          <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
            <Text
              className={classes.textheader}
              fz="30px"
              fw={700}
              sx={{ color: '#FFFFFF' }}
            >
              Lorem ipsum dolor sit amet consectetur
            </Text>
          </MediaQuery>
          <MediaQuery largerThan="md" styles={{ display: 'none' }}>
            <Text
              className={classes.textheader}
              fz="24px"
              fw={700}
              sx={{ color: '#FFFFFF' }}
            >
              Lorem ipsum dolor sit amet consectetur
            </Text>
          </MediaQuery>
          <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
            <Text
              className={classes.textdesc}
              fz="20px"
              fw={500}
              sx={{ color: '#2E3261' }}
            >
              Gravida eu purus risus consectetur viverra. Adipiscing nisi eget
              nulla eu sit volutpat habitant imperdiet. Vitae bibendum ac massa
              urna tempus turpis aliquet fermentum eget.
            </Text>
          </MediaQuery>
          {/* <MediaQuery largerThan="md" styles={{ display: 'none' }}>
            <Text
              className={classes.textdesc}
              fz="18px"
              fw={500}
              sx={{ color: '#2E3261' }}
            >
              Gravida eu purus risus consectetur viverra. Adipiscing nisi eget
              nulla eu sit volutpat habitant imperdiet. Vitae bibendum ac massa
              urna tempus turpis aliquet fermentum eget.
            </Text>
          </MediaQuery> */}
        </Grid.Col>
        <Grid.Col md={6} xs={12}>
          <Grid>
            <Grid.Col
              span={12}
              sx={{
                position: 'absolute',
                right: 0,
                top: 0,
                display: 'flex',
                justifyContent: 'flex-end',
                zIndex: 2,
              }}
            >
              <LanguageButton />
            </Grid.Col>
            <Grid.Col span={12}>
              <MediaQuery smallerThan="xs" styles={{ display: 'none' }}>
                <Image
                  src={'/assets/images/dashboard/contag-card-dashboard.png'}
                  alt="contag-card-dashboard"
                />
              </MediaQuery>
            </Grid.Col>
          </Grid>
        </Grid.Col>
      </Grid>
    </Paper>
  )
}
