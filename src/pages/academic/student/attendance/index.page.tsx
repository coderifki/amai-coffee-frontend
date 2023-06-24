import AdminLayout from '@/core/AdminLayout'
import { StudentTableComponent } from '@/pages/academic/student/table/student.table'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllStudentPagination } from '@/features/academic/student/student.api'

export default function StudentAttendanceListPage() {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  // queries
  const { data, isLoading, error } = useQuery({
    queryKey: [getAllStudentPagination.name, { page, limit }],
    queryFn: () => getAllStudentPagination({ page, limit }),
    refetchOnMount: true,
    keepPreviousData: false,
  })

  const onCurrentPageChange = (page: number) => {
    setPage(page)
  }

  return (
    <AdminLayout>
      <StudentTableComponent
        isLoading={isLoading}
        data={data?.data || []}
        pageCount={data?.total_page || 0}
        pageSize={data?.per_page || 0}
        currentPage={page}
        onCurrentPageChange={onCurrentPageChange}
      />
    </AdminLayout>
  )
}
