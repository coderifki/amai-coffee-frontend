import FormButtonStudent from '@/core/layouts/student/add/ActionButton'
import DetailInputMahasiswa from '@/core/layouts/student/add/detail-submit-form'
import InformationForm from '@/core/layouts/student/add/InformationForm'
import StudentForm from '@/core/layouts/student/add/StudentForn'
import {
  IInformationForm,
  IParentsForm,
  IStudents,
  IStudentsForm,
} from '@/core/layouts/student/student.model'
import { createStyles, Space, Stepper } from '@mantine/core'
import { useState } from 'react'
import ParentsForm from './ParentsForm'

const useStyles = createStyles(() => ({
  stepper: {
    '& .mantine-Stepper-stepIcon[data-progress]': {
      borderColor: '#018B14',
    },
    '& .mantine-Stepper-stepIcon[data-completed]': {
      backgroundColor: '#018B14',
      borderColor: '#018B14',
    },
  },
  stepperMain: {
    '& .mantine-Stepper-separatorActive': {
      backgroundColor: '#018B14',
    },
  },
}))

export default function FormInput() {
  const totalSteps = 3
  const [active, setActive] = useState<number>(0)
  const [values, setValues] = useState<IStudents>()
  const nextStep = () =>
    setActive((current) => (current < totalSteps ? current + 1 : current))
  const prevStep = () => {
    setActive((current) => (current > 0 ? current - 1 : current))
  }

  const { classes } = useStyles()
  const submitForm1 = (data: IStudentsForm) => {
    // console.log({ data })
    setValues((form1) => {
      return {
        ...form1,
        form1: data,
      }
    })
    nextStep()
  }
  const submitForm2 = (data: IInformationForm) => {
    // console.log({ data })
    setValues((formValue) => {
      return {
        ...formValue,
        form2: data,
      }
    })
    nextStep()
  }
  const submitForm3 = (data: IParentsForm) => {
    // console.log({ data })
    setValues((formValue) => {
      return {
        ...formValue,
        form3: data,
      }
    })
    nextStep()
  }
  return (
    <div>
      <Stepper
        className={classes.stepperMain}
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
        allowNextStepsSelect={false}
      >
        <Stepper.Step className={classes.stepper} label="Data mahasiswa">
          <StudentForm defaultValues={values?.form1} onFormSubmit={submitForm1}>
            <FormButtonStudent
              onBack={prevStep}
              currentStep={active}
              totalSteps={totalSteps}
            />
          </StudentForm>
        </Stepper.Step>
        <Stepper.Step className={classes.stepper} label="Informasi Umum">
          <InformationForm
            defaultValues={values?.form2}
            onFormSubmit={submitForm2}
          >
            <FormButtonStudent
              onBack={prevStep}
              currentStep={active}
              totalSteps={totalSteps}
            />
          </InformationForm>
        </Stepper.Step>
        <Stepper.Step className={classes.stepper} label="Orang Tua & Wali">
          <ParentsForm onFormSubmit={submitForm3} defaultValues={values?.form3}>
            <FormButtonStudent
              onBack={prevStep}
              currentStep={active}
              totalSteps={totalSteps}
            />
          </ParentsForm>
        </Stepper.Step>
        <Stepper.Completed>
          <Space h={'xl'} />
          <DetailInputMahasiswa inputData={values} />
          <FormButtonStudent
            onBack={prevStep}
            currentStep={active}
            totalSteps={totalSteps}
          />
        </Stepper.Completed>
      </Stepper>
    </div>
  )
}
