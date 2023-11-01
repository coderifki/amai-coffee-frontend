import SearchingField from '@/core/components/fields/SearchingField'
import { selectDataPerPage } from '@/mock-data/table'
import { calculateRange } from '@/utils/calculateRange'
import { formatNumberIndoCurrency } from '@/utils/formatNumberIndoCurrency'
import {
  Button,
  createStyles,
  Flex,
  Grid,
  Group,
  Pagination,
  rem,
  Select,
  Space,
  Table,
  Text,
} from '@mantine/core'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { FaEye } from 'react-icons/fa'

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
  linksText: {
    color: '#fff',
    fontSize: '14px',
    fontWeight: 400,
    transition: '0.3s ease-in-out',
    '&:hover': {
      color: '#112D3C',
      transition: '0.3s ease-in-out',
    },
  },
  linksContainer: {
    width: '200px  !important',
    padding: `${rem(8)} ${rem(8)}`,
    borderRadius: theme.radius.md,
    backgroundColor: '#018B14',
    border: 'none',
  },
}))

const styleForHeaderTitle = {
  fontWeight: 700,
  fontSize: '16px',
  lineHeight: '115%',
  color: '#112D3C',
}

interface TableSelectionProps {
  data: {
    id: string
    paymentType: string
    transactionNumber: string
    amount: number
    status: string
  }[]
}

export function PaymentsTable({ data }: TableSelectionProps) {
  const router = useRouter()

  const { classes, cx } = useStyles()
  const [selection, setSelection] = useState(['-1'])
  const [rowPerPage, setRowPerPage] = useState<string | null>('5')
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(100)

  const [startIndex, endIndex] = calculateRange(
    page,
    Number((rowPerPage && rowPerPage) ?? 0),
    total
  )

  const rows = data.map((item) => {
    const selected = selection.includes(item.id)
    return (
      <tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
        <td>{item.paymentType}</td>
        <td>{item.transactionNumber}</td>
        <td>{formatNumberIndoCurrency(item.amount)}</td>
        <td>{item.status}</td>
        <td style={{ width: '200px' }}>
          <Group position="center">
            <Button sx={{ backgroundColor: '#018B14 !important' }}>
              <Flex
                justify={'center'}
                align={'center'}
                direction={'row'}
                gap={10}
              >
                <FaEye size={15} />
                Cek Detail
              </Flex>
            </Button>
          </Group>
        </td>
      </tr>
    )
  })

  React.useEffect(() => {
    setTotal(100)
  }, [])
  return (
    <>
      <Grid>
        <Grid.Col
          span={12}
          sx={{ display: 'flex', justifyContent: 'flex-end' }}
        >
          <Grid.Col span={3}>
            <SearchingField size="sm" />
          </Grid.Col>
        </Grid.Col>
      </Grid>
      <Space h="xl" />
      {/* <ScrollArea> */}
      <Table miw={800} verticalSpacing="sm">
        <thead>
          <tr>
            <th style={styleForHeaderTitle}>Jenis Pembayaran</th>
            <th style={styleForHeaderTitle}>Nomor Transaksi</th>
            <th style={styleForHeaderTitle}>Jumlah Bayar</th>
            <th style={styleForHeaderTitle}>Status</th>
            <th style={styleForHeaderTitle}>Tindakan</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      {/* </ScrollArea> */}
      <Space h="xl" />
      <Grid>
        <Grid.Col span={2}>
          <Flex justify={'flex-start'}>
            {/* <AddTableButton
              title="Tambah Mahasiswa"
              onClick={() => console.log('test')}
            /> */}
            <Select
              placeholder="Total Per Page"
              value={rowPerPage}
              onChange={setRowPerPage}
              data={selectDataPerPage}
            />
          </Flex>
        </Grid.Col>
        <Grid.Col span={4} sx={{ display: 'flex', alignItems: 'center' }}>
          <Text
            truncate
          >{`Menampilkan ${startIndex} sampai ${endIndex} row dari ${total}`}</Text>
        </Grid.Col>
        <Grid.Col span={5} offset={1}>
          <Flex justify={'flex-end'}>
            {/* <SearchingField size="sm" /> */}
            <Pagination
              // total={total / Number(rowPerPage)}
              total={Math.ceil(total / Number(rowPerPage))}
              position="center"
              onChange={setPage}
              styles={() => ({
                control: {
                  '&[data-active]': {
                    backgroundColor: '#018B14',
                  },
                  '&[data-active]:not([data-disabled]):hover': {
                    backgroundColor: '#018B14',
                  },
                },
              })}
            />
          </Flex>
        </Grid.Col>
      </Grid>
    </>
  )
}
