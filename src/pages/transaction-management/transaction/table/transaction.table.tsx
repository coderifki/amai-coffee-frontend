import React, { useEffect, useState, useRef } from 'react'
import { jsPDF } from 'jspdf'
import * as XLSX from 'xlsx'
import {
  Button,
  Group,
  Loader,
  Pagination,
  Table as MantineTable,
  createStyles,
  rem,
} from '@mantine/core'
import {
  useReactTable,
  ColumnDef,
  flexRender,
  getCoreRowModel,
} from '@tanstack/react-table'
import Link from 'next/link'
import { format } from 'date-fns'
import { PaymentMethodEntity } from '@/features/transaction-management/payment/payment.model'
import { calculateRange } from '@/utils/calculateRange'

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
  const { classes } = useStyles()
  const tableRef = useRef<HTMLDivElement>(null)

  const [customLoading, setCustomLoading] = useState(isLoading)
  const [reactTableIndex, setReactTableIndex] = useState(currentPage)
  const [rowPerPage, setRowPerPage] = useState<string | null>('5')
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(100)

  useEffect(() => {
    setCustomLoading(isLoading)
  }, [isLoading])

  useEffect(() => {
    setReactTableIndex(currentPage - 1)
  }, [currentPage])

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
        cell: ({ getValue, row }) => {
          return (
            <Group spacing="xs" noWrap>
              <Link
                href={`/transaction-management/transaction/detail-transaction${getValue()}`}
              >
                <Button variant="outline" size="sm" color="blue">
                  Show
                </Button>
              </Link>
              <Button
                variant="outline"
                size="sm"
                color="red"
                onClick={() => handleExportPDF(row.original)}
              >
                Print Data
              </Button>
            </Group>
          )
        },
      },
    ],
    []
  )

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
    state: { pagination },
    columns: columns,
    manualPagination: true,
    debugTable: true,
  })

  // Function to handle exporting the PDF
  const handleExportPDF = (transaction: PaymentMethodEntity) => {
    const pdf = new jsPDF()

    pdf.setFontSize(16)
    pdf.text('Transaction Receipt', 20, 20)
    pdf.setFontSize(12)

    const leftColumnX = 20 // X-coordinate for the labels
    const rightColumnX = 120 // X-coordinate for the values

    pdf.text('ID Transaksi :', leftColumnX, 40)
    pdf.text(transaction.id, rightColumnX, 40, { align: 'right' })

    pdf.text('Metode Transaksi :', leftColumnX, 50)
    pdf.text(transaction.payment_method_name, rightColumnX, 50, {
      align: 'right',
    })

    pdf.text('Total Pembayaran :', leftColumnX, 60)
    pdf.text(transaction.total_transactions.toString(), rightColumnX, 60, {
      align: 'right',
    })

    pdf.text('Nama Pembeli :', leftColumnX, 70)
    pdf.text(transaction.name_customer, rightColumnX, 70, { align: 'right' })

    pdf.text('Created At:', leftColumnX, 80)
    pdf.text(
      format(new Date(transaction.created_at), 'dd/MM/yyyy'),
      rightColumnX,
      80,
      { align: 'right' }
    )

    // pdf.text('ID Cashier:', leftColumnX, 90)
    // pdf.text(transaction.cashier_id, rightColumnX, 90, { align: 'right' })
    pdf.save(`transaction-${transaction.id}.pdf`)
  }

  // Function to handle exporting to Excel
  const handleExportExcel = () => {
    // Prepare the data for Excel
    const exportData = data.map((item) => ({
      'ID Transaksi': item.id,
      'Metode Transaksi': item.payment_method_name,
      'Total Transaksi': item.total_transactions,
      'Nama Pembeli': item.name_customer,
      'ID Cashier': item.cashier_id,
      'Created At': format(new Date(item.created_at), 'dd/MM/yyyy'),
    }))

    // Create a new workbook and add the data
    const workbook = XLSX.utils.book_new()
    const worksheet = XLSX.utils.json_to_sheet(exportData)
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Transactions')

    // Save the workbook as an Excel file
    XLSX.writeFile(workbook, 'transactions.xlsx')
  }

  return (
    <div>
      <h1>Manage Transaction</h1>
      <div className="flex justify-end">
        <Group position="apart" mb="lg">
          <Button variant="outline" color="green" onClick={handleExportExcel}>
            Recap to Excel
          </Button>
        </Group>
      </div>
      {customLoading ? (
        <Loader />
      ) : (
        <div ref={tableRef} className={'overflow-x-auto'}>
          <MantineTable className={'table-auto'}>
            <thead>
              {reactTable.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
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
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {reactTable.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </MantineTable>
          <Pagination
            total={pageCount}
            onChange={(page) => {
              const index = page - 1
              reactTable.setPageIndex(index)
              onCurrentPageChange(page)
            }}
            onPreviousPage={() => reactTable.previousPage()}
            onNextPage={() => reactTable.nextPage()}
            onFirstPage={() => reactTable.setPageIndex(0)}
            onLastPage={() =>
              reactTable.setPageIndex(reactTable.getPageCount() - 1)
            }
            value={reactTable.getState().pagination.pageIndex + 1}
          />
        </div>
      )}
    </div>
  )
}
