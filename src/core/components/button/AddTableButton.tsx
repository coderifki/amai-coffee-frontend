import { Button } from '@mantine/core'
import { FaPlus } from 'react-icons/fa'

interface Props {
  title: string
  onClick: () => void
}

export default function AddTableButton({ title, onClick }: Props) {
  return (
    <>
      <Button
        // leftIcon={<FaPlus size={rem(18)} />}
        rightIcon={<FaPlus />}
        radius="md"
        size={'sm'}
        fullWidth
        styles={(theme) => ({
          root: {
            backgroundColor: '#018B14 !important',
            border: 0,
            // height: rem(42),
            // paddingLeft: rem(20),
            // paddingRight: rem(20),
            // '&:not([data-disabled])': theme.fn.hover({
            //   backgroundColor: '#00ceee !important',
            // }),
          },

          leftIcon: {
            marginRight: theme.spacing.md,
          },
        })}
        onClick={onClick}
      >
        {title}
      </Button>
    </>
  )
}
