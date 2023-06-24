import AdminLayout from '@/core/AdminLayout'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { CurriculumTableComponent } from './table/curriculum.table'
import { getAllCurriculumPagination } from '../../../../features/academic/curriculum/curriculum.api'

export default function CurriculumListPage() {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  // queries
  const { data, isLoading, error } = useQuery({
    queryKey: [getAllCurriculumPagination.name, { page, limit }],
    queryFn: () => getAllCurriculumPagination({ page, limit }, false),
    refetchOnMount: true,
    keepPreviousData: false,
  })

  const onCurrentPageChange = (page: number) => {
    setPage(page)
  }
  return (
    <AdminLayout>
      <CurriculumTableComponent
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
