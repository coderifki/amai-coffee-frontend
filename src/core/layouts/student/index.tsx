import { dummyDataTable as mahasiswaData } from '@/mock-data/table'
import { MahasiswaTable } from '../../components/table/MahasiswaTable'

export default function MahasiswaPage() {
  return (
    <div>
      <MahasiswaTable data={mahasiswaData} />
    </div>
  )
}
