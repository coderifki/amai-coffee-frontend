import TabAttendance from '@/core/layouts/student/detail/tab-attendance'
import TabParentsGuardians from '@/core/layouts/student/detail/tab-parents-guardians'
import TabPayments from '@/core/layouts/student/detail/tab-payments'
import TabStudent from '@/core/layouts/student/detail/tab-student'
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

export default function DetailTransaction() {
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
          <Tabs.Tab className={classes.tabLabel} value="parents">
            Orang Tua / Wali
          </Tabs.Tab>
          <Tabs.Tab className={classes.tabLabel} value="payments">
            Pembayaran
          </Tabs.Tab>
          <Tabs.Tab className={classes.tabLabel} value="attendance">
            Absensi
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="student">
          <Space h={'md'} />
          <TabStudent />
        </Tabs.Panel>
        <Tabs.Panel value="parents">
          <Space h={'md'} />
          <TabParentsGuardians />
        </Tabs.Panel>
        {/* TabAttendance */}
        <Tabs.Panel value="payments">
          <Space h={'md'} />
          <TabPayments />
        </Tabs.Panel>
        <Tabs.Panel value="attendance">
          <Space h={'md'} />
          <TabAttendance />
        </Tabs.Panel>
      </Tabs>
    </React.Fragment>
  )
}
