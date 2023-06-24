import DateInputField from '@/core/form-fields/date-field'
import SelectField from '@/core/form-fields/select-field'
import TextField from '@/core/form-fields/text-field'
import TextFieldMobilePhone from '@/core/form-fields/text-field-number'
import {
  Agama,
  JenisKelamin,
  JenisTinggal,
  Kewarganegaraan,
  TerimaKps,
  Transportasi,
} from '@/core/layouts/student/add/select-option'
import {
  IDomisiliForm,
  IInformationForm,
  IKps,
} from '@/core/layouts/student/student.model'
import { Grid, Space, Text } from '@mantine/core'
import { useForm } from '@mantine/form'

interface IFroms extends IInformationForm, IDomisiliForm, IKps {}

const dummySelect = [
  { label: 'S1', value: 'S1' },
  { label: 'S2', value: 'S2' },
  { label: 'S3', value: 'S3' },
]

interface Props {
  onFormSubmit: (values: IFroms) => void
  children?: React.ReactNode
  defaultValues?: IFroms | null
}

export default function InformationForm({
  onFormSubmit,
  children,
  defaultValues,
}: Props) {
  const form = useForm({
    initialValues: {
      // informasi umum
      birthPlace: defaultValues?.birthPlace || '',
      birthDate: defaultValues?.birthDate || '',
      gender: defaultValues?.gender || '',
      nik: defaultValues?.nik || '',
      religion: defaultValues?.religion || '',
      nisn: defaultValues?.nisn || '',
      npwp: defaultValues?.npwp || '',
      citizen: defaultValues?.citizen || '',
      email: defaultValues?.email || '',
      transportation: defaultValues?.transportation || '',
      phone: defaultValues?.phone || '',
      mobilePhone: defaultValues?.mobilePhone || '',
      // domisili
      roadName: defaultValues?.roadName || '',
      rtRw: defaultValues?.rtRw || '',
      village: defaultValues?.village || '',
      subDistrict: defaultValues?.subDistrict || '',
      province: defaultValues?.province || '',
      district: defaultValues?.district || '',
      postCode: defaultValues?.postCode || '',
      typeOfStay: defaultValues?.typeOfStay || '',
      //kps
      haveKps: defaultValues?.haveKps || '',
      kpsNumber: defaultValues?.kpsNumber || '',
    },

    validate: {
      // informasi umum
      birthPlace: (value) => (value ? null : 'Tempat lahir harus diisi'),
      // birthDate: (value) => (value ? null : 'Tanggal lahir harus diisi'),
      gender: (value) => (value ? null : 'Jenis kelamin harus diisi'),
      nik: (value) => (value ? null : 'NIK harus diisi'),
      religion: (value) => (value ? null : 'Agama harus diisi'),
      nisn: (value) => (value ? null : 'NISN harus diisi'),
      npwp: (value) => (value ? null : 'NPWP harus diisi'),
      citizen: (value) => (value ? null : 'Citizen harus diisi'),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Format Email salah'),
      transportation: (value) => (value ? null : 'Transportasi harus diisi'),
      phone: (value) => (value ? null : 'Telepon harus diisi'),
      mobilePhone: (value) => (value ? null : 'Handphone harus diisi'),

      // domisili
      roadName: (value) => (value ? null : 'Nama jalan harus diisi'),
      rtRw: (value) => (value ? null : 'RT/RW harus diisi'),
      village: (value) => (value ? null : 'Dusun harus diisi'),
      subDistrict: (value) => (value ? null : 'Kelurahan harus diisi'),
      district: (value) => (value ? null : 'Kecamatan harus diisi'),
      province: (value) => (value ? null : 'Provinsi harus diisi'),
      postCode: (value) => (value ? null : 'Kode POS harus diisi'),
      typeOfStay: (value) => (value ? null : 'Tipe kamar harus diisi'),

      //kps
      // haveKps: (value) => (value ? null : 'KPS harus diisi'),
      // kpsNumber: (value) => (value ? null : 'Nomor KPS harus diisi'),
    },
  })
  return (
    <div>
      {/* for form */}
      <form onSubmit={form.onSubmit((values) => onFormSubmit(values))}>
        {/* Mulai informasi umum */}
        <Space h={'xl'} />
        <Grid>
          <Grid.Col xs={12} md={12}>
            <Text fw={700} color={'#112D3C'} size={'md'}>
              Informasi Umum
            </Text>
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <TextField
              label="Tempat Lahir"
              placeholder="Tulis tempat lahir"
              required={true}
              size="sm"
              {...form.getInputProps('birthPlace')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <DateInputField
              label="Tanggal Lahir"
              placeholder="Tulis tanggal"
              // required={true}
              {...form.getInputProps('birthDate')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <SelectField
              label="Jenis Kelamin"
              placeholder="Pilih jenis kelamin"
              required={true}
              data={JenisKelamin}
              {...form.getInputProps('gender')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <TextField
              label="NIK"
              placeholder="Tulis NIK"
              required={true}
              size="sm"
              {...form.getInputProps('nik')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <SelectField
              label="Agama"
              placeholder="Pilih agama"
              required={true}
              data={Agama}
              {...form.getInputProps('religion')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <TextField
              label="NISN"
              placeholder="Tulis NISN"
              required={true}
              size="sm"
              {...form.getInputProps('nisn')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <TextField
              label="NPWP"
              placeholder="Tulis NPWP"
              required={true}
              size="sm"
              {...form.getInputProps('npwp')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <SelectField
              label="Kewarganegaraan"
              placeholder="Pilih kewarganegaraan"
              required={true}
              data={Kewarganegaraan}
              {...form.getInputProps('citizen')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <TextField
              label="Email"
              placeholder="Tulis Email"
              required={true}
              size="sm"
              {...form.getInputProps('email')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <SelectField
              label="Alat Transportasi"
              placeholder="Pilih alat transportasi"
              required={true}
              data={Transportasi}
              {...form.getInputProps('transportation')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <TextFieldMobilePhone
              label="Nomor Telepon Rumah"
              placeholder="Tulis nomor telepon rumah"
              required={true}
              {...form.getInputProps('phone')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <TextFieldMobilePhone
              label="Nomor Hp/Whatsapp"
              placeholder="Tulis nomor Hp/Whatsapp"
              required={true}
              {...form.getInputProps('mobilePhone')}
            />
          </Grid.Col>
        </Grid>
        {/* Akhir informasi umum */}
        {/* Awal Domisili */}
        <Space h={'xl'} />
        <Grid>
          <Grid.Col xs={12} md={12}>
            <Text fw={700} color={'#112D3C'} size={'md'}>
              Domisili
            </Text>
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <TextField
              label="Nama Jalan"
              placeholder="Tulis nama jalan"
              required={true}
              size="sm"
              {...form.getInputProps('roadName')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <TextField
              label="RT/RW"
              placeholder="Tulis RT/RW"
              required={true}
              size="sm"
              {...form.getInputProps('rtRw')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <TextField
              label="Dusun"
              placeholder="Tulis dusun"
              required={true}
              size="sm"
              {...form.getInputProps('village')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <TextField
              label="Kelurahan"
              placeholder="Tulis kelurahan"
              required={true}
              size="sm"
              {...form.getInputProps('subDistrict')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <TextField
              label="Kecamatan"
              placeholder="Tulis kecamatan"
              required={true}
              size="sm"
              {...form.getInputProps('district')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <TextField
              label="Provinsi"
              placeholder="Tulis provinsi"
              required={true}
              size="sm"
              {...form.getInputProps('province')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <TextField
              label="Kode POS"
              placeholder="Tulis kode POS"
              required={true}
              size="sm"
              {...form.getInputProps('postCode')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <SelectField
              label="Jenis Tinggal"
              placeholder="Pilih jenis tinggal"
              required={true}
              data={JenisTinggal}
              {...form.getInputProps('typeOfStay')}
            />
          </Grid.Col>
        </Grid>
        {/* Akhir Domisili */}
        {/* Awal domisili */}
        <Space h={'xl'} />
        <Grid>
          <Grid.Col xs={12} md={12}>
            <Text fw={700} color={'#112D3C'} size={'md'}>
              {'KPS (Kartu Perlindungan Sosial)'}
            </Text>
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <TextField
              label="Nomor KPS"
              placeholder="Tulis nomor KPS"
              // required={true}
              size="sm"
              {...form.getInputProps('kpsNumber')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <SelectField
              label="Terima KPS"
              placeholder="Pilih terima KPS"
              // required={true}
              data={TerimaKps}
              {...form.getInputProps('haveKps')}
            />
          </Grid.Col>
        </Grid>
        {/* Akhir domisili */}
        {children}
      </form>
    </div>
  )
}
