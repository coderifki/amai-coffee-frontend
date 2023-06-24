import HeaderAddEdit from '@/core/components/header/HeaderAddEdit'
import OverlayLoading from '@/core/components/overlay/loading-overlay'
import AddFacultyForm from '@/core/layouts/master-data/faculty/add-faculty-form'
import { IAddForm, IFaculty } from '@/core/layouts/master-data/faculty/faculty'
import FormInput from '@/core/layouts/student/add/Form'
import {
  createFaculty,
  updateFaculty,
} from '@/features/academic/faculty/faculty.api'
import { removeEmptyKey } from '@/utils/remove-empty-key'
import { Space } from '@mantine/core'
import { useRouter } from 'next/router'
import React from 'react'
import toast from 'react-hot-toast'

interface breadCrumbs {
  title: string
  value: string
  href: string
}

interface Props {
  defaultvalue?: IFaculty | undefined
}

export default function FacultyAdd({ defaultvalue = undefined }: Props) {
  // if (defaultvalue) console.log({ defaultvalue })
  const [isLoading, setIsLoading] = React.useState(false)
  const router = useRouter()
  const breadCrumbs: breadCrumbs[] = [
    { title: 'Dashboard', value: 'dashboard', href: '/dashboard' },
    {
      title: 'Tabel Fakultas',
      value: 'table_faculty',
      href: '/academic/master-data/faculty',
    },
    {
      title: `${defaultvalue ? 'Edit' : 'Tambah'} Fakultas`,
      value: `${defaultvalue ? 'edit' : 'add'}`,
      href: '#',
    },
  ]

  const onSubmit = async (data: IAddForm) => {
    // const datas = { ...data }
    const formParams = new URLSearchParams()
    // let formParams = new FormData()
    const payload = removeEmptyKey(data)
    const jsonData: any = {
      ...payload,
    }
    for (const key in jsonData) {
      formParams.append(key, jsonData[key])
    }
    if (!defaultvalue?.faculty_id) {
      try {
        setIsLoading(true)
        await createFaculty(formParams)
        toast.success(`Fakultas ${data.faculty_name} created successfully!`, {
          position: 'bottom-center',
        })
        await router.push('/academic/master-data/faculty')
      } catch (error: any) {
        toast.error(`${error.message}`, {
          position: 'bottom-center',
        })
        console.log({ error })
      } finally {
        setIsLoading(false)
      }
    } else {
      try {
        setIsLoading(true)
        await updateFaculty(formParams)
        toast.success(`Fakultas ${data.faculty_name} update successfully!`, {
          position: 'bottom-center',
        })
        await router.push('/academic/master-data/faculty')
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
    <div>
      <OverlayLoading isLoading={isLoading} />
      <HeaderAddEdit
        breadcrumbs={breadCrumbs}
        title={`${defaultvalue ? 'Edit' : 'Tambah'} Fakultas`}
        backUrl="/academic/master-data/faculty"
        activePage={`${defaultvalue ? 'edit' : 'add'}`}
      />
      <AddFacultyForm
        onFormSubmit={onSubmit}
        isLoading={isLoading}
        defaultValues={defaultvalue}
      />
    </div>
  )
}
