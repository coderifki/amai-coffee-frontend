import DateInputField from '@/core/form-fields/date-field'
import InputField from '@/core/form-fields/input-field'
import SelectField from '@/core/form-fields/select-field'
import TextField from '@/core/form-fields/text-field'
import TextFieldMobilePhone from '@/core/form-fields/text-field-number'
import {
  JenisPembayaran,
  JenisPendaftaran,
} from '@/core/layouts/student/add/select-option'
import { DummySelectForDosen } from '@/core/layouts/teacher/add/select-option'
import { ITeacherForm } from '@/core/layouts/teacher/teacher.model'
import { Avatar, Center, createStyles, Grid, Space, Text } from '@mantine/core'
import { useForm } from '@mantine/form'
import dayjs from 'dayjs'
import { FaUserAlt } from 'react-icons/fa'

const useStyles = createStyles(() => ({
  placeholder: {
    '& .mantine-Avatar-placeholder': {
      backgroundColor: '#CED4DA',
    },
  },
}))

interface Props {
  onFormSubmit: (values: ITeacherForm) => void
  children?: React.ReactNode
  defaultValues?: ITeacherForm | null
}

export default function DosenForm({
  onFormSubmit,
  children,
  defaultValues = null,
}: Props) {
  const { classes } = useStyles()
  const form = useForm({
    initialValues: {
      name: defaultValues ? defaultValues.name : '',
      email: defaultValues ? defaultValues.email : '',
      title: defaultValues ? defaultValues.title : '',
      experience: defaultValues ? defaultValues.experience : '',
      position: defaultValues ? defaultValues.position : '',
      nidn: defaultValues ? defaultValues.nidn : '',
      areas_of_expertise: defaultValues ? defaultValues.areas_of_expertise : '',
      education: defaultValues?.education || '',
      scientific_publications: defaultValues?.scientific_publications || '',
      phone: defaultValues?.phone || '',
      avatar: defaultValues?.avatar || '',
    },

    validate: {
      name: (value) => (!value ? 'Nama lengkap harus diisi' : null),
      nidn: (value) => (!value ? 'NIDN harus diisi' : null),
      areas_of_expertise: (value) => (!value ? 'Jurusan harus diisi' : null),
      education: (value) => (!value ? 'Jurusan harus diisi' : null),
      phone: (value) => (!value ? 'Nomor Telepon harus diisi' : null),
      experience: (value) => (!value ? 'Jabatan harus diisi' : null),
      position: (value) => (!value ? 'Posisi harus diisi' : null),
      scientific_publications: (value) =>
        !value ? 'Publikasi ilmiah harus diisi' : null,
      title: (value) => (!value ? 'Title harus diisi' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Format Email salah'),
      avatar: (value) => {
        if (!value) {
          return 'File harus diisi'
        }
        return null
      },
    },
  })
  const preview =
    form?.values?.avatar && typeof form?.values?.avatar !== 'string'
      ? URL.createObjectURL(form?.values?.avatar)
      : (form?.values?.avatar as string)

  return (
    <div>
      {/* for form */}
      <form
        onSubmit={form.onSubmit((values: ITeacherForm) => onFormSubmit(values))}
      >
        <Grid>
          {/* Mulai section data mahasiswa */}
          <Grid.Col xs={12} md={12}>
            <Text fw={700} color={'#112D3C'} size={'md'}>
              Data Dosen
            </Text>
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
            <TextField
              label="NIDN"
              placeholder="Tulis NIDN"
              required={true}
              size="sm"
              {...form.getInputProps('nidn')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <SelectField
              label="Gelar Akademik"
              placeholder="Pilih gelar akademik"
              required={true}
              // data={dummySelect}
              data={DummySelectForDosen}
              {...form.getInputProps('title')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <SelectField
              label="Bidang Keahlian"
              placeholder="Pilih jenis bidang keahlian"
              required={true}
              data={DummySelectForDosen}
              {...form.getInputProps('areas_of_expertise')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <SelectField
              label="Pengalaman Mengajar"
              placeholder="Pilih lama pengalaman mengajar"
              required={true}
              data={DummySelectForDosen}
              {...form.getInputProps('experience')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <SelectField
              label="Pendidikan"
              placeholder="Pilih pendidikan"
              required={true}
              data={DummySelectForDosen}
              {...form.getInputProps('education')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <SelectField
              label="Jabatan Akademik"
              placeholder="Pilih jabatan akademik"
              required={true}
              data={DummySelectForDosen}
              {...form.getInputProps('position')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <TextField
              label="Publikasi Ilmiah"
              placeholder="Tulis publikasi ilmiah"
              required={true}
              size="sm"
              {...form.getInputProps('scientific_publications')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <TextField
              label="Email"
              placeholder="Tulis email"
              required={true}
              size="sm"
              {...form.getInputProps('email')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <TextFieldMobilePhone
              label="Nomor Kontak"
              placeholder="Tulis nomor kontak"
              required={true}
              {...form.getInputProps('phone')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <InputField
              label="Unggah Foto"
              placeholder="Unggah Foto"
              acceptType="image/png,image/jpeg,image/jpg"
              required={true}
              {...form.getInputProps('avatar')}
            />
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
          </Grid.Col>
        </Grid>
        {children}
      </form>
    </div>
  )
}
