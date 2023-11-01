import AdminLayout from '@/core/AdminLayout'
import SearchingField from '@/core/components/fields/SearchingField'
import HeaderAddEdit from '@/core/components/header/HeaderAddEdit'
import { getAllProductPagination } from '@/features/product-management/product/prodcut.api'
import {
  createPayment,
  getAllPaymentPagination,
} from '@/features/transaction-management/payment/payment.api'
import { PaymentMethodEntity } from '@/features/transaction-management/payment/payment.model'
import { TransactionTableComponent } from '@/pages/transaction-management/transaction/table/transaction.table'
import { breadCrumbs } from '@/types/common'
import { Grid } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { type } from 'os'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

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
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState([])
  // queries
  const { data, error } = useQuery({
    queryKey: [getAllPaymentPagination.name, { page, limit }],
    queryFn: () => getAllPaymentPagination({ page, limit }, false),
    refetchOnMount: true,
    keepPreviousData: false,
  })

  // useEffect(() => {
  //   async function fetchProducts() {
  //     try {
  //       const response = await getAllProductPagination({
  //         page: 1, // Set the desired page
  //         limit: 10, // Set the desired limit
  //       })
  //       setProducts(response.data)
  //     } catch (error) {
  //       console.error('Error fetching products:', error.message)
  //     }
  //   }

  //   fetchProducts()
  // }, [])

  const handleSubmitForm = async (data: PaymentMethodEntity) => {
    setIsLoading(true)
    try {
      const res = await createPayment(data)
      if (res) {
        toast.success(`Produk ${data.payment_method_name} berhasil dibuat`, {
          position: 'bottom-center',
        })
        router.push('/product-management/product')
      }
    } catch (error: any) {
      console.log(`Error: ${error.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  const onCurrentPageChange = (page: number) => {
    setPage(page)
  }
  // console.log({ data, isLoading, error })
  return (
    <AdminLayout>
      <HeaderAddEdit
        breadcrumbs={breadCrumbs}
        title={`Tabel Transaksi`}
        backUrl="/transaction-management/transaction"
        activePage={`add`}
      />
      <Grid>
        <Grid.Col span={4}>
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
