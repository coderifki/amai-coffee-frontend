import { ITeacherForm } from '@/core/layouts/teacher/teacher.model'
import { formatCapitalizeText } from '@/utils/formatCapitalizeText'
import { Box, createStyles, Flex, Grid, Paper, Text } from '@mantine/core'
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
  inputData?: ITeacherForm
}

export default function TabTeacher({ inputData }: Props) {
  const { classes } = useStyles()

  const arrayData = React.useMemo(() => {
    let summary: IArrayData[] = []
    let dataDosen: IArrayData[] = []
    let other: IArrayData[] = []

    const tmpSummary = {
      emial: inputData?.email || '-',
      nidn: inputData?.nidn || '-',
      pendidikan: inputData?.education || '-',
    }
    summary = Object.entries(tmpSummary).map(([key, value]) => {
      if (key === 'nidn') {
        return {
          label: key.toUpperCase(),
          value: value,
        }
      }
      return {
        label: formatCapitalizeText(key),
        value: value,
      }
    })

    const tmpStudent = {
      nama_lengkap: inputData?.name || '-',
      gelar_akademik: inputData?.title || '-',
      bidang_keahlian: inputData?.areas_of_expertise || '-',
      pengalaman_pengajar: inputData?.experience || '-',
      jabatan_akademik: inputData?.position || '-',
      nomor_kontak: inputData?.phone || '-',
      publikasi_ilmiah: inputData?.scientific_publications || '-',
    }
    dataDosen = Object.entries(tmpStudent).map(([key, value]) => {
      return {
        label: formatCapitalizeText(key),
        value: value,
      }
    })
    // other
    const tmpOther = {
      lainnya: '-',
    }
    other = Object.entries(tmpOther).map(([key, value]) => {
      return {
        label: formatCapitalizeText(key),
        value: value,
      }
    })
    return { dataDosen, summary, other }
  }, [inputData])
  return (
    <React.Fragment>
      <Box sx={{ width: '100%', padding: '10px 9px' }}>
        <Grid columns={15}>
          {arrayData?.summary?.length &&
            arrayData.summary.map((item, index) => (
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
          <Grid>
            <Grid.Col span={12}>
              <Text className={classes.textField} fw={700} tt="capitalize">
                Informasi Dosen
              </Text>
            </Grid.Col>
            {arrayData?.dataDosen?.length &&
              arrayData.dataDosen.map((item, index) => (
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
