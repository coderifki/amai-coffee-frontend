import AdminLayout from '@/core/AdminLayout'
import DetailTransactionPage from '@/core/layouts/payment/detail'
import { useRouter } from 'next/router'

export default function TransactionDetail() {
  const router = useRouter()
  // console.log('router.query', router.query)
  return (
    <AdminLayout>
      <DetailTransactionPage />
    </AdminLayout>
  )
}
