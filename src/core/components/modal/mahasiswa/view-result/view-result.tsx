import BaseAccordion from '@/core/components/accordion/base-accordion'
import BaseChildAccordion from '@/core/components/accordion/base-child-accordion'
import { BaseModal } from '@/core/components/modal/base-modal'
import { IViewResutl } from '@/core/components/modal/modal-type'
import ViewResultTable from '@/core/components/table/view-reuslt/view-result-table'
import { createStyles, Grid, Text } from '@mantine/core'

const useStyles = createStyles(() => ({
  headlineAccordion: {
    fontWeight: 400,
    fontSize: '15px',
    lineHeight: '155%',
    color: '#112D3C',
  },
}))

export function ViewResult({ id, open, name, handleClose }: IViewResutl) {
  const { classes } = useStyles()
  // console.log({ id })
  return (
    <div>
      <BaseModal
        open={open}
        handleClose={handleClose}
        title={`Hasil Belajar ${name}`}
        type="default"
      >
        <Grid>
          <Grid.Col md={12}>
            <Text className={classes.headlineAccordion}>
              Ujian Tengah Semester (UTS)
            </Text>
          </Grid.Col>
          <Grid.Col md={12}>
            <BaseAccordion title="Lihat Hasil Ujian">
              <BaseChildAccordion title="Semester 1">
                <ViewResultTable />
              </BaseChildAccordion>
            </BaseAccordion>
          </Grid.Col>
        </Grid>
      </BaseModal>
    </div>
  )
}
