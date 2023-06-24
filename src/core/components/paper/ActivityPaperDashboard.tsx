import {
  Box,
  Center,
  createStyles,
  Divider,
  Flex,
  Paper,
  Select,
  Text,
} from '@mantine/core'
import { FaAngleDown } from 'react-icons/fa'

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
    height: '200px',
  },
}))
export default function ActivityPaperDashboard() {
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
            Kegiatan
          </Text>
        </Center>
        {/* <Text c={'#018B14'} form="a" href="#" size={'sm'} fw={400}>
          Lihat semua
        </Text> */}
        <Select
          placeholder="Hari Ini"
          rightSection={<FaAngleDown size="1rem" />}
          rightSectionWidth={30}
          styles={{ rightSection: { pointerEvents: 'none' } }}
          data={['React', 'Angular', 'Svelte', 'Vue']}
          sx={{ border: 'none' }}
        />
      </Flex>
      <Divider size="sm" color={'#018B14'} sx={{ margin: '13px 0 13px 0' }} />
      <Center>
        <Box className={classes.box}>
          <Text size={'md'} fw={400} color="#112D3C" sx={{ opacity: 0.5 }}>
            Belum Ada Kegiatan{' '}
          </Text>
        </Box>
      </Center>
    </Paper>
  )
}
