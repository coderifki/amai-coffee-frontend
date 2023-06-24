import AdminLayout from '@core/AdminLayout'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import {
  CourseEditRequest,
  courseEdit,
  getCourseById,
} from '../../../../../features/academic/course/course.api'
import { CourseEntity } from '../../../../../features/academic/course/course.model'
import { CourseForm } from '../form/course.form'

export default function PeriodEditPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [courseData, setCourseData] = useState<CourseEntity | null>(null)
  const currriculumId = (router.query.id as string) || '0'

  const fetchPeriod = useCallback(
    async (id: string) => {
      if (currriculumId !== '0') {
        try {
          const res = await getCourseById(id)
          setCourseData(res)
        } catch (error: any) {
          toast.error(`${error.message}`)
        }
      }
    },
    [currriculumId]
  )

  useEffect(() => {
    if (currriculumId !== '0') {
      fetchPeriod(currriculumId)
    }
  }, [currriculumId])

  const handleEditCurriculum = async (payload: CourseEditRequest) => {
    console.log({ payload })
    if (payload) {
      try {
        setIsLoading(true)
        await courseEdit(payload)
        toast.success(`Course ${payload.course_name} edited successfully!`, {
          position: 'bottom-center',
        })
        await router.push('/academic/master-data/course')
      } catch (error: any) {
        toast.error(`${error.message}`, {
          position: 'bottom-center',
        })
        console.log({ error })
      } finally {
        setIsLoading(false)
      }
    }
  }

  return (
    <AdminLayout>
      <CourseForm
        onFormSubmit={(returnedVal) => {
          if ((returnedVal as CourseEditRequest).course_id !== '') {
            handleEditCurriculum(returnedVal as CourseEditRequest)
          }
        }}
        defaultValues={courseData}
        submitState={isLoading}
      />
    </AdminLayout>
  )
}
