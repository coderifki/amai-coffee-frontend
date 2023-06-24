import CancelButton from '@/core/components/button/CancelButton'
import DeleteButton from '@/core/components/button/DeleteButton'
import { BaseModal } from '@/core/components/modal/base-modal'
import { BaseTableType } from '@/core/components/table/table-type'
import { deleteFacultyById } from '@/features/academic/faculty/faculty.api'
import { formatCapitalizeText } from '@/utils/formatCapitalizeText'
import { getNameTypeBaseTable } from '@/utils/getNameTypeBaseTable'
import { createStyles, Grid, Text } from '@mantine/core'
import toast from 'react-hot-toast'

const useStyles = createStyles(() => ({
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

interface Props {
  open: boolean
  type: BaseTableType
  name: string
  deleteId?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  handleClose: () => void
  handleLoading: (data: boolean) => void
  handleRefetch: () => void
}

export function DeleteConfirmationTable({
  open = false,
  type,
  name,
  deleteId,
  size = 'md',
  handleClose,
  handleLoading,
  handleRefetch,
}: Props) {
  const { classes } = useStyles()
  const modalName = getNameTypeBaseTable(type)

  const handleDelete = async () => {
    handleLoading(true)
    try {
      switch (type) {
        case 'faculty':
          const rest = await deleteFacultyById({ id: deleteId })
          if (rest) {
            toast.success(`${modalName} (${name}) berhasil dihapus`, {
              position: 'bottom-center',
            })
            handleClose()
            handleRefetch()
          }
          break
        default:
          alert(
            'please config your delete hande in delete-confimration-modal.tsx'
          )
          handleClose()
          break
      }
    } catch (error) {
      toast.error(`${error}`)
    } finally {
      handleLoading(false)
    }
  }
  return (
    <div>
      <BaseModal
        open={open}
        handleClose={handleClose}
        title={`Hapus Data ${formatCapitalizeText(modalName)} (${name})   `}
        type="delete"
        size={size}
      >
        {/* as */}
        <Grid className={classes.gridContainer}>
          {/* <Grid.Col className={classes.gridContainer} md={8}>
            <Grid.Col className={classes.gridContainer} md={6}>
              <DeleteButton title="Delete" onClick={handleDelete} />
            </Grid.Col>
            <Grid.Col className={classes.gridContainer} md={6}>
              <CancelButton title="Cancel" onClick={handleClose} />
            </Grid.Col>
          </Grid.Col> */}
          <Text sx={{ margin: '10px 0' }}>Under Construction</Text>
        </Grid>
      </BaseModal>
    </div>
  )
}
