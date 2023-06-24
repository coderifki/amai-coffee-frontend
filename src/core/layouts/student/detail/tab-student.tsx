import { IStudents } from '@/core/layouts/student/student.model'
import { formatCapitalizeText } from '@/utils/formatCapitalizeText'
import { Box, createStyles, Flex, Grid, Paper, Text } from '@mantine/core'
import moment from 'moment'
import React from 'react'

const useStyles = createStyles(() => ({
  gridContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
  },
  textLabelFiedl: {
    color: '#112D3C',
    opacity: 0.5,
  },
  textField: {
    color: '#112D3C',
  },
  paper: {
    border: '2px solid #018B14',
    backgroundColor: 'transparent',
    margin: '20px 0',
  },
}))

interface IArrayData {
  label: string
  value: string
}

interface Props {
  inputData?: IStudents
}

export default function TabStudent({ inputData }: Props) {
  const { classes } = useStyles()

  const arrayData = React.useMemo(() => {
    let dataStudent: IArrayData[] = []
    let summaryStudent: IArrayData[] = []
    let information: IArrayData[] = []
    let domisili: IArrayData[] = []
    let other: IArrayData[] = []
    //  studentDetail
    const tmpStudent = {
      nama_lengkap: inputData?.form1?.name || '-',
      jalur_registrasi: inputData?.form1?.registerRoad || '-',
      jenis_registrasi: inputData?.form1?.registerType || '-',
      tanggal_masuk_kuliah:
        (inputData?.form1?.dateIn &&
          moment(inputData?.form1?.dateIn).format('LL')) ||
        '-',
      tanggal_mulai_semester:
        (inputData?.form1?.dateStart &&
          moment(inputData?.form1?.dateStart).format('LL')) ||
        '-',
      kode_prodi: inputData?.form1?.prodiCode || '-',
    }
    dataStudent = Object.entries(tmpStudent).map(([key, value]) => {
      return {
        label: formatCapitalizeText(key),
        value: value,
      }
    })
    // studentSummary
    const tmpSummary = {
      email: inputData?.form2?.email || '-',
      nim: inputData?.form1?.nim || '-',
      nik: inputData?.form2?.nik || '-',
      nisn: inputData?.form2?.nisn || '-',
      npwp: inputData?.form2?.npwp || '-',
    }
    summaryStudent = Object.entries(tmpSummary).map(([key, value]) => {
      const tmpLabel =
        key === 'email'
          ? formatCapitalizeText(key)
          : formatCapitalizeText(key).toUpperCase()
      return {
        label: tmpLabel,
        value: value,
      }
    })
    // information
    const tmpInformation = {
      tempat_lahir: inputData?.form2?.birthPlace || '-',
      tanggal_lahir:
        (inputData?.form2?.birthDate &&
          moment(inputData?.form2?.birthDate).format('LL')) ||
        '-',
      jenis_kelamin: inputData?.form2?.gender || '-',
      agama: inputData?.form2?.religion || '-',
      kewarganegaraan: inputData?.form2?.citizen || '-',
      alat_transportasi: inputData?.form2?.transportation || '-',
      tanggal_masuk_kuliah:
        (inputData?.form1?.dateIn &&
          moment(inputData?.form1?.dateIn).format('LL')) ||
        '-',
      tanggal_mulai_semester:
        (inputData?.form1?.dateIn &&
          moment(inputData?.form1?.dateIn).format('LL')) ||
        '-',
      nomor_telepon: inputData?.form2?.phone || '-',
      nomor_handphone: inputData?.form2?.mobilePhone || '-',
    }
    information = Object.entries(tmpInformation).map(([key, value]) => {
      const tmpLabel =
        key === 'nomor_handphone'
          ? 'Nomor Hp/Whatsapp'
          : formatCapitalizeText(key)
      return {
        label: tmpLabel,
        value: value,
      }
    })
    // domisili
    const tmpDomisili = {
      nama_jalan: inputData?.form2?.roadName || '-',
      rtRw: inputData?.form2?.rtRw || '-',
      dusun: inputData?.form2?.village || '-',
      kelurahan: inputData?.form2?.subDistrict || '-',
      kecamatan: inputData?.form2?.district || '-',
      kode_pos: inputData?.form2?.postCode || '-',
      jenis_tinggal: inputData?.form2?.typeOfStay || '-',
    }
    domisili = Object.entries(tmpDomisili).map(([key, value]) => {
      const tmpLabel = key === 'rtRw' ? 'RT/RW' : formatCapitalizeText(key)
      return {
        label: tmpLabel,
        value: value,
      }
    })
    // other
    const tmpOther = {
      sks_diakui: inputData?.form1?.acceptedSks || '-',
      asal_perguruan: inputData?.form1?.university || '-',
      asal_program_studi: inputData?.form1?.studyProgram || '-',
      jenis_pembayaran: inputData?.form1?.typeOfPayment || '-',
      biaya_masuk: inputData?.form1?.amountOfPaymnet || '-',
    }
    other = Object.entries(tmpOther).map(([key, value]) => {
      return {
        label: formatCapitalizeText(key),
        value: value,
      }
    })
    return { dataStudent, summaryStudent, information, domisili, other }
  }, [inputData])
  return (
    <React.Fragment>
      <Box sx={{ width: '100%', padding: '10px 9px' }}>
        <Grid columns={15}>
          {arrayData?.summaryStudent?.length &&
            arrayData.summaryStudent.map((item, index) => (
              <Grid.Col
                key={index}
                className={classes.gridContainer}
                md={3}
                xs={12}
              >
                <Flex direction="column">
                  <Text className={classes.textLabelFiedl}>{item.label}</Text>
                  <Text className={classes.textField}>{item.value}</Text>
                </Flex>
              </Grid.Col>
            ))}
        </Grid>
      </Box>
      {/*  */}
      <Box sx={{ width: '100%', margin: '10px 0' }}>
        <Paper className={classes.paper} radius="md" p="md">
          <Grid gutter={'md'}>
            <Grid.Col span={12}>
              <Text className={classes.textField} fw={700} tt="capitalize">
                Data Mahasiswa
              </Text>
            </Grid.Col>
            {arrayData?.dataStudent?.length &&
              arrayData.dataStudent.map((item, index) => (
                <Grid.Col
                  key={index}
                  className={classes.gridContainer}
                  md={4}
                  xs={12}
                >
                  <Flex direction="column">
                    <Text className={classes.textLabelFiedl}>{item.label}</Text>
                    <Text className={classes.textField}>{item.value}</Text>
                  </Flex>
                </Grid.Col>
              ))}
          </Grid>
        </Paper>
      </Box>
      {/*  */}
      <Box sx={{ width: '100%', margin: '10px 0' }}>
        <Paper className={classes.paper} radius="md" p="md">
          <Grid>
            <Grid.Col span={12}>
              <Text className={classes.textField} fw={700} tt="capitalize">
                Informasi Umum
              </Text>
            </Grid.Col>
            {arrayData?.information?.length &&
              arrayData.information.map((item, index) => (
                <Grid.Col
                  key={index}
                  className={classes.gridContainer}
                  md={3}
                  xs={12}
                >
                  <Flex direction="column">
                    <Text className={classes.textLabelFiedl}>{item.label}</Text>
                    <Text className={classes.textField}>{item.value}</Text>
                  </Flex>
                </Grid.Col>
              ))}
          </Grid>
        </Paper>
      </Box>
      {/*  */}
      <Box sx={{ width: '100%', margin: '10px 0' }}>
        <Paper className={classes.paper} radius="md" p="md">
          <Grid>
            <Grid.Col span={12}>
              <Text className={classes.textField} fw={700} tt="capitalize">
                Domisili
              </Text>
            </Grid.Col>
            {arrayData?.domisili?.length &&
              arrayData.domisili.map((item, index) => (
                <Grid.Col
                  key={index}
                  className={classes.gridContainer}
                  md={3}
                  xs={12}
                >
                  <Flex direction="column">
                    <Text className={classes.textLabelFiedl}>{item.label}</Text>
                    <Text className={classes.textField}>{item.value}</Text>
                  </Flex>
                </Grid.Col>
              ))}
          </Grid>
        </Paper>
      </Box>
      {/*  */}
      <Box sx={{ width: '100%', margin: '10px 0' }}>
        <Paper className={classes.paper} radius="md" p="md">
          <Grid>
            <Grid.Col span={12}>
              <Text className={classes.textField} fw={700} tt="capitalize">
                Informasi Lainnya
              </Text>
            </Grid.Col>
            {arrayData?.other?.length &&
              arrayData.other.map((item, index) => (
                <Grid.Col
                  key={index}
                  className={classes.gridContainer}
                  md={4}
                  xs={12}
                >
                  <Flex direction="column">
                    <Text className={classes.textLabelFiedl}>{item.label}</Text>
                    <Text className={classes.textField}>{item.value}</Text>
                  </Flex>
                </Grid.Col>
              ))}
          </Grid>
        </Paper>
      </Box>
    </React.Fragment>
  )
}
