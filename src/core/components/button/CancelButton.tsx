import { Button, createStyles } from '@mantine/core'

const useStyles = createStyles(() => ({
  button: {
    border: '1px solid #018B14',
    color: '#018B14',
  },
}))

interface Props {
  title: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  onClick: () => void
}

export default function CancelButton({ title, size = 'md', onClick }: Props) {
  const { classes } = useStyles()
  return (
    <>
      <Button
        // leftIcon={<FaTrashAlt size={rem(18)} />}
        className={classes.button}
        radius="md"
        size={size}
        variant={'outline'}
        onClick={onClick}
      >
        {title}
      </Button>
    </>
  )
}
