import AdminLayout from '@/core/AdminLayout'
import SearchingField from '@/core/components/fields/SearchingField'
import HeaderAddEdit from '@/core/components/header/HeaderAddEdit'
import { getAllPaymentPagination } from '@/features/transaction-management/payment/payment.api'
import { TransactionTableComponent } from '@/pages/transaction-management/manage-transaction/table/transaction.table'
import { breadCrumbs } from '@/types/common'
import { Grid } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const breadCrumbs: breadCrumbs[] = [
  { title: 'Dashboard', value: 'dashboard', href: '/dashboard' },
  {
    title: 'Tabel Transaksi',
    value: 'table_transaction',
    href: '#',
  },
]
export default function TransactionListPage() {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(5)
  // queries
  const { data, isLoading, error } = useQuery({
    queryKey: [getAllPaymentPagination.name, { page, limit }],
    queryFn: () => getAllPaymentPagination({ page, limit }, false),
    refetchOnMount: true,
    keepPreviousData: false,
  })

  const onCurrentPageChange = (page: number) => {
    setPage(page)
  }
  // console.log({ data, isLoading, error })
  return (
    <AdminLayout>
      <HeaderAddEdit
        breadcrumbs={breadCrumbs}
        title={`Tabel Transaksi`}
        backUrl="/transaction-management/manage-transaction"
        activePage={`add`}
      />
      <Grid>
        <Grid.Col span={3}>
          <SearchingField size="sm" />
        </Grid.Col>
      </Grid>
      <TransactionTableComponent
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
