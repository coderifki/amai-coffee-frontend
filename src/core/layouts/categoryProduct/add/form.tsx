import FormButtonTeacher from '@/core/layouts/teacher/add/ActionButton'
import DosenForm from '@/core/layouts/teacher/add/dosen-form'
import { ITeacherForm } from '@/core/layouts/teacher/teacher.model'

export default function FormInput() {
  const submitForm = (data: ITeacherForm) => {
    console.log({ data })
  }
  return (
    <div>
      <DosenForm onFormSubmit={submitForm}>
        <FormButtonTeacher />
      </DosenForm>
    </div>
  )
}
