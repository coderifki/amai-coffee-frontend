import LineChart from '@/core/components/chart/LineChart'
import SelectStudentActivity from '@/core/components/fields/SelectStudentActivity'
import ActivityPaperDashboard from '@/core/components/paper/ActivityPaperDashboard'
import ComingSoonActifityDashboard from '@/core/components/paper/ComingSoonActifityDashboard'
import DashboardCalender from '@/core/components/paper/DashboardCalender'
import PaperForAplicationDashboard from '@/core/components/paper/PaperForAplicationDashboard'
import HeaderCardDashboard from '@components/cards/HeaderCardDashboard'
import SearchingField from '@components/fields/SearchingField'
import { Box, createStyles, Grid } from '@mantine/core'
import React from 'react'

const useStyles = createStyles(() => ({
  box: {
    margin: '20px 0 20px 0',
  },
}))

export default function HomeDashboard() {
  const { classes } = useStyles()
  // const [value, setValue] = React.useState<Date | null>(null)
  return (
    <>
      <HeaderCardDashboard />
      <Grid grow gutter="md" mt={35}>
        <Grid.Col xs={12} md={8}>
          <Box className={classes.box}>
            <LineChart />
          </Box>
        </Grid.Col>
        <Grid.Col xs={12} md={4}>
          <Box className={classes.box}>
            <SearchingField />
          </Box>
          <Box className={classes.box}>
            <SelectStudentActivity />
          </Box>
          <Box className={classes.box}>
            <DashboardCalender />
          </Box>
          <Box className={classes.box}>
            <PaperForAplicationDashboard />
          </Box>
          <Box className={classes.box}>
            <ActivityPaperDashboard />
          </Box>
          <Box className={classes.box}>
            <ComingSoonActifityDashboard />
          </Box>
        </Grid.Col>
      </Grid>
    </>
  )
}
