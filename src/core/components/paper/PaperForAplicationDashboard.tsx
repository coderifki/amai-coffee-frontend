import AplicationButtonDashboard from '@/core/components/button/AplicationButtonDashboard'
import { aplicationData } from '@/mock-data/dashboard'
import { Center, createStyles, Flex, Paper, Text } from '@mantine/core'
import { FaExclamationCircle } from 'react-icons/fa'

const useStyles = createStyles(() => ({
  paper: {
    // box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.25)',
    borderRadius: '14px',
    padding: '25px',
    maxHeight: '250px',
  },
}))
export default function PaperForAplicationDashboard() {
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
            Permohonan
          </Text>
          <FaExclamationCircle
            color="#112D3C"
            style={{ margin: '0 5px 0 5px' }}
          />
        </Center>
        <Text c={'#018B14'} component="a" href="#" size={'sm'} fw={400}>
          Lihat semua
        </Text>
      </Flex>
      <Flex direction="column" gap={10}>
        {/* <AplicationButtonDashboard
          title="Libur"
          count={0}
          description="Ajukan Libur Semester"
        /> */}
        {aplicationData.map((item, index) => (
          <AplicationButtonDashboard key={index} {...item} />
        ))}
        {/* <UserButton
          key={index}
          image={item.imageUrl}
          title={item.title}
          total={formatNumber(item.count)}
        /> */}
      </Flex>
    </Paper>
  )
}
