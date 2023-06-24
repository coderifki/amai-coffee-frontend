import OverlayLoading from '@/core/components/overlay/loading-overlay'
import FacultyAdd from '@/core/layouts/master-data/faculty/Add'
import { IFaculty } from '@/core/layouts/master-data/faculty/faculty'
import { getAllFacultyById } from '@/features/academic/faculty/faculty.api'
import AdminLayout from '@core/AdminLayout'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import React from 'react'
import toast from 'react-hot-toast'

export default function FacultyAddPage() {
  const router = useRouter()
  const id = router.query.id as string
  const [editValue, setEditValue] = React.useState<IFaculty>()
  const { data, isLoading, error } = useQuery({
    queryKey: [getAllFacultyById.name, { id }],
    queryFn: () => getAllFacultyById({ id }),
    refetchOnMount: true,
    keepPreviousData: false,
  })

  const fetchPeriod = React.useCallback(async () => {
    if (id) {
      try {
        const res = await getAllFacultyById({ id })
        if (res && res.data) {
          setEditValue({
            created_by: res.data.created_by,
            faculty_name: res.data.faculty_name,
            school_id: res.data.school_id,
            faculty_id: res.data?.faculty_id,
          })
        }
      } catch (error: any) {
        toast.error(`${error.message}`)
      }
    }
  }, [id])

  React.useEffect(() => {
    fetchPeriod()
  }, [fetchPeriod])

  return (
    <AdminLayout>
      <OverlayLoading isLoading={isLoading} />
      {data && <FacultyAdd defaultvalue={editValue} />}
      {/* test masuk edit fakultas */}
    </AdminLayout>
  )
}
