import AdminLayout from '@/core/AdminLayout'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { PeriodTableComponent } from '@/pages/academic/master-data/period/table/period.table'
import { getAllPeriodPagination } from '@/features/academic/period/period.api'

export default function PeriodListPage() {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  // queries
  const { data, isLoading, error } = useQuery({
    queryKey: [getAllPeriodPagination.name, { page, limit }],
    queryFn: () => getAllPeriodPagination({ page, limit }, false),
    refetchOnMount: true,
    keepPreviousData: false,
  })

  const onCurrentPageChange = (page: number) => {
    setPage(page)
  }
  return (
    <AdminLayout>
      <PeriodTableComponent
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
