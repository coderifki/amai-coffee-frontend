import React from 'react'
import AdminLayout from '@/core/AdminLayout'
import ProductForm from '@/pages/product-management/product/add-form'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/router'
import { breadCrumbs } from '@/types/common'
import HeaderAddEdit from '@/core/components/header/HeaderAddEdit'
import { PaymentsTable } from '@/pages/transaction-management/manage-transaction/add-form'
import { PaymentMethodEntity } from '@/features/transaction-management/payment/payment.model'
import { createPayment } from '@/features/transaction-management/payment/payment.api'
import { dummyPaymentsTable } from '@/mock-data/table'
import ProductCard from '@/core/components/cards/ProductCard'
import { Grid } from '@mantine/core'
import PaymentCard from '@/core/components/cards/PaymentCard'

const breadCrumbs: breadCrumbs[] = [
  { title: 'Dashboard', value: 'dashboard', href: '/dashboard' },
  {
    title: 'Tabel Transaksi',
    value: 'table_transaction',
    href: '/transaction-management/manage-transaction',
  },
  {
    title: `Tambah Produk`,
    value: `add`,
    href: '#',
  },
]

export default function AddTransactionPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

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

  return (
    <AdminLayout>
      <Grid grow>
        <Grid.Col md={8} xs={12}>
          <Grid>
            <Grid.Col md={4}>
              <ProductCard
                image="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                desctiptions="Nasi Goreng Enak"
                price={12}
                title="Nasi Goreng"
              />
            </Grid.Col>
            <Grid.Col md={4}>
              <ProductCard
                image="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                desctiptions="Nasi Goreng Enak"
                price={12}
                title="Nasi Goreng"
              />
            </Grid.Col>
            <Grid.Col md={4}>
              <ProductCard
                image="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                desctiptions="Nasi Goreng Enak"
                price={12}
                title="Nasi Goreng"
              />
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col md={4} xs={12}>
          <PaymentCard />
        </Grid.Col>
      </Grid>

      {/* <HeaderAddEdit
        breadcrumbs={breadCrumbs}
        title={`Tabel Produk`}
        backUrl="/product-management/product"
        activePage={`add`}
      />
      <PaymentsTable data={dummyPaymentsTable} /> */}
    </AdminLayout>
  )
}
