import AdminLayout from '@/core/AdminLayout'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { HolidayTableComponent } from '@/pages/academic/holiday/table/holiday.table'
import { getAllHolidayPagination } from '@/features/academic/holiday/holiday.api'

export default function HolidayListPage() {
  const [page, setPage] = useState(1)
  const [limit] = useState(10)
  // queries
  const { data, isLoading, error } = useQuery({
    queryKey: [getAllHolidayPagination.name, { page, limit }],
    queryFn: () => getAllHolidayPagination({ page, limit }, true),
    refetchOnMount: true,
    keepPreviousData: false,
  })

  const onCurrentPageChange = (page: number) => {
    setPage(page)
  }
  return (
    <AdminLayout>
      <HolidayTableComponent
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
