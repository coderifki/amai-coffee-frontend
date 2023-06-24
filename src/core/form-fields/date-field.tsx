import { createStyles } from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { HiCalendar } from 'react-icons/hi'

const useStyles = createStyles(() => ({
  dateField: {
    '& .mantine-DateInput-day[data-selected]': {
      // color: '#868E96'
      backgroundColor: '#018B14',
    },
    '& .mantine-DateInput-day[data-selected]:hover': {
      // color: '#868E96'
      backgroundColor: '#018B14',
    },
    '& .mantine-DateInput-day:hover': {
      color: '#fff',
      backgroundColor: '#018B14',
      transition: 'all 0.3s ease-in-out',
    },
    '& .mantine-DateInput-label': {
      color: '#868E96',
    },
    '& .mantine-DateInput-input:focus-within': {
      borderColor: '#018B14',
    },
    '& .mantine-Day-day[data-disabled]:hover': {
      color: '#ced4da',
      backgroundColor: 'transparent',
    },
  },
}))
interface Props {
  label: string
  minDate?: Date
  maxDate?: Date
  placeholder?: string
  required?: boolean
}
export default function DateInputField({
  label,
  placeholder,
  required = false,
  minDate,
  maxDate,
  ...other
}: Props) {
  const { classes } = useStyles()
  return (
    <>
      <DateInput
        className={classes.dateField}
        minDate={minDate ? minDate : undefined}
        maxDate={maxDate ? maxDate : undefined}
        label={label}
        defaultValue={new Date()}
        placeholder={placeholder ? placeholder : ''}
        withAsterisk={required}
        allowDeselect
        icon={<HiCalendar />}
        {...other}
      />
    </>
  )
}
