import { Button, Card, Grid, Text, createStyles } from '@mantine/core'
import { useForm } from '@mantine/form'
import dayjs from 'dayjs'
import { useEffect, useMemo, useState } from 'react'
import DateInputField from '../../../../../core/form-fields/date-field'
import SelectField from '../../../../../core/form-fields/select-field'
import TextField from '../../../../../core/form-fields/text-field'
import {
  PeriodCreateRequest,
  PeriodEditRequest,
} from '../../../../../features/academic/period/period.api'
import { PeriodEntity } from '../../../../../features/academic/period/period.model'
import { ActiveInactive } from '../../../../../mock-data/commons'

export class PeriodAddFormProps {
  submitState: boolean
  defaultValues: PeriodEntity | null
  onFormSubmit: (values: PeriodCreateRequest | PeriodEditRequest) => void
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

export const PeriodForm = ({
  submitState,
  defaultValues,
  onFormSubmit,
}: PeriodAddFormProps) => {
  const TermType = [
    {
      label: 'Even',
      value: 'EVEN',
    },
    {
      label: 'Odd',
      value: 'ODD',
    },
    {
      label: 'Short',
      value: 'SHORT',
    },
  ]

  const SchoolList = [
    {
      label: 'Universitas Muhammadiyah Tangerang',
      value: '6456c7073ded35a70e486b2f',
    },
  ]

  const initialValues = useMemo(() => {
    let init: PeriodEntity | null = {
      period_id: '',
      period_name: '',
      period_code: '',
      term_type: '',
      period_status: '',
      start_date: '',
      end_date: '',
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
      period_name: (value) => (!value ? 'Period Name Must be Filled!' : null),
      period_code: (value) => (!value ? 'Period Code Must be Filled!' : null),
      term_type: (value) => (!value ? 'Term Type Must be Filled!' : null),
      period_status: (value) =>
        !value ? 'Period Status Must be Filled!' : null,
      start_date: (value) => (!value ? 'Start Date Must be Filled!' : null),
      end_date: (value) => (!value ? 'End Date Must be Filled!' : null),
      school_id: (value) => (!value ? 'School Must be Filled!' : null),
    },
  })

  useEffect(() => {
    // console.log('test', initialValues.start_date)
    if (initialValues) {
      form.setFieldValue('period_name', initialValues.period_name)
      form.setFieldValue('period_code', initialValues.period_code)
      form.setFieldValue('term_type', initialValues.term_type)
      form.setFieldValue('period_status', initialValues.period_status)
      form.setFieldValue(
        'start_date',
        initialValues.start_date
          ? dayjs(initialValues.start_date).toDate()
          : new Date()
      )
      form.setFieldValue(
        'end_date',
        initialValues.end_date
          ? dayjs(initialValues.end_date).toDate()
          : new Date()
      )
      form.setFieldValue('school_id', initialValues.school_id)
    }
  }, [initialValues])

  const { classes } = useStyles()

  if (!initialValues) return null

  return (
    <Card p={'xl'} mih={600}>
      <Card.Section p={'md'}>
        {/* for form */}
        <form
          onSubmit={form.onSubmit(
            (values: PeriodCreateRequest | PeriodEditRequest) =>
              // onFormSubmit(values)
              onFormSubmit({
                ...values,
                period_id: initialValues.period_id,
              })
          )}
        >
          <Grid>
            {/* Mulai section data mahasiswa */}
            <Grid.Col xs={12} md={12}>
              <Text fw={700} color={'#112D3C'} size={'md'}>
                Period Data
              </Text>
            </Grid.Col>
            <Grid.Col xs={12} md={6}>
              <TextField
                label="Period Name"
                placeholder="20212, 20213, 20202"
                required={true}
                {...form.getInputProps('period_name')}
              />
            </Grid.Col>
            <Grid.Col xs={12} md={6}>
              <TextField
                label="Period Code"
                placeholder="TA. 2021/2022, TA. 2021/2022, TA. 2020/2021"
                required={true}
                {...form.getInputProps('period_code')}
              />
            </Grid.Col>
            <Grid.Col xs={12} md={6}>
              <DateInputField
                minDate={new Date()}
                maxDate={dayjs(new Date()).add(1, 'month').toDate()}
                label="Start Date"
                placeholder="Period Start Date"
                required={true}
                {...form.getInputProps('start_date')}
              />
            </Grid.Col>
            <Grid.Col xs={12} md={6}>
              <DateInputField
                label="End Date"
                placeholder="Period End Date"
                required={true}
                {...form.getInputProps('end_date')}
              />
              {/* <DateInput
                value={value}
                onChange={setValue}
                label="Date input"
                placeholder="Date input"
                maw={400}
                mx="auto"
              /> */}
            </Grid.Col>
            <Grid.Col xs={12} md={6}>
              <SelectField
                label="Term Type"
                placeholder="Please Select Term Type"
                required={true}
                data={TermType}
                {...form.getInputProps('term_type')}
              />
            </Grid.Col>
            <Grid.Col xs={12} md={6}>
              <SelectField
                label="Period Status"
                placeholder="Please Select Period Status"
                required={true}
                data={ActiveInactive}
                {...form.getInputProps('period_status')}
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

export default PeriodForm
