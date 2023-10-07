import {
  createStyles,
  PasswordInput,
  TextInput,
  TextInputProps,
} from '@mantine/core'

const useStyles = createStyles(() => ({
  formField: {
    '& .mantine-TextInput-label': {
      color: '#868E96',
    },
    '& .mantine-TextInput-input:focus-within': {
      borderColor: '#018B14',
    },
  },
}))

interface Props {
  label: string
  placeholder: string
  required?: boolean
}
export default function TextField({
  label,
  placeholder,
  required = false,
  ...other
}: Props & TextInputProps) {
  const { classes } = useStyles()
  return (
    <>
      <TextInput
        label={label}
        className={classes.formField}
        placeholder={placeholder}
        withAsterisk={required}
        {...other}
      />
    </>
  )
}
