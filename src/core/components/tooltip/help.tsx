import { Box, createStyles, Tooltip } from '@mantine/core'
import { FaQuestionCircle } from 'react-icons/fa'

const useStyles = createStyles(() => ({
  box: {
    position: 'relative',
    // height: rem(280),
    width: '50px',
    height: '50px',
    backgroundColor: '#018B14',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '16px',
    borderRadius: '100%',
  },
  text: {
    ['&:hover']: {
      color: '#FCD705',
    },
    cursor: 'pointer',
  },
}))

interface Props {
  message: string
}
export default function TooltipHelp({ message }: Props) {
  const { classes } = useStyles()

  return (
    <>
      <Tooltip
        multiline
        width={150}
        withArrow
        color="#018B14"
        transitionProps={{ duration: 200 }}
        label={message}
      >
        <Box className={classes.box}>
          <FaQuestionCircle />
        </Box>
      </Tooltip>
    </>
  )
}
