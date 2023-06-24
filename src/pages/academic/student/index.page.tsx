import AdminLayout from '@/core/AdminLayout'
import { BaseTable } from '@/core/components/table/base-table/base-table'
import { getAllStudentPagination } from '@/features/academic/student/student.api'
import { useQuery } from '@tanstack/react-query'
import moment from 'moment'
import { useState } from 'react'

const TABLE_HEADER = ['Name', 'NIM', 'NIK', 'Mulai Semester']

export default function StudentListPage() {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  const [searchName, setSearchName] = useState('')

  // queries
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [getAllStudentPagination.name, { page, limit }],
    queryFn: () => getAllStudentPagination({ page, limit }, false),
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
    // console.log({ searchName })
    setSearchName(searchName)
  }
  return (
    <AdminLayout>
      {/* <StudentTableComponent
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
            name: item.student_name || 'no name',
            email: item.student_email || 'no email',
            nim: 'no nim',
            nik: 'no nik',
            start_semester: moment(new Date('2022-01-01')).format('LL'),
            avatar:
              'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
          })) || []
        }
        BaseTableActionType={['detail', 'edit', 'view_result']}
        isLoading={isLoading}
        headerTable={TABLE_HEADER}
        page={page}
        limit={limit}
        total={data?.total || 0}
        type={'student'}
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
