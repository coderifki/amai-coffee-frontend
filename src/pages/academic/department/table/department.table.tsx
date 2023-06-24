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
import { DepartmentEntity } from '@/features/academic/department/department.model'

interface DepartmentTableProps {
  isLoading: boolean
  data: DepartmentEntity[]
  pageCount: number
  pageSize: number
  currentPage: number
  onCurrentPageChange: (page: number) => void
}

export const DepartmentTableComponent = ({
  isLoading,
  data,
  pageCount,
  pageSize,
  currentPage,
  onCurrentPageChange,
}: DepartmentTableProps) => {
  const columns = React.useMemo<ColumnDef<DepartmentEntity>[]>(
    () => [
      {
        accessorKey: 'department_id',
        header: 'ID',
      },
      {
        accessorKey: 'department_name',
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
        accessorKey: 'Department_id',
        header: 'Actions',
        cell: ({ getValue }) => {
          return (
            <Group spacing="xs" noWrap>
              <Link href={`/Departments/detail/${getValue()}`}>
                <Button variant="outline" size="sm" color="blue">
                  Show
                </Button>
              </Link>
              <Link href={`/Departments/edit/${getValue()}`}>
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

  const reactTable = useReactTable<DepartmentEntity>({
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
      <h1>Manage Department</h1>
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
