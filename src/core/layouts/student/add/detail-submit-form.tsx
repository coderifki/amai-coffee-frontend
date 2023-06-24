import TabStudent from '@/core/layouts/student/detail/tab-student'
import { IStudents } from '@/core/layouts/student/student.model'
import { createStyles, Space, Tabs } from '@mantine/core'
import React from 'react'

const useStyles = createStyles(() => ({
  tabContainer: {
    '& .mantine-Tabs-tabsList': {
      justifyContent: 'flex-start',
    },
  },
  tabHeader: {
    '& .mantine-Tabs-tab[data-active]': {
      borderColor: '#12b886',
      fontWeight: 600,
      lineHeight: '150%',
      fontSize: '1.2rem',
      color: '#018B14',
    },
  },
  tabLabel: {
    color: '#112D3C',
    fontWeight: 600,
    lineHeight: '150%',
    fontSize: '0.9rem',
  },
}))

interface Props {
  inputData?: IStudents
}

export default function DetailInputMahasiswa({ inputData }: Props) {
  // console.log({ inputData })
  const { classes } = useStyles()
  const [activeTab, setActiveTab] = React.useState<string | null>('student')
  return (
    <React.Fragment>
      <Tabs
        color="teal"
        className={classes.tabContainer}
        value={activeTab}
        onTabChange={setActiveTab}
        placement="right"
      >
        <Tabs.List className={classes.tabHeader}>
          <Tabs.Tab className={classes.tabLabel} value="student">
            Data Mahasiswa
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="student">
          <Space h={'md'} />
          <TabStudent inputData={inputData} />
        </Tabs.Panel>
      </Tabs>
    </React.Fragment>
  )
}
