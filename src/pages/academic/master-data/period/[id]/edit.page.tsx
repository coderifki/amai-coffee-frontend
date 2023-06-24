import AdminLayout from '@core/AdminLayout'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import {
  PeriodEditRequest,
  getPeriodById,
  periodEdit,
} from '../../../../../features/academic/period/period.api'
import { PeriodEntity } from '../../../../../features/academic/period/period.model'
import PeriodForm from '../form/period.form'

export default function PeriodEditPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [periodData, setPeriodData] = useState<PeriodEntity | null>(null)
  // console.log({ periodData })
  const periodId = (router.query.id as string) || '0'

  const fetchPeriod = useCallback(
    async (id: string) => {
      if (periodId !== '0') {
        try {
          const res = await getPeriodById(id)
          setPeriodData(res)
        } catch (error: any) {
          // console.log(error)
          toast.error(`${error.message}`)
        }
      }
    },
    [periodId]
  )

  useEffect(() => {
    if (periodId !== '0') {
      fetchPeriod(periodId)
    }
  }, [periodId])

  const handleEditPeriod = async (payload: PeriodEditRequest) => {
    if (payload) {
      try {
        setIsLoading(true)
        await periodEdit(payload)
        toast.success(`Period ${payload.period_name} edited successfully!`, {
          position: 'bottom-center',
        })
        await router.push('/academic/master-data/period')
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
      <PeriodForm
        onFormSubmit={(returnedVal) => {
          if ((returnedVal as PeriodEditRequest).period_id !== '') {
            handleEditPeriod(returnedVal as PeriodEditRequest)
          }
        }}
        defaultValues={periodData}
        submitState={isLoading}
      />
    </AdminLayout>
  )
}
