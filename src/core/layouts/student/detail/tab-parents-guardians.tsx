import { ParentsGuardiansTable } from '@/core/components/table/detail-mahasiswa/parents-guardian-table'
import { dummyParentsGuardiansTable } from '@/mock-data/table'
import { createStyles } from '@mantine/core'
import React from 'react'

const useStyles = createStyles(() => ({
  gridContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
  },
  textLabelFiedl: {
    color: '#112D3C',
    opacity: 0.5,
  },
  textField: {
    color: '#112D3C',
  },
  paper: {
    border: '2px solid #018B14',
    backgroundColor: 'transparent',
    margin: '20px 0',
  },
}))

export default function TabParentsGuardians() {
  const { classes } = useStyles()

  return (
    <React.Fragment>
      {/* test */}
      <ParentsGuardiansTable data={dummyParentsGuardiansTable} />
    </React.Fragment>
  )
}
