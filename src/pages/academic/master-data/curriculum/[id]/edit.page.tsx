import AdminLayout from '@core/AdminLayout'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { CurriculumEntity } from '../../../../../features/academic/curriculum/curriculum.model'
import {
  PeriodEditRequest,
  getPeriodById,
  periodEdit,
} from '../../../../../features/academic/period/period.api'
import {
  CurriculumEditRequest,
  curriculumEdit,
  getCurriculumById,
} from '../../../../../features/academic/curriculum/curriculum.api'
import CurriculumForm from '../form/curriculum.form'

export default function PeriodEditPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [curriculumData, setCurriculumData] = useState<CurriculumEntity | null>(
    null
  )
  const currriculumId = (router.query.id as string) || '0'

  const fetchPeriod = useCallback(
    async (id: string) => {
      if (currriculumId !== '0') {
        try {
          const res = await getCurriculumById(id)
          setCurriculumData(res)
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

  const handleEditCurriculum = async (payload: CurriculumEditRequest) => {
    console.log({ payload })
    if (payload) {
      try {
        setIsLoading(true)
        await curriculumEdit(payload)
        toast.success(
          `Curriculum ${payload.curriculum_name} edited successfully!`,
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
        onFormSubmit={(returnedVal) => {
          if ((returnedVal as CurriculumEditRequest).curriculum_id !== '') {
            handleEditCurriculum(returnedVal as CurriculumEditRequest)
          }
        }}
        defaultValues={curriculumData}
        submitState={isLoading}
      />
    </AdminLayout>
  )
}
