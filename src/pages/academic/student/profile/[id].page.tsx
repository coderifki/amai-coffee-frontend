import AdminLayout from '@/core/AdminLayout'
import DetailMahasiswaPage from '@/core/layouts/student/detail'
import { useRouter } from 'next/router'

export default function MahasiswaDetail() {
  const router = useRouter()
  // console.log('router.query', router.query)
  return (
    <AdminLayout>
      <DetailMahasiswaPage />
    </AdminLayout>
  )
}
