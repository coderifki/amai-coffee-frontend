import AdminLayout from '@core/AdminLayout'
import { useRouter } from 'next/router'
import { toast } from 'react-hot-toast'
import {
  PeriodCreateRequest,
  periodCreate,
} from '../../../../features/academic/period/period.api'
import PeriodForm from './form/period.form'
import { useState } from 'react'

export default function PeriodAddPage() {
  const router = useRouter()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleAddPeriod = async (payload: PeriodCreateRequest) => {
    if (payload) {
      try {
        setIsLoading(true)
        await periodCreate(payload)
        toast.success(`Period ${payload.period_name} created successfully!`, {
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
        onFormSubmit={(returnedVal) => handleAddPeriod(returnedVal)}
        defaultValues={null}
        submitState={isLoading}
      />
    </AdminLayout>
  )
}
