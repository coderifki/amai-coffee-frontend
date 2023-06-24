import { Button, Card, Grid, Text, createStyles } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useEffect, useMemo } from 'react'
import TextField from '../../../../../core/form-fields/text-field'
import {
  CurriculumCreateRequest,
  CurriculumEditRequest,
} from '../../../../../features/academic/curriculum/curriculum.api'
import SelectField from '../../../../../core/form-fields/select-field'
import {
  CourseCreateRequest,
  CourseEditRequest,
} from '../../../../../features/academic/course/course.api'
import { CourseEntity } from '../../../../../features/academic/course/course.model'

export class CourseFormProps {
  submitState: boolean
  defaultValues: CourseEntity | null
  onFormSubmit: (values: CourseCreateRequest | CourseEditRequest) => void
}

const useStyles = createStyles(() => ({
  gridContainer: {
    margin: '10px 0 0 0',
    display: 'flex',
    justifyContent: 'center',
  },
  submitButton: {
    marginTop: '10px',
    backgroundColor: '#018B14 !important',
    border: 'none',
    color: '#fff',
  },
}))

export const CourseForm = ({
  submitState,
  defaultValues,
  onFormSubmit,
}: CourseFormProps) => {
  const SchoolList = [
    {
      label: 'Universitas Muhammadiyah Tangerang',
      value: '6456c7073ded35a70e486b2f',
    },
  ]
  const CourseTypeList = [
    {
      label: 'General',
      value: 'General',
    },
    {
      label: 'Specialization',
      value: 'Specialization',
    },
  ]

  const initialValues = useMemo(() => {
    let init: CourseEntity | null = {
      course_id: '',
      course_name: '',
      course_code: '',
      course_type: '',
      credits: 0,
      school_id: '',
    }
    if (defaultValues) {
      init = defaultValues
    }
    return init
  }, [defaultValues])

  const form = useForm({
    initialValues,
    validate: {
      course_name: (value) => (!value ? 'Course Name Must be Filled!' : null),
      course_code: (value) => (!value ? 'Course Code Must be Filled!' : null),
      course_type: (value) => (!value ? 'Course Type Must be Filled!' : null),
      credits: (value) => (!value ? 'Credits Must be Filled!' : null),
      school_id: (value) => (!value ? 'School Must be Filled!' : null),
    },
  })

  useEffect(() => {
    if (initialValues) {
      form.setFieldValue('course_name', initialValues.course_name)
      form.setFieldValue('course_code', initialValues.course_code)
      form.setFieldValue('course_type', initialValues.course_type)
      form.setFieldValue('credits', initialValues.credits)
      form.setFieldValue('school_id', initialValues.school_id)
    }
    // console.log({ initialValues })
  }, [initialValues])

  const { classes } = useStyles()

  if (!initialValues) return null

  return (
    <Card p={'xl'} mih={600}>
      <Card.Section p={'md'}>
        {/* for form */}
        <form
          onSubmit={form.onSubmit(
            (values: CourseCreateRequest | CourseEditRequest) => {
              onFormSubmit({
                ...values,
                course_id: initialValues.course_id,
              })
            }
          )}
        >
          <Grid>
            {/* Mulai section data mahasiswa */}
            <Grid.Col xs={12} md={12}>
              <Text fw={700} color={'#112D3C'} size={'md'}>
                Course Data
              </Text>
            </Grid.Col>
            <Grid.Col xs={12} md={6}>
              <TextField
                label="Course Name"
                placeholder="Bhs. Inggris, Kalkulus"
                required={true}
                {...form.getInputProps('course_name')}
              />
            </Grid.Col>
            <Grid.Col xs={12} md={6}>
              <TextField
                label="Course Code"
                placeholder="BING123, KALK222"
                required={true}
                {...form.getInputProps('course_code')}
              />
            </Grid.Col>

            <Grid.Col xs={12} md={6}>
              <SelectField
                label="Course Type"
                placeholder="Course Type"
                required={true}
                data={CourseTypeList}
                {...form.getInputProps('course_type')}
              />
            </Grid.Col>

            <Grid.Col xs={12} md={6}>
              <TextField
                label="Credits (SKS)"
                type="number"
                required={true}
                placeholder="Credits"
                {...form.getInputProps('credits')}
              />
            </Grid.Col>

            <Grid.Col xs={12} md={6}>
              <SelectField
                label="School"
                placeholder="School"
                required={true}
                data={SchoolList}
                {...form.getInputProps('school_id')}
              />
            </Grid.Col>

            <Button
              className={classes.submitButton}
              fullWidth
              type="submit"
              loading={submitState}
            >
              Save
            </Button>
          </Grid>
        </form>
      </Card.Section>
    </Card>
  )
}

export default CourseForm
