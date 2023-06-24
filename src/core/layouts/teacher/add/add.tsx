import HeaderAddEdit from '@/core/components/header/HeaderAddEdit'
import FormInput from '@/core/layouts/teacher/add/form'

interface breadCrumbs {
  title: string
  value: string
  href: string
}
export default function TeacherAdd() {
  const breadCrumbs: breadCrumbs[] = [
    { title: 'Dashboard', value: 'dashboard', href: '/dashboard' },
    {
      title: 'Tabel Dosen',
      value: 'table_dosne',
      href: '/academic/teacher',
    },
    { title: 'Tambah Dosen', value: 'add', href: '#' },
  ]
  return (
    <div>
      <HeaderAddEdit
        breadcrumbs={breadCrumbs}
        title="Tambah Dosen"
        backUrl="/academic/teacher"
        activePage="add"
      />
      <FormInput />
    </div>
  )
}
