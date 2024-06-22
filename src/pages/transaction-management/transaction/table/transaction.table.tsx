import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import {
  Button,
  Group,
  Loader,
  Pagination,
  Table as MantineTable,
  Modal,
  createStyles,
  rem,
  Grid,
  Flex,
} from '@mantine/core'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { formatNumberIndoCurrency } from '@/utils/formatNumberIndoCurrency'
import { useDisclosure, useMediaQuery } from '@mantine/hooks'
import { PaymentMethodEntity } from '@/features/transaction-management/payment/payment.model'
import { format } from 'date-fns'
import { useRouter } from 'next/router'
import { calculateRange } from '@/utils/calculateRange'
import SearchingField from '@/core/components/fields/SearchingField'

interface PaymentTableProps {
  isLoading: boolean
  data: PaymentMethodEntity[]
  pageCount: number
  pageSize: number
  currentPage: number
  onCurrentPageChange: (page: number) => void
}

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

export const TransactionTableComponent = ({
  isLoading,
  data,
  pageCount,
  pageSize,
  currentPage,
  onCurrentPageChange,
}: PaymentTableProps) => {
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

  const columns = React.useMemo<ColumnDef<PaymentMethodEntity>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID Transaksi',
      },
      {
        accessorKey: 'payment_method_name',
        header: 'Metode Transaksi',
      },
      {
        accessorKey: 'total_transactions',
        header: 'Total Transaksi',
      },
      {
        accessorKey: 'name_customer',
        header: 'Nama Pembeli',
      },
      {
        accessorKey: 'cashier_id',
        header: 'Id Cashier',
      },
      // {
      //   accessorKey: 'price',
      //   header: 'Harga',
      //   cell: ({ getValue }) => {
      //     return (
      //       <div>{`${formatNumberIndoCurrency(Number(getValue() || 0))}`}</div>
      //     )
      //   },
      // },

      {
        accessorKey: 'created_at',
        header: 'Created At',
        cell: ({ getValue }) => {
          const date = getValue() as string // assuming `created_at` is a string
          return <div>{format(new Date(date), 'dd/MM/yyyy')}</div>
        },
      },

      {
        id: 'actions',
        accessorKey: 'id',
        header: 'Actions',
        cell: ({ getValue }) => {
          return (
            <>
              <Group spacing="xs" noWrap>
                <Link
                  href={`/transaction-managaement/transaction/detail-transaction${getValue()}`}
                >
                  <Button variant="outline" size="sm" color="blue">
                    Show
                  </Button>
                </Link>
                {/* <Link
                  href={`/transaction-managaement/transaction/detail-transaction${getValue()}`}
                > */}
                <Button variant="outline" size="sm" color="red">
                  Print Data
                </Button>
                {/* </Link> */}

                {/* <Link href={`/academic/master-data/course/${getValue()}/edit`}>
                  <Button variant="outline" size="sm" color="yellow">
                    Edit
                  </Button>
                </Link> */}

                {/* <Button variant="outline" size="sm" color="red">
                  Delete
                </Button> */}
                {/* <Grid.Col span={5} offset={1}>
                  <Flex justify={'flex-end'}>
                    <SearchingField size="sm" />
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
                </Grid.Col> */}
              </Group>
            </>
          )
        },
      },
    ],
    []
  )

  const [customLoading, setCustomLoading] = React.useState(isLoading)

  useEffect(() => {
    setCustomLoading(isLoading)
  }, [isLoading])

  const [reactTableIndex, setReactTableIndex] = React.useState(currentPage)

  useEffect(() => {
    setReactTableIndex(currentPage - 1)
  }, [currentPage])

  const pagination = React.useMemo(
    () => ({
      pageIndex: reactTableIndex,
      pageSize,
    }),
    [reactTableIndex, pageSize]
  )

  const reactTable = useReactTable<PaymentMethodEntity>({
    data: data,
    getCoreRowModel: getCoreRowModel(),
    // onStateChange(updater: Updater<TableState>): void {},
    renderFallbackValue: undefined,
    state: {
      pagination,
    },
    columns: columns,
    manualPagination: true,
    debugTable: true,
  })

  return (
    <div>
      <h1>Manage Transaction</h1>
      {customLoading ? (
        <Loader />
      ) : (
        <div className={'overflow-x-auto'}>
          <MantineTable className={'table-auto'}>
            <thead>
              {reactTable?.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <th key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder ? null : (
                          <div>
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </div>
                        )}
                      </th>
                    )
                  })}
                </tr>
              ))}
            </thead>
            <tbody>
              {reactTable?.getRowModel().rows.map((row) => {
                return (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </MantineTable>
          <Pagination
            total={pageCount}
            onChange={(page) => {
              const index = page - 1
              // console.log('page', page)
              reactTable.setPageIndex(index)

              onCurrentPageChange(page)
            }}
            onPreviousPage={() => {
              reactTable.previousPage()
            }}
            onNextPage={() => {
              reactTable.nextPage()
            }}
            onFirstPage={() => {
              reactTable.setPageIndex(0)
            }}
            onLastPage={() => {
              reactTable.setPageIndex(reactTable.getPageCount() - 1)
            }}
            value={reactTable.getState().pagination.pageIndex + 1}
            // page={currentPage}

            // onChange={setCurrent}
          />
        </div>
      )}
    </div>
  )
}
