import DateInputField from '@/core/form-fields/date-field'
import InputField from '@/core/form-fields/input-field'
import SelectField from '@/core/form-fields/select-field'
import TextField from '@/core/form-fields/text-field'
import {
  JalurPendaftaran,
  JenisPembayaran,
  JenisPendaftaran,
} from '@/core/layouts/student/add/select-option'
import { IStudentsForm } from '@/core/layouts/student/student.model'
import { Avatar, Center, createStyles, Grid, Space, Text } from '@mantine/core'
import { useForm } from '@mantine/form'
import dayjs from 'dayjs'
import { FaUserAlt } from 'react-icons/fa'

const useStyles = createStyles(() => ({
  placeholder: {
    '& .mantine-Avatar-placeholder': {
      // color: '#868E96',
      backgroundColor: '#CED4DA',
    },
  },
}))

const dummySelect = [
  { label: 'S1', value: 'S1' },
  { label: 'S2', value: 'S2' },
  { label: 'S3', value: 'S3' },
]

interface Props {
  onFormSubmit: (values: IStudentsForm) => void
  children?: React.ReactNode
  defaultValues?: IStudentsForm | null
}

export default function StudentForm({
  onFormSubmit,
  children,
  defaultValues = null,
}: Props) {
  const { classes } = useStyles()
  const form = useForm({
    initialValues: {
      // Section data mahasiswa
      nim: defaultValues ? defaultValues.nim : '',
      name: defaultValues ? defaultValues.name : '',
      registerRoad: defaultValues ? defaultValues.registerRoad : '',
      registerType: defaultValues ? defaultValues.registerType : '',
      dateIn: defaultValues ? defaultValues.dateIn : '',
      dateStart: defaultValues ? defaultValues.dateStart : '',
      prodiCode: defaultValues ? defaultValues.prodiCode : '',
      file: defaultValues ? defaultValues.file : '',
      // finance
      typeOfPayment: defaultValues?.typeOfPayment || '',
      amountOfPaymnet: defaultValues?.amountOfPaymnet || '',
      acceptedSks: defaultValues?.acceptedSks || '',
      university: defaultValues?.university || '',
      studyProgram: defaultValues?.studyProgram || '',
    },

    validate: {
      // Section data mahasiswa
      name: (value) => (!value ? 'Nama lengkap harus diisi' : null),
      registerRoad: (value) =>
        !value ? 'Jalur Pendaftaran harus diisi' : null,
      registerType: (value) => (!value ? 'Tipe Pendaftaran harus diisi' : null),
      nim: (value) => (!value ? 'NIM harus diisi' : null),
      prodiCode: (value) => (!value ? 'Kode Prodi harus diisi' : null),
      // dateIn: (value) => {
      //   const currentDate = new Date()

      //   if (!value) {
      //     return 'Tanggal masuk kuliah harus diisi'
      //   }

      //   return null
      // },
      // dateStart: (value) => {
      //   const currentDate = new Date()

      //   if (!value) {
      //     return 'Tanggal mulai semester harus diisi'
      //   }

      //   return null
      // },
      // file: isNotEmpty('File harus diisi'),
      file: (value) => {
        // const tmpValue = typeof value !== 'string' ? { ...value } : value
        if (!value) {
          return 'File harus diisi'
        }
        return null
      },
    },
  })
  // form.validate()
  // const watchFile = form?.values?.file
  const preview =
    form?.values?.file && typeof form?.values?.file !== 'string'
      ? URL.createObjectURL(form?.values?.file)
      : (form?.values?.file as string)

  // console.log({ preview, watchFile })
  return (
    <div>
      {/* for form */}
      <form
        onSubmit={form.onSubmit((values: IStudentsForm) =>
          onFormSubmit(values)
        )}
      >
        <Grid>
          {/* Mulai section data mahasiswa */}
          <Grid.Col xs={12} md={12}>
            <Text fw={700} color={'#112D3C'} size={'md'}>
              Data Mahasiswa
            </Text>
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <TextField
              label="NIM"
              placeholder="Tulis Nim"
              required={true}
              size="sm"
              {...form.getInputProps('nim')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <TextField
              label="Nama Lengkap"
              placeholder="Tulis Nama Lengkap"
              required={true}
              size="sm"
              {...form.getInputProps('name')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <SelectField
              label="Jalur Pendaftaran"
              placeholder="Pilih jalur pendaftaran"
              required={true}
              // data={dummySelect}
              data={JalurPendaftaran}
              {...form.getInputProps('registerRoad')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <SelectField
              label="Jenis Pendaftaran"
              placeholder="Pilih jenis pendaftaran"
              required={true}
              data={JenisPendaftaran}
              {...form.getInputProps('registerType')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <DateInputField
              minDate={new Date()}
              maxDate={dayjs(new Date()).add(1, 'month').toDate()}
              label="Tanggal Masuk Kuliah"
              placeholder="Tanggal Masuk Kuliah"
              // required={true}
              {...form.getInputProps('dateIn')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <DateInputField
              label="Tanggal Mulai Semester"
              placeholder="Tanggal Mulai Semester"
              // required={true}
              {...form.getInputProps('dateStart')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            {/* <SelectField
              label="Kode Prodi"
              placeholder="Pilih Prodi"
              required={true}
              data={dummySelect}
              {...form.getInputProps('prodiCode')}
            /> */}
            <TextField
              label="Kode Prodi"
              placeholder="Masukan Prodi"
              required={true}
              size="sm"
              {...form.getInputProps('prodiCode')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <InputField
              label="Unggah Foto"
              placeholder="Unggah Foto"
              acceptType="image/png,image/jpeg,image/jpg"
              required={true}
              {...form.getInputProps('file')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={12}>
            <Center>
              {!preview ? (
                <Avatar
                  className={classes.placeholder}
                  size="xl"
                  sx={{ backgroundColor: '#CED4DA' }}
                >
                  <FaUserAlt />
                </Avatar>
              ) : (
                <Avatar size="xl" src={preview} />
              )}
            </Center>
          </Grid.Col>
        </Grid>
        {/* Akhir section data mahasiswa */}
        {/* Awal Finance */}
        <Space h={'xl'} />
        <Grid>
          <Grid.Col xs={12} md={12}>
            <Text fw={700} color={'#112D3C'} size={'md'}>
              Keuangan
            </Text>
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <SelectField
              label="Jenis Pembayaran"
              placeholder="Pilih pembayaran"
              // required={true}
              data={JenisPembayaran}
              {...form.getInputProps('typeOfPayment')}
            />
          </Grid.Col>{' '}
          <Grid.Col xs={12} md={6}>
            {/* <SelectField
              label="Biaya Masuk"
              placeholder="Pilih biaya"
              // required={true}
              data={dummySelect}
              {...form.getInputProps('amountOfPaymnet')}
            /> */}
            <TextField
              label="Biaya Masuk"
              type="number"
              // required={true}
              size="sm"
              placeholder="Masukan biaya"
              {...form.getInputProps('amountOfPaymnet')}
            />
          </Grid.Col>
        </Grid>
        {/*  */}
        <Space h={'xl'} />
        <Grid>
          <Grid.Col xs={12} md={12}>
            <Text fw={700} color={'#112D3C'} size={'md'}>
              Perpindahan Mahasiswa
            </Text>
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            {/* <SelectField
              label="SKS Diakui"
              placeholder="Pilih SKS"
              // required={true}
              data={dummySelect}
              {...form.getInputProps('acceptedSks')}
            /> */}
            <TextField
              label="SKS Diakui"
              type="number"
              // required={true}
              size="sm"
              placeholder="Masukan SKS"
              {...form.getInputProps('acceptedSks')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <TextField
              label="Asal Perguruan"
              // required={true}
              size="sm"
              placeholder="Tulis tulis asal perguruan"
              {...form.getInputProps('university')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <TextField
              label="Asal Program Studi"
              // required={true}
              size="sm"
              placeholder="Tulis tulis asal program studi"
              {...form.getInputProps('studyProgram')}
            />
          </Grid.Col>
        </Grid>
        {/* Akhir Finance */}
        {children}
      </form>
    </div>
  )
}
