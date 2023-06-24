import AdminLayout from '@/core/AdminLayout'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { CanteenTableComponent } from '@/pages/academic/canteen/table/canteen.table'
import { getAllCanteenPagination } from '@/features/academic/canteen/canteen.api'

export default function CanteenListPage() {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(10)
  // queries
  const { data, isLoading, error } = useQuery({
    queryKey: [getAllCanteenPagination.name, { page, limit }],
    queryFn: () => getAllCanteenPagination({ page, limit }, true),
    refetchOnMount: true,
    keepPreviousData: false,
  })

  const onCurrentPageChange = (page: number) => {
    setPage(page)
  }
  return (
    <AdminLayout>
      <CanteenTableComponent
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
