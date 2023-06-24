import AdminLayout from '@/core/AdminLayout'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { CourseTableComponent } from '@/pages/academic/master-data/course/table/course.table'
import { getAllCoursePagination } from '@/features/academic/course/course.api'

export default function CourseListPage() {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(5)
  // queries
  const { data, isLoading, error } = useQuery({
    queryKey: [getAllCoursePagination.name, { page, limit }],
    queryFn: () => getAllCoursePagination({ page, limit }, false),
    refetchOnMount: true,
    keepPreviousData: false,
  })

  const onCurrentPageChange = (page: number) => {
    setPage(page)
  }
  return (
    <AdminLayout>
      <CourseTableComponent
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
