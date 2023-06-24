import AdminLayout from '@/core/AdminLayout'
import { TableSelection } from '@/core/components/table/Example'
import { dummyDataTable } from '@/mock-data/table'

export default function ExampleTable() {
  return (
    <AdminLayout>
      <TableSelection data={dummyDataTable} />
    </AdminLayout>
  )
}
