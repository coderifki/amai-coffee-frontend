import { createStyles, PasswordInput, TextInput } from '@mantine/core'

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
  type?: 'text' | 'number' | 'password'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  required?: boolean
}
export default function TextField({
  label,
  placeholder,
  type = 'text',
  required = false,
  size = 'md',
  ...other
}: Props) {
  const { classes } = useStyles()
  if (type === 'password')
    return (
      <PasswordInput
        placeholder={placeholder}
        className={classes.formField}
        label={label}
        size={size}
        withAsterisk={required}
        {...other}
        // {...form.getInputProps('password')}
      />
    )
  return (
    <>
      <TextInput
        type={type}
        label={label}
        size={size}
        className={classes.formField}
        placeholder={placeholder}
        withAsterisk={required}
        {...other}
      />
    </>
  )
}
