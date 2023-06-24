import HeaderAddEdit from '@/core/components/header/HeaderAddEdit'
import DetailMahasiswa from '@/core/layouts/student/detail/student-detail'
import SummaryMahasiswa from '@/core/layouts/student/detail/summary'

interface breadCrumbs {
  title: string
  value: string
  href: string
}
export default function DetailMahasiswaPage() {
  const breadCrumbs: breadCrumbs[] = [
    { title: 'Dashboard', value: 'dashboard', href: '/dashboard' },
    {
      title: 'Tabel Mahasiswa',
      value: 'table_mahasiswa',
      href: '/academic/student',
    },
    { title: 'Detail Mahasiswa', value: 'profile', href: '#' },
  ]
  return (
    <>
      <HeaderAddEdit
        breadcrumbs={breadCrumbs}
        title="Detail Mahasiswa"
        backUrl="/academic/student"
        activePage="profile"
      />
      <SummaryMahasiswa />
      <DetailMahasiswa />
    </>
  )
}
