import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { faker } from '@faker-js/faker'
import {
  Box,
  Burger,
  Center,
  createStyles,
  Divider,
  Flex,
  Grid,
  Paper,
  Stack,
  Text,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { staticLineChatData } from '@/mock-data/dashboard'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    // title: {
    //   display: true,
    //   text: 'Chart.js Line Chart',
    // },
  },
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: '#00590c',
      // backgroundColor: '#018B14',
    },
    {
      fill: true,
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      // backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

const useStyles = createStyles(() => ({
  paper: {
    // box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.25)',
    borderRadius: '14px',
    padding: '15px',
  },
  boxCard: {
    display: 'flex',
    flexDirection: 'row',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
  },
}))
export default function LineChart() {
  const { classes } = useStyles()
  const [opened, { toggle }] = useDisclosure(false)
  return (
    <>
      <Paper className={classes.paper}>
        <Box
          sx={{
            width: '100%',
          }}
        >
          <Flex
            gap="xl"
            justify="space-between"
            align="center"
            direction="row"
            wrap="wrap"
          >
            {/* <span>{link.label}</span> */}
            <Text size="xl" weight={700}>
              Analisis
            </Text>
            {/* <Burger  /> */}
            <Burger opened={opened} onClick={toggle} size="sm" />
          </Flex>
          <Divider
            size="sm"
            color={'#018B14'}
            sx={{ margin: '13px 0 13px 0', opacity: 0.5 }}
          />
          <Grid sx={{ margin: '0 0 10px 0' }}>
            {staticLineChatData.map((item, index) => (
              <Grid.Col span={3} key={index} className={classes.grid}>
                <Box>
                  <Stack spacing="xs" className={classes.boxCard}>
                    <Text size="xl" weight={700}>
                      {/* 24.7K */}
                      {item.primeText}
                    </Text>
                    <Center>
                      <Text size="sm" weight={400} sx={{ color: '#018B14' }}>
                        {/* +49% */}
                        {item.percentage}
                      </Text>
                    </Center>
                  </Stack>
                  <Text size="sm" weight={400} sx={{ color: '#112D3C' }}>
                    {/* Unique Visitors */}
                    {item.description}
                  </Text>
                </Box>
              </Grid.Col>
            ))}
          </Grid>
        </Box>
        <Center>
          <Box sx={{ width: '90%' }}>
            <Line options={options} data={data} />
          </Box>
        </Center>
      </Paper>
    </>
  )
}
