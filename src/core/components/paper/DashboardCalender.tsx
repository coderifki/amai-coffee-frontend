import {
  Box,
  Button,
  Center,
  createStyles,
  Divider,
  Indicator,
  Paper,
  Text,
} from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import React from 'react'

const useStyles = createStyles(() => ({
  paper: {
    // box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
    boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.25)',
    borderRadius: '14px',
    padding: '15px',
  },
  containerCenter: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardButtonCalender: {
    backgroundColor: '#018B14 !important',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#0aad21 !important',
    },
  },
}))

export default function DashboardCalender() {
  const { classes } = useStyles()
  const [value, setValue] = React.useState<Date | null>(null)
  return (
    <Paper className={classes.paper}>
      <Center className={classes.containerCenter}>
        <Box
          sx={{
            width: '90%',
          }}
        >
          <Center>
            <Text size="xl" weight={700}>
              Kegiatan
            </Text>
          </Center>
          <Divider
            size="sm"
            color={'#018B14'}
            sx={{ margin: '13px 0 13px 0' }}
          />
        </Box>
        <DatePicker
          size="md"
          allowDeselect
          renderDay={(date) => {
            const day = date.getDate()
            return (
              <Indicator size={6} color="red" offset={-5} disabled={day !== 16}>
                <div>{day}</div>
              </Indicator>
            )
          }}
          value={value}
          onChange={setValue}
        />
        <Box
          sx={{
            width: '90%',
          }}
        >
          <Divider
            size="sm"
            color={'#018B14'}
            sx={{ margin: '13px 0 13px 0' }}
          />
          <Center>
            <Button
              className={classes.cardButtonCalender}
              variant="filled"
              radius="md"
            >
              {/* Book classic tour now */}1 Kegiatan
            </Button>
          </Center>
        </Box>
      </Center>
    </Paper>
  )
}
