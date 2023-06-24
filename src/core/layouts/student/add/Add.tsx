import HeaderAddEdit from '@/core/components/header/HeaderAddEdit'
import FormInput from '@/core/layouts/student/add/Form'

interface breadCrumbs {
  title: string
  value: string
  href: string
}

export default function StudentAdd() {
  const breadCrumbs: breadCrumbs[] = [
    { title: 'Dashboard', value: 'dashboard', href: '/dashboard' },
    {
      title: 'Tabel Mahasiswa',
      value: 'table_mahasiswa',
      href: '/academic/student',
    },
    { title: 'Tambah Mahasiswa', value: 'add', href: '#' },
  ]
  return (
    <div>
      <HeaderAddEdit
        breadcrumbs={breadCrumbs}
        title="Tambah Mahasiswa"
        backUrl="/academic/student"
        activePage="add"
      />
      <FormInput />
    </div>
  )
}
