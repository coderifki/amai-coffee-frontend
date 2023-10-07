import TextField from '@/core/form-fields/text-field'
import {
  IAddForm,
  IFaculty,
  IFormProps,
} from '@/core/layouts/master-data/faculty/faculty'
import { UserEntity } from '@/features/auth/user/user.model'
import { Button, createStyles, Flex, Grid, Space, Text } from '@mantine/core'
import { useForm } from '@mantine/form'
import { getCookie } from 'cookies-next'
import React from 'react'

const useStyles = createStyles(() => ({
  gridContainer: {
    margin: '10px 0 0 0',
    display: 'flex',
    justifyContent: 'center',
  },
  nextButton: {
    backgroundColor: '#018B14 !important',
    border: 'none',
    color: '#fff',
  },
}))

export default function AddFacultyForm({
  onFormSubmit,
  defaultValues,
  isLoading,
}: IFormProps) {
  const { classes } = useStyles()
  const user = getCookie('user')?.toString()
  const parseJson: UserEntity = JSON.parse(user || '{}')
  const form = useForm({
    initialValues: {
      faculty_name: defaultValues?.faculty_name || '',
    },
    validate: {
      // informasi umum
      faculty_name: (value) => (value ? null : 'Fakultas harus diisi'),
    },
  })
  const handleSubmit = (data: IAddForm) => {
    // const schoolId = '6456c7073ded35a70e486b2f'
    // let createdBy = ''
    // if (parseJson && parseJson.username) {
    //   createdBy = parseJson.username
    // }
    const tmpValue: IFaculty = {
      // created_by: createdBy,
      // school_id: schoolId,
      faculty_name: data.faculty_name,
    }
    onFormSubmit(tmpValue)
  }
  React.useEffect(() => {
    // console.log('test', initialValues.start_date)
    if (defaultValues && defaultValues?.faculty_name) {
      form.setFieldValue('faculty_name', defaultValues?.faculty_name)
    }
  }, [defaultValues])
  return (
    <div>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Space h={'xl'} />
        <Grid>
          <Grid.Col xs={12} md={12}>
            <Text fw={700} color={'#112D3C'} size={'md'}>
              Tambah Fakultas
            </Text>
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <TextField
              label="Nama Fakultas"
              placeholder="Tulis nama Fakultas"
              required={true}
              {...form.getInputProps('faculty_name')}
            />
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col md={12} xs={12}>
            <Flex direction={'row'} gap={'md'} justify={'center'}>
              <Grid.Col md={4} xs={12}>
                <Button
                  className={classes.nextButton}
                  loading={isLoading}
                  fullWidth
                  type={'submit'}
                >
                  {'Submit'}
                </Button>
              </Grid.Col>
            </Flex>
          </Grid.Col>
        </Grid>
      </form>
    </div>
  )
}
