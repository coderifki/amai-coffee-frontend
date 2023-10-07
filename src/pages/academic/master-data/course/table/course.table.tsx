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
import { CourseEntity } from '@/features/academic/course/course.model'

interface CourseTableProps {
  isLoading: boolean
  data: CourseEntity[]
  pageCount: number
  pageSize: number
  currentPage: number
  onCurrentPageChange: (page: number) => void
}

export const CourseTableComponent = ({
  isLoading,
  data,
  pageCount,
  pageSize,
  currentPage,
  onCurrentPageChange,
}: CourseTableProps) => {
  const columns = React.useMemo<ColumnDef<CourseEntity>[]>(
    () => [
      {
        accessorKey: 'course_id',
        header: 'ID',
      },
      {
        accessorKey: 'course_name',
        header: 'Name',
      },
      {
        accessorKey: 'course_code',
        header: 'Code',
      },
      {
        accessorKey: 'course_type',
        header: 'Type',
      },
      {
        id: 'actions',
        accessorKey: 'course_id',
        header: 'Actions',
        cell: ({ getValue }) => {
          return (
            <Group spacing="xs" noWrap>
              <Link href={`/Courses/detail/${getValue()}`}>
                <Button variant="outline" size="sm" color="blue">
                  Show
                </Button>
              </Link>
              <Link href={`/academic/master-data/course/${getValue()}/edit`}>
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

  const reactTable = useReactTable<CourseEntity>({
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
      <h1>Manage Course</h1>
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
