import HeaderAddEdit from '@/core/components/header/HeaderAddEdit'
import SummaryDosen from '@/core/layouts/teacher/detail/summary'
import DetailDosen from '@/core/layouts/teacher/detail/teacher-detail'

interface breadCrumbs {
  title: string
  value: string
  href: string
}
export default function DetailDosenPage() {
  const breadCrumbs: breadCrumbs[] = [
    { title: 'Dashboard', value: 'dashboard', href: '/dashboard' },
    {
      title: 'Tabel Dosen',
      value: 'table_dosen',
      href: '/academic/teacher',
    },
    { title: 'Detail Dosen', value: 'profile', href: '#' },
  ]
  return (
    <>
      <HeaderAddEdit
        breadcrumbs={breadCrumbs}
        title="Detail Dosen"
        backUrl="/academic/teacher"
        activePage="profile"
      />
      <SummaryDosen />
      <DetailDosen />
    </>
  )
}
