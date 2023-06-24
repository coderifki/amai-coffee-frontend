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
} from '@mantine/core'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { HolidayEntity } from '@/features/academic/holiday/holiday.model'

interface HolidayTableProps {
  isLoading: boolean
  data: HolidayEntity[]
  pageCount: number
  pageSize: number
  currentPage: number
  onCurrentPageChange: (page: number) => void
}

export const HolidayTableComponent = ({
  isLoading,
  data,
  pageCount,
  pageSize,
  currentPage,
  onCurrentPageChange,
}: HolidayTableProps) => {
  const columns = React.useMemo<ColumnDef<HolidayEntity>[]>(
    () => [
      {
        accessorKey: 'holiday_id',
        header: 'ID',
      },
      {
        accessorKey: 'holiday_name',
        header: 'Name',
      },
      // {
      //   accessorKey: 'user_id',
      //   header: 'User',
      //   cell: ({ row }) => {
      //     return (
      //       <Group spacing="xs" noWrap>
      //         <Link
      //           href={`/users/detail/${row.original?.user?.user_id}`}
      //           className={'btn btn-link'}
      //           passHref={true}
      //         >
      //           <Anchor>{row.original?.user?.email}</Anchor>
      //         </Link>
      //       </Group>
      //     )
      //   },
      // },
      {
        id: 'actions',
        accessorKey: 'Holiday_id',
        header: 'Actions',
        cell: ({ getValue }) => {
          return (
            <Group spacing="xs" noWrap>
              <Link href={`/Holidays/detail/${getValue()}`}>
                <Button variant="outline" size="sm" color="blue">
                  Show
                </Button>
              </Link>
              <Link href={`/Holidays/edit/${getValue()}`}>
                <Button variant="outline" size="sm" color="yellow">
                  Edit
                </Button>
              </Link>
              <Button variant="outline" size="sm" color="red">
                Delete
              </Button>
              {/*<ShowButton hideText recordItemId={getValue() as string} />*/}
              {/*<EditButton hideText recordItemId={getValue() as string} />*/}
              {/*<DeleteButton hideText recordItemId={getValue() as string} />*/}
            </Group>
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

  const reactTable = useReactTable<HolidayEntity>({
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
      <h1>Manage Holiday</h1>
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
          />
        </div>
      )}
    </div>
  )
}
