import TabAttendance from '@/core/layouts/student/detail/tab-attendance'
import TabParentsGuardians from '@/core/layouts/student/detail/tab-parents-guardians'
import TabPayments from '@/core/layouts/student/detail/tab-payments'
import TabStudent from '@/core/layouts/student/detail/tab-student'
import TabTeacher from '@/core/layouts/teacher/detail/tab-dosen'
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

export default function DetailDosen() {
  const { classes } = useStyles()
  const [activeTab, setActiveTab] = React.useState<string | null>('dosen')
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
          <Tabs.Tab className={classes.tabLabel} value="dosen">
            Data Dosen
          </Tabs.Tab>
          <Tabs.Tab className={classes.tabLabel} value="attendance">
            Kehadiran
          </Tabs.Tab>
          <Tabs.Tab className={classes.tabLabel} value="schedule">
            Jadwal Kelas
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="dosen">
          <Space h={'md'} />
          {/* <>Data dosen</> */}
          <TabTeacher />
        </Tabs.Panel>
        <Tabs.Panel value="attendance">
          <Space h={'md'} />
          <>Kehadiran</>
        </Tabs.Panel>
        {/* TabAttendance */}
        <Tabs.Panel value="schedule">
          <Space h={'md'} />
          <>Jadwal</>
        </Tabs.Panel>
      </Tabs>
    </React.Fragment>
  )
}
