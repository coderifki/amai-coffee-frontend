import AdminLayout from '@core/AdminLayout'
import CurriculumForm from './form/curriculum.form'
import {
  CurriculumCreateRequest,
  curriculumCreate,
} from '../../../../features/academic/curriculum/curriculum.api'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/router'

export default function CurriculumAdd() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleAddCurriculum = async (payload: CurriculumCreateRequest) => {
    if (payload) {
      try {
        setIsLoading(true)
        await curriculumCreate(payload)
        toast.success(
          `Curriculum ${payload.curriculum_name} created successfully!`,
          {
            position: 'bottom-center',
          }
        )
        await router.push('/academic/master-data/curriculum')
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
      <CurriculumForm
        defaultValues={null}
        onFormSubmit={(payload) => handleAddCurriculum(payload)}
        submitState={isLoading}
      />
    </AdminLayout>
  )
}
