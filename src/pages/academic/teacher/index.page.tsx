import AdminLayout from '@/core/AdminLayout'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllTeacherPagination } from '@/features/academic/teacher/teacher.api'
import { TeacherTableComponent } from '@/pages/academic/teacher/components/table/teacher.table'
import { BaseTable } from '@/core/components/table/base-table/base-table'

const TABLE_HEADER = ['Nama', 'NIDN', 'Gelar', 'Bidang Keahlian']

export default function TeacherListPage() {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [searchName, setSearchName] = useState('')
  // queries
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [getAllTeacherPagination.name, { page, limit }],
    queryFn: () => getAllTeacherPagination({ page, limit }, true),
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
  // console.log({ data })
  return (
    <AdminLayout>
      {/* <TeacherTableComponent
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
            id: item.user_id,
            name: item.teacher_name || 'no name',
            email: 'no email',
            nidn: 'no nidn',
            title: 'no title',
            areas_of_expertise: 'none',
            avatar:
              'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
          })) || []
        }
        BaseTableActionType={['detail', 'edit']}
        isLoading={isLoading}
        headerTable={TABLE_HEADER}
        page={page}
        limit={limit}
        total={data?.total || 0}
        type={'teacher'}
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
