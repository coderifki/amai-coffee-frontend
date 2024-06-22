import HeaderAddEdit from '@/core/components/header/HeaderAddEdit'
import DetailTransaction from '@/core/layouts/payment/detail/transaction-detail'

interface breadCrumbs {
  title: string
  value: string
  href: string
}
export default function DetailTransactionPage() {
  const breadCrumbs: breadCrumbs[] = [
    { title: 'Dashboard', value: 'dashboard', href: '/dashboard' },
    {
      title: 'Detail Transaction',
      value: 'detail-transaction',
      href: '/transaction-managaement/transaction',
    },
    { title: 'Detail Transaction', value: 'detail-transaction', href: '#' },
  ]
  return (
    <>
      <HeaderAddEdit
        breadcrumbs={breadCrumbs}
        title="Detail Transaction"
        backUrl="/transaction-managaement/transaction"
        activePage="detail-transaction"
      />
      <DetailTransaction />
    </>
  )
}
