import { PaymentsTable } from '@/core/components/table/detail-mahasiswa/payments-table'
import {
  dummyParentsGuardiansTable,
  dummyPaymentsTable,
} from '@/mock-data/table'
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

export default function TabPayments() {
  const { classes } = useStyles()

  return (
    <React.Fragment>
      <PaymentsTable data={dummyPaymentsTable} />
    </React.Fragment>
  )
}
