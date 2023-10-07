import {
  Avatar,
  Button,
  createStyles,
  Flex,
  Grid,
  Paper,
  Text,
} from '@mantine/core'
import React from 'react'
import { FaFilePdf, FaPrint, FaUserAlt } from 'react-icons/fa'

const useStyles = createStyles(() => ({
  paperContainer: {
    backgroundColor: '#2E3261',
    color: '#fff',
  },
  avatar: {
    width: '90px',
    height: '90px',
    '& .mantine-Avatar-placeholder': {
      // color: '#868E96',
      backgroundColor: '#fff',
    },
  },
  gridAvatar: {
    display: 'flex',
    justifyContent: 'center',
  },
  gridButon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPdf: {
    width: '100px',
    color: '#CE2166',
  },
  buttonPrint: {
    width: '100px',
    color: '#018B14',
  },
}))

type SummaryType = {
  name: string
  nidn: string
  email: string
  province: string
  district: string
  avatar: File | string
}

interface Props {
  inputData?: SummaryType
}
export default function SummaryDosen({ inputData }: Props) {
  const { classes } = useStyles()
  const preview =
    inputData?.avatar && typeof inputData?.avatar !== 'string'
      ? URL.createObjectURL(inputData?.avatar)
      : (inputData?.avatar as string)
  // console.log({ inputData })
  // useMemo
  const studentData = React.useMemo(() => {
    const defaultValues = {
      name: 'No Name',
      nidn: 'No NIM Data',
      email: 'No Email Data',
      address: 'No Address Data',
    }
    if (!inputData) {
      return defaultValues
    }

    const name = inputData?.name || defaultValues.name
    const nidn = inputData?.nidn || defaultValues.nidn
    const email = inputData?.email || defaultValues.email
    const district = inputData?.district || defaultValues.address
    const province = inputData?.province || ''

    const address = province ? `${district}, ${province}` : district

    return { name, nidn, email, address }
  }, [inputData])
  //

  return (
    <React.Fragment>
      <Paper className={classes.paperContainer} shadow="xs" radius="md" p="md">
        {/* Summary */}
        <Grid>
          <Grid.Col className={classes.gridAvatar} md={2} xs={4}>
            <Avatar
              className={classes.avatar}
              size="xl"
              src={preview || null}
              sx={{ backgroundColor: '#CED4DA' }}
            >
              <FaUserAlt />
            </Avatar>
          </Grid.Col>
          <Grid.Col md={6} xs={8}>
            <Flex direction={'column'}>
              <Text tt="capitalize" size={'lg'} fw={700}>
                {studentData.name}{' '}
                <Text fw={300} span>
                  {`(${studentData.nidn})`}
                </Text>
              </Text>
              <Text fw={300} opacity={0.5} color="#fff">
                {studentData.email}
              </Text>
              <Text fw={300} opacity={0.5} color="#fff">
                {studentData.address}
              </Text>
            </Flex>
          </Grid.Col>
          <Grid.Col className={classes.gridButon} md={4} xs={12}>
            <Flex
              direction={'row'}
              gap={'sm'}
              justify={'center'}
              align={'center'}
            >
              <Button
                className={classes.buttonPdf}
                leftIcon={<FaFilePdf />}
                variant="white"
              >
                PDF
              </Button>
              <Button
                className={classes.buttonPrint}
                leftIcon={<FaPrint />}
                variant="white"
              >
                PRINT
              </Button>
            </Flex>
          </Grid.Col>
        </Grid>
      </Paper>
    </React.Fragment>
  )
}
