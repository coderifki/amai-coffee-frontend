import { choose } from '@/mock-data/dashboard'
import BackgroudnImage from '@components/backgrounds/BackgroudnImage'
import BackgroundCardDashboard from '@components/cards/BackgroundCardDashboard'
import ImageCard from '@components/cards/ChooseMean'
import TooltipHelp from '@components/tooltip/help'
import { Box, createStyles, Grid } from '@mantine/core'

const useStyles = createStyles(() => ({
  container: {
    position: 'relative',
    marginTop: '10px',
  },
  containerCardContag: {
    position: 'absolute',
  },
  containerCardChoose: {
    position: 'absolute',
    top: '45vh',
    bottom: '-1',
    left: '0',
    right: '0',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '300px',
  },
  tooltip: {
    position: 'absolute',
    top: '87vh',
    bottom: '0',
    right: '0',
  },
}))

export default function ScreeningDashboard() {
  const { classes } = useStyles()
  const datas = choose ?? []
  return (
    <Box>
      <BackgroudnImage image="/assets/images/dashboard/dashboard_background.png" />
      <div className={classes.container}>
        <div className={classes.containerCardContag}>
          <BackgroundCardDashboard />
        </div>
        <div className={classes.containerCardChoose}>
          <Grid>
            {datas &&
              datas.length > 0 &&
              datas.map((data, index) => (
                <Grid.Col key={index} className={classes.card} md={12} xs={12}>
                  <ImageCard
                    title={data.title}
                    image={data.image}
                    value={data.value}
                    link={data.link}
                  />
                </Grid.Col>
              ))}
          </Grid>
        </div>
        {/* <div className={classes.tooltip}>
          <TooltipHelp message="This is tooltip help" />
        </div> */}
      </div>
    </Box>
  )
}
