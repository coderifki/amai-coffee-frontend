import { createStyles, Select } from '@mantine/core'

const useStyles = createStyles(() => ({
  selectField: {
    '& .mantine-Select-label': {
      color: '#868E96',
    },
    '& .mantine-Select-item': {
      width: '98%',
    },
    '& .mantine-Select-item[data-selected]': {
      color: '#fff',
      backgroundColor: '#018B14',
      // transition: 'all 0.5s ease-in-out',
    },
    '& .mantine-Select-item[data-selected]:hover': {
      color: '#fff',
      backgroundColor: '#018B14',
      // opacity: 0.8,
      // transition: 'all 0.5s ease-in-out',
    },
    '& .mantine-Select-item[data-hovered]': {
      color: '#fff',
      opacity: 0.8,
      backgroundColor: '#018B14',
      transition: 'all 0.3s ease-in-out',
      width: '98%',
    },
    '& .mantine-Select-input:focus-within': {
      borderColor: '#018B14',
    },
  },
}))
interface Props {
  label: string
  placeholder: string
  required?: boolean
  data: {
    value: string
    label: string
  }[]
}
export default function SelectField({
  label,
  placeholder,
  required = false,
  data,
  ...other
}: Props) {
  const { classes } = useStyles()
  return (
    <>
      <Select
        className={classes.selectField}
        label={label}
        placeholder={placeholder}
        withAsterisk={required}
        data={data}
        clearable
        {...other}
      />
    </>
  )
}
