import AdminLayout from '@/core/AdminLayout'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { FacultyTableComponent } from '@/pages/academic/master-data/faculty/table/faculty.table'
import { getAllFacultyPagination } from '@/features/academic/faculty/faculty.api'
import { BaseTable } from '@/core/components/table/base-table/base-table'
import { Button } from '@mantine/core'

const TABLE_HEADER = ['ID', 'NAME']

export default function FacultyListPage() {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [searchName, setSearchName] = useState('')
  // queries
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [
      getAllFacultyPagination.name,
      { page, limit, filter: searchName },
    ],
    queryFn: () =>
      getAllFacultyPagination({ page, limit, filter: searchName }, false),
    refetchOnMount: true,
    keepPreviousData: false,
  })

  const onCurrentPageChange = (page: number) => {
    setPage(page)
  }
  const onCurrentLimitChange = (limit: number) => {
    setLimit(limit)
  }
  const onSearchNameChange = (searchName: string) => {
    setSearchName(searchName)
  }
  return (
    <AdminLayout>
      {/* <FacultyTableComponent
        isLoading={isLoading}
        data={data?.data || []}
        pageCount={data?.total_page || 0}
        pageSize={data?.per_page || 0}
        currentPage={page}
        onCurrentPageChange={onCurrentPageChange}
      /> */}
      <BaseTable
        data={
          data?.data?.map((item) => ({
            id: item.faculty_id,
            name: item.faculty_name,
          })) || []
        }
        BaseTableActionType={['edit', 'delete']}
        type={'faculty'}
        isLoading={isLoading}
        headerTable={TABLE_HEADER}
        page={page}
        limit={limit}
        total={data?.total || 0}
        onLimitChange={onCurrentLimitChange}
        onPageChange={onCurrentPageChange}
        onSearchingChange={onSearchNameChange}
        refech={() => {
          // console.log('refresh')
          refetch()
        }}
      />
    </AdminLayout>
  )
}
