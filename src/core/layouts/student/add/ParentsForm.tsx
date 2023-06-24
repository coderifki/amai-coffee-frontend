import DateInputField from '@/core/form-fields/date-field'
import SelectField from '@/core/form-fields/select-field'
import TextField from '@/core/form-fields/text-field'
import {
  PekerjaanOrtu,
  PendidikanOrtu,
  PenghasilanOrtu,
} from '@/core/layouts/student/add/select-option'
import { IParentsForm } from '@/core/layouts/student/student.model'
import { Grid, Text } from '@mantine/core'
import { useForm } from '@mantine/form'

interface Props {
  onFormSubmit: (values: IParentsForm) => void
  children?: React.ReactNode
  defaultValues?: IParentsForm | null
}

const dummySelect = [
  { label: 'S1', value: 'S1' },
  { label: 'S2', value: 'S2' },
  { label: 'S3', value: 'S3' },
]

export default function ParentsForm({
  onFormSubmit,
  children,
  defaultValues = null,
}: Props) {
  const form = useForm({
    initialValues: {
      //ortu
      fatherNik: defaultValues?.fatherNik || '',
      fatherName: defaultValues?.fatherName || '',
      fatherDateBirth: defaultValues?.fatherDateBirth || '',
      fatherJob: defaultValues?.fatherJob || '',
      fatherIncome: defaultValues?.fatherIncome || '',
      fatherEducation: defaultValues?.fatherEducation || '',
      motherNik: defaultValues?.motherNik || '',
      motherName: defaultValues?.motherName || '',
      motherDateBirth: defaultValues?.motherDateBirth || '',
      motherJob: defaultValues?.motherJob || '',
      motherIncome: defaultValues?.motherIncome || '',
      motherEducation: defaultValues?.motherEducation || '',
      // wali
      guardianNik: defaultValues?.guardianNik || '',
      guardianName: defaultValues?.guardianName || '',
      guardianDateBirth: defaultValues?.guardianDateBirth || '',
      guardianJob: defaultValues?.guardianJob || '',
      guardianIncome: defaultValues?.guardianIncome || '',
      guardianEducation: defaultValues?.guardianEducation || '',
    },

    validate: {
      fatherNik: (value) => (!value ? 'NIK orang tua harus diisi' : null),
      motherNik: (value) => (!value ? 'NIK orang tua harus diisi' : null),
      fatherName: (value) => (!value ? 'Nama orang tua harus diisi' : null),
      motherName: (value) => (!value ? 'Nama orang tua harus diisi' : null),
      fatherEducation: (value) =>
        !value ? 'Pendidikan orang tua harus diisi' : null,
      motherEducation: (value) =>
        !value ? 'Pendidikan orang tua harus diisi' : null,
      fatherJob: (value) => (!value ? 'Pekerjaan orang tua harus diisi' : null),
      motherJob: (value) => (!value ? 'Pekerjaan orang tua harus diisi' : null),
      fatherIncome: (value) => (!value ? 'Gaji orang tua harus diisi' : null),
      motherIncome: (value) => (!value ? 'Gaji orang tua harus diisi' : null),
      // fatherDateBirth: (value) =>
      //   !value ? 'Tanggal lahir orang tua harus diisi' : null,
      // motherDateBirth: (value) =>
      //   !value ? 'Tanggal lahir orang tua harus diisi' : null,
      // guardianNik: (value) => (!value ? 'NIK Wali harus diisi' : null),
      // guardianName: (value) => (!value ? 'Nama Wali harus diisi' : null),
      // guardianDateBirth: (value) =>
      //   !value ? 'Tanggal lahir Wali harus diisi' : null,
      // guardianJob: (value) => (!value ? 'Pekerjaan Wali harus diisi' : null),
      // guardianIncome: (value) => (!value ? 'Gaji Wali harus diisi' : null),
      // guardianEducation: (value) =>
      //   !value ? 'Pendidikan Wali harus diisi' : null,
    },
  })
  return (
    <div>
      {/* for form */}
      <form
        onSubmit={form.onSubmit((values: IParentsForm) => onFormSubmit(values))}
      >
        <Grid>
          {/* Mulai section data mahasiswa */}
          <Grid.Col xs={12} md={12}>
            <Text fw={700} color={'#112D3C'} size={'md'}>
              Orang Tua
            </Text>
          </Grid.Col>
          {/* Ayah */}
          <Grid.Col xs={12} md={6}>
            <TextField
              label="NIK Ayah"
              placeholder="Tulis NIK ayah"
              required={true}
              size="sm"
              {...form.getInputProps('fatherNik')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <TextField
              label="Nama Ayah"
              placeholder="Tulis nama ayah"
              required={true}
              size="sm"
              {...form.getInputProps('fatherName')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <DateInputField
              label="Tanggal Lahir Ayah"
              placeholder="Tanggal lahir ayah"
              // required={true}
              {...form.getInputProps('fatherDateBirth')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <SelectField
              label="Pendidikan Ayah"
              placeholder="Pilih pendidikan ayah"
              required={true}
              data={PendidikanOrtu}
              {...form.getInputProps('fatherEducation')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <SelectField
              label="Pekerjaan Ayah"
              placeholder="Pilih pekerjaan ayah"
              required={true}
              data={PekerjaanOrtu}
              {...form.getInputProps('fatherJob')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <SelectField
              label="Penghasilan Ayah"
              placeholder="Pilih penghasilan ayah"
              required={true}
              data={PenghasilanOrtu}
              {...form.getInputProps('fatherIncome')}
            />
          </Grid.Col>
          {/* Ibu */}
          <Grid.Col xs={12} md={6}>
            <TextField
              label="NIK Ibu"
              placeholder="Tulis NIK ibu"
              required={true}
              size="sm"
              {...form.getInputProps('motherNik')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <TextField
              label="Nama Ibu"
              placeholder="Tulis nama ibu"
              required={true}
              size="sm"
              {...form.getInputProps('motherName')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <DateInputField
              label="Tanggal Lahir Ibu"
              placeholder="Tanggal lahir ibu"
              // required={true}
              {...form.getInputProps('motherDateBirth')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <SelectField
              label="Pendidikan Ibu"
              placeholder="Pilih pendidikan ibu"
              required={true}
              data={PendidikanOrtu}
              {...form.getInputProps('motherEducation')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <SelectField
              label="Pekerjaan Ibu"
              placeholder="Pilih pekerjaan ibu"
              required={true}
              data={PekerjaanOrtu}
              {...form.getInputProps('motherJob')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <SelectField
              label="Penghasilan Ibu"
              placeholder="Pilih penghasilan ibu"
              required={true}
              data={PenghasilanOrtu}
              {...form.getInputProps('motherIncome')}
            />
          </Grid.Col>
          {/*  */}
          {/* Mulai section wali */}
          <Grid.Col xs={12} md={12}>
            <Text fw={700} color={'#112D3C'} size={'md'}>
              Wali
            </Text>
          </Grid.Col>
          {/* Wali */}
          <Grid.Col xs={12} md={6}>
            <TextField
              label="NIK Wali"
              placeholder="Tulis NIK wali"
              size="sm"
              // required={true}
              {...form.getInputProps('guardianNik')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <TextField
              label="Nama Wali"
              placeholder="Tulis nama wali"
              size="sm"
              // required={true}
              {...form.getInputProps('guardianName')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <DateInputField
              label="Tanggal Lahir Wali"
              placeholder="Tanggal lahir wali"
              // required={true}
              {...form.getInputProps('guardianDateBirth')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <SelectField
              label="Pendidikan Wali"
              placeholder="Pilih pendidikan wali"
              // required={true}
              data={PendidikanOrtu}
              {...form.getInputProps('guardianEducation')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <SelectField
              label="Pekerjaan Wali"
              placeholder="Pilih pekerjaan wali"
              // required={true}
              data={PekerjaanOrtu}
              {...form.getInputProps('guardianJob')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <SelectField
              label="Penghasilan Wali"
              placeholder="Pilih penghasilan wali"
              // required={true}
              data={PenghasilanOrtu}
              {...form.getInputProps('guardianIncome')}
            />
          </Grid.Col>
        </Grid>
        {/* Akhir section data mahasiswa */}
        {children}
      </form>
    </div>
  )
}
