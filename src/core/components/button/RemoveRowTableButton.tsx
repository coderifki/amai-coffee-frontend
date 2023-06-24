import { Button, createStyles, rem } from '@mantine/core'
import { FaTrashAlt } from 'react-icons/fa'

const useStyles = createStyles(() => ({
  button: {
    border: '1px solid #CE2166',
    color: '#CE2166',
  },
}))

interface Props {
  title: string
  onClick: () => void
}

export default function RemoveRowTableButton({ title, onClick }: Props) {
  const { classes } = useStyles()
  return (
    <>
      <Button
        leftIcon={<FaTrashAlt size={rem(18)} />}
        className={classes.button}
        radius="md"
        size={'sm'}
        variant={'outline'}
        onClick={onClick}
        // styles={() => ({
        //   root: {
        //     // backgroundColor: '#018B14 !important',
        //     border: '1px solid #CE2166',
        //     color: '#CE2166',
        //   },
        // })}
      >
        {title}
      </Button>
    </>
  )
}
