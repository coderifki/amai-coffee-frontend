import ButtonComingSoonActivityDashboard from '@/core/components/button/ButtonComingSoonActivityDashboard'
import { comingSoonActivity } from '@/mock-data/dashboard'
import {
  Box,
  Button,
  Center,
  createStyles,
  Flex,
  Paper,
  Text,
} from '@mantine/core'
import { FaPlus } from 'react-icons/fa'

const useStyles = createStyles(() => ({
  paper: {
    // box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.25)',
    borderRadius: '14px',
    padding: '25px',
    minHeight: '250px',
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '200px',
  },
}))
export default function ComingSoonActifityDashboard() {
  const { classes } = useStyles()
  return (
    <Paper className={classes.paper}>
      <Flex
        justify="space-between"
        align="center"
        direction="row"
        sx={{ margin: '0 0 10px 0' }}
      >
        <Center>
          <Text size={'md'} fw={700}>
            Kegiatan Mendatang
          </Text>
        </Center>
        <Text c={'#018B14'} component="a" href="#" size={'sm'} fw={400}>
          Lihat semua
        </Text>
      </Flex>
      {/* <Divider size="sm" color={'#018B14'} sx={{ margin: '13px 0 13px 0' }} /> */}
      <Center>
        <Box className={classes.box}>
          {/* <Text size={'md'} fw={400} color="#112D3C" sx={{ opacity: 0.5 }}>
            Belum Ada Kegiatan{' '}
          </Text> */}

          {/* <ButtonComingSoonActivityDashboard
            date={moment().format('DD MMMM YYYY')}
            description="testsdasd"
          /> */}
          {comingSoonActivity.map((item, index) => (
            <ButtonComingSoonActivityDashboard key={index} {...item} />
          ))}
        </Box>
      </Center>
      <Button
        sx={{ backgroundColor: '#018B14 !important', margin: '10px 0 0 0 ' }}
        fullWidth
        radius={'md'}
      >
        <Center>
          <FaPlus style={{ margin: ' 0 5px 0 5px' }} />
          <Text>Kegiatan Baru</Text>
        </Center>
      </Button>
    </Paper>
  )
}
