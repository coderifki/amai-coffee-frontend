import AdminLayout from '@/core/AdminLayout'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { FeeTableComponent } from '@/pages/academic/fee/table/fee.table'
import { getAllFeePagination } from '@/features/academic/fee/fee.api'

export default function FeeListPage() {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  // queries
  const { data, isLoading, error } = useQuery({
    queryKey: [getAllFeePagination.name, { page, limit }],
    queryFn: () => getAllFeePagination({ page, limit }, true),
    refetchOnMount: true,
    keepPreviousData: false,
  })

  const onCurrentPageChange = (page: number) => {
    setPage(page)
  }
  return (
    <AdminLayout>
      <FeeTableComponent
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
