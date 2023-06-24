import { createStyles, FileInput } from '@mantine/core'

const useStyles = createStyles(() => ({
  formFileInput: {
    '& .mantine-FileInput-input:focus-within': {
      borderColor: '#018B14',
    },
  },
}))
interface Props {
  label: string
  placeholder: string
  required?: boolean
  // image/png,image/jpeg,image/jpg for acceptType
  acceptType?: string
}
export default function InputField({
  label,
  placeholder,
  required = false,
  acceptType = 'image/png,image/jpeg,image/jpg',
  ...other
}: Props) {
  const { classes } = useStyles()
  return (
    <>
      <FileInput
        className={classes.formFileInput}
        label={label}
        placeholder={placeholder}
        accept={acceptType}
        withAsterisk={required}
        clearable
        {...other}
      />
    </>
  )
}
