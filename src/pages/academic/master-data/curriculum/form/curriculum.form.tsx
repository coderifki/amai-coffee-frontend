import { Button, Card, Grid, Text, createStyles } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useEffect, useMemo } from 'react'
import TextField from '../../../../../core/form-fields/text-field'
import {
  CurriculumCreateRequest,
  CurriculumEditRequest,
} from '../../../../../features/academic/curriculum/curriculum.api'
import { CurriculumEntity } from '../../../../../features/academic/curriculum/curriculum.model'
import SelectField from '../../../../../core/form-fields/select-field'

export class CurriculumAddFormProps {
  submitState: boolean
  defaultValues: CurriculumEntity | null
  onFormSubmit: (
    values: CurriculumCreateRequest | CurriculumEditRequest
  ) => void
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

export const CurriculumForm = ({
  submitState,
  defaultValues,
  onFormSubmit,
}: CurriculumAddFormProps) => {
  const SchoolList = [
    {
      label: 'Universitas Muhammadiyah Tangerang',
      value: '6456c7073ded35a70e486b2f',
    },
  ]

  const initialValues = useMemo(() => {
    let init: CurriculumEntity | null = {
      curriculum_id: '',
      curriculum_name: '',
      curriculum_year: '',
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
      curriculum_name: (value) =>
        !value ? 'Curriculum Name Must be Filled!' : null,
      curriculum_year: (value) =>
        !value ? 'Curriculum Year Must be Filled!' : null,
      school_id: (value) => (!value ? 'School Must be Filled!' : null),
    },
  })

  useEffect(() => {
    if (initialValues) {
      form.setFieldValue('curriculum_name', initialValues.curriculum_name)
      form.setFieldValue('curriculum_year', initialValues.curriculum_year)
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
            (values: CurriculumCreateRequest | CurriculumEditRequest) => {
              onFormSubmit({
                ...values,
                curriculum_id: initialValues.curriculum_id,
              })
            }
          )}
        >
          <Grid>
            {/* Mulai section data mahasiswa */}
            <Grid.Col xs={12} md={12}>
              <Text fw={700} color={'#112D3C'} size={'md'}>
                Curriculum Data
              </Text>
            </Grid.Col>
            <Grid.Col xs={12} md={6}>
              <TextField
                label="Curriculum Name"
                placeholder="20212, 20213, 20202"
                required={true}
                {...form.getInputProps('curriculum_name')}
              />
            </Grid.Col>
            <Grid.Col xs={12} md={6}>
              <TextField
                label="Curriculum Year"
                placeholder="TA. 2021/2022, TA. 2021/2022, TA. 2020/2021"
                required={true}
                {...form.getInputProps('curriculum_year')}
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

export default CurriculumForm
