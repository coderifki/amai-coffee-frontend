import { Button, createStyles } from '@mantine/core'

const useStyles = createStyles(() => ({
  button: {
    backgroundColor: '#CE2166 !important',
    color: '#fff',
  },
}))

interface Props {
  title: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  onClick: () => void
}

export default function DeleteButton({ title, size = 'md', onClick }: Props) {
  const { classes } = useStyles()
  return (
    <>
      <Button
        // leftIcon={<FaTrashAlt size={rem(18)} />}
        className={classes.button}
        radius="md"
        size={size}
        variant={'filled'}
        onClick={onClick}
      >
        {title}
      </Button>
    </>
  )
}
