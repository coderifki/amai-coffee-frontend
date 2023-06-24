import AdminLayout from '@/core/AdminLayout'
import DetailDosenPage from '@/core/layouts/teacher/detail'
import { useRouter } from 'next/router'

export default function MahasiswaDetail() {
  const router = useRouter()
  // console.log('router.query', router.query)
  return (
    <AdminLayout>
      <DetailDosenPage />
    </AdminLayout>
  )
}
