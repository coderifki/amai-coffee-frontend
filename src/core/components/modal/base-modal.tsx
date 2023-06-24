import { IModalBase } from '@/core/components/modal/modal-type'
import { createStyles, Modal } from '@mantine/core'

const useStyles = createStyles(() => ({
  modalContainer: {
    '& .mantine-Modal-content': {
      padding: '10px',
      borderRadius: '14px',
    },
    '& .mantine-Modal-title ': {
      fontWeight: 700,
      fontSize: '17px',
      lineHeight: '155%',
      color: '#018B14',
    },
  },
  modalDeleteContainer: {
    '& .mantine-Modal-content': {
      padding: '10px',
      borderRadius: '14px',
    },
    '& .mantine-Modal-header': {
      // textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& .mantine-Modal-title ': {
      fontWeight: 700,
      fontSize: '17px',
      lineHeight: '155%',
      color: '#CE2166',
    },
  },
}))

export function BaseModal({
  open,
  title,
  handleClose,
  children,
  type,
  size = 'xl',
}: IModalBase) {
  const { classes } = useStyles()

  return (
    <div>
      <Modal
        size={size}
        className={
          type === 'delete'
            ? classes.modalDeleteContainer
            : classes.modalContainer
        }
        withCloseButton={type === 'delete' ? false : true}
        opened={open}
        onClose={() => {
          handleClose(false)
        }}
        title={title}
        centered
      >
        {children}
      </Modal>
    </div>
  )
}
