import AdminLayout from '@core/AdminLayout'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import {
  CourseCreateRequest,
  courseCreate,
} from '../../../../features/academic/course/course.api'
import { CourseForm } from './form/course.form'

export default function CourseAdd() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleAddCourse = async (payload: CourseCreateRequest) => {
    if (payload) {
      try {
        setIsLoading(true)
        await courseCreate(payload)
        toast.success(`Course ${payload.course_name} created successfully!`, {
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
        defaultValues={null}
        onFormSubmit={(payload) => handleAddCourse(payload)}
        submitState={isLoading}
      />
    </AdminLayout>
  )
}
