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

type DashboardCalenderProps = {}

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

export default function DashboardCalender(props: DashboardCalenderProps) {
  const { classes } = useStyles()
  const [value, setValue] = React.useState<Date | null>(null)
  const [eventList, setEventList] = React.useState<string[]>([]) // State to hold Event

  // Function to add event to the list
  const addEvent = (event: string) => {
    setEventList((prevList) => [...prevList, event])
  }
  return (
    <Paper className={classes.paper}>
      <Center className={classes.containerCenter}>
        {/* ... (existing JSX code) */}
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
          onChange={(newValue) => {
            setValue(newValue)
            const newEvent = prompt('Enter kegiatan for this date')
            if (newEvent) {
              addEvent(newEvent)
            }
          }}
        />
        {/* ... (existing JSX code) */}
        {/* Displaying saved kegiatan */}
        {eventList.length > 0 && (
          <Box
            sx={{
              width: '90%',
            }}
          >
            {eventList.map((event, index) => (
              <Text key={index}>{event}</Text>
            ))}
          </Box>
        )}
      </Center>
    </Paper>
  )
}
