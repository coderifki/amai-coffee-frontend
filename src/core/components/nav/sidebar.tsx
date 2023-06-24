import {
  Box,
  Button,
  Code,
  createStyles,
  getStylesRef,
  Group,
  Navbar,
  ScrollArea,
  Stack,
} from '@mantine/core'
import {
  IconAdjustments,
  IconCalendarStats,
  IconGauge,
  IconLock,
  IconLogout,
  IconNotes,
} from '@tabler/icons-react'
// import { UserButton } from '../UserButton/UserButton'
import {
  LinksGroup,
  LinksGroupProps,
} from '@/core/components/nav/navbar.links.group'
import { useAuth } from '@contex/AuthUserProvider'
import { groupBy } from '@utils/group.by.utils'

// import { Logo } from './Logo'

const linkData: LinksGroupProps[] = [
  { label: 'Dashboard', icon: IconGauge, link: '/dashboard' },
  {
    label: 'Homework',
    icon: IconGauge,
    link: '/academic/student/homework',
    group: 'student',
  },
  {
    label: 'Study Plan',
    icon: IconGauge,
    link: '/academic/student/homework',
    group: 'student',
  },
  {
    label: 'Study Plan History',
    icon: IconGauge,
    link: '/academic/student/homework',
    group: 'student',
  },
  {
    label: 'Admission',
    icon: IconNotes,
    initiallyOpened: false,
    group: 'academic',
    links: [
      {
        label: 'Manage Admission',
        link: '/academic/admission',
      },
    ],
  },
  {
    label: 'Teachers',
    icon: IconNotes,
    initiallyOpened: false,
    group: 'academic',
    links: [
      {
        label: 'Add Teacher',
        link: '/academic/teacher/add',
      },
      {
        label: 'Manage Teachers',
        link: '/academic/teacher',
      },
    ],
  },
  {
    label: 'Student',
    icon: IconCalendarStats,
    group: 'academic',
    links: [
      { label: 'Add Student', link: '/academic/student/add' },
      // { label: 'Add Student', link: '/user/mahasiswa/add' },
      { label: 'Manage Student', link: '/academic/student' },
      // { label: 'Manage Student', link: '/user/mahasiswa' },
      // { label: 'Manage Student Card', link: '/academic/student/card' },
    ],
  },
  {
    label: 'Examination',
    icon: IconCalendarStats,
    group: 'academic',
    links: [
      { label: 'Exam Category', link: '/academic/student/add' },
      { label: 'Offline Exam', link: '/academic/student' },
      { label: 'Marks', link: '/academic/student/card' },
      { label: 'Grades', link: '/academic/student/card' },
    ],
  },
  {
    label: 'Faculty',
    icon: IconCalendarStats,
    group: 'academic',
    links: [
      { label: 'Add Faculty', link: '/academic/master-data/faculty/add' },
      { label: 'Manage Faculty', link: '/academic/master-data/faculty' },
    ],
  },
  {
    label: 'Rooms',
    icon: IconCalendarStats,
    group: 'academic',
    links: [
      { label: 'Add Room', link: '/academic/room/add' },
      { label: 'Manage Room', link: '/academic/room' },
    ],
  },
  {
    label: 'Syllabus',
    icon: IconCalendarStats,
    group: 'academic',
    links: [
      { label: 'Add Syllabus', link: '/academic/faculty/add' },
      { label: 'Manage Syllabus', link: '/academic/faculty' },
    ],
  },
  {
    label: 'Department',
    icon: IconCalendarStats,
    group: 'academic',
    links: [
      { label: 'Add Department', link: '/academic/department/add' },
      { label: 'Manage Department', link: '/academic/department' },
    ],
  },
  {
    label: 'Subject',
    icon: IconCalendarStats,
    group: 'academic',
    links: [
      { label: 'Add Subject', link: '/academic/subject/add' },
      { label: 'Manage Subject', link: '/academic/subject' },
    ],
  },
  {
    label: 'Course',
    icon: IconCalendarStats,
    group: 'academic',
    links: [
      { label: 'Add Course', link: '/academic/master-data/course/add' },
      { label: 'Manage Course', link: '/academic/master-data/course' },
    ],
  },
  {
    label: 'Holiday',
    icon: IconCalendarStats,
    group: 'academic',
    links: [
      { label: 'Add Holiday', link: '/academic/holiday/add' },
      { label: 'Manage Holiday', link: '/academic/holiday' },
    ],
  },
  {
    label: 'Fee',
    icon: IconCalendarStats,
    group: 'academic',
    links: [
      { label: 'Add Holiday', link: '/academic/holiday/add' },
      { label: 'Manage Holiday', link: '/academic/holiday' },
    ],
  },
  {
    label: 'Period',
    icon: IconCalendarStats,
    group: 'academic',
    links: [
      { label: 'Add Period', link: '/academic/master-data/period/add' },
      { label: 'Manage Period', link: '/academic/master-data/period' },
    ],
  },
  {
    label: 'Curriculum',
    icon: IconCalendarStats,
    group: 'academic',
    links: [
      {
        label: 'Add Curriculum',
        link: '/academic/master-data/curriculum/add',
      },
      {
        label: 'Manage Curriculums',
        link: '/academic/master-data/curriculum',
      },
    ],
  },
  {
    label: 'Library',
    icon: IconCalendarStats,
    group: 'academic',
    links: [
      { label: 'Add Holiday', link: '/academic/holiday/add' },
      { label: 'Manage Holiday', link: '/academic/holiday' },
    ],
  },
  {
    label: 'Attendance',
    icon: IconCalendarStats,
    group: 'academic',
    links: [
      { label: 'Student Attendance', link: '/academic/attendance/student' },
      { label: 'Staff Attendance', link: '/academic/attendance/staff' },
    ],
  },
  {
    label: 'School',
    icon: IconCalendarStats,
    group: 'academic',
    links: [
      { label: 'Add School', link: '/academic/school/add' },
      { label: 'Management School', link: '/academic/school' },
    ],
  },
  {
    label: 'Area',
    icon: IconCalendarStats,
    group: 'area',
    links: [
      {
        label: 'City',
        link: '#',
        open: false,
        subLinks: [{ label: 'Manage City', link: '/areas/city' }],
      },
      {
        label: 'Province',
        link: '#',
        open: false,
        subLinks: [{ label: 'Manage Province', link: '/areas/province' }],
      },
    ],
  },
  {
    label: 'Merchant',
    icon: IconCalendarStats,
    group: 'merchant',
    links: [
      {
        label: 'Manage Merchant',
        link: '/merchant',
        open: false,
      },
    ],
  },
  // {
  //   label: 'Subscription',
  //   icon: IconCalendarStats,
  //   group: 'contag',
  //   links: [
  //     {
  //       label: 'Manage Subscription',
  //       link: '/subscription',
  //       open: false,
  //     },
  //     {
  //       label: 'Pending Request',
  //       link: '/subscription/pending',
  //       open: false,
  //     },
  //     {
  //       label: 'Manage Plan',
  //       link: '/subscription/plan',
  //       open: false,
  //     },
  //   ],
  // },
  // {
  //   label: 'B2C',
  //   icon: IconCalendarStats,
  //   group: 'contag',
  //   links: [
  //     {
  //       label: 'Add Customer',
  //       link: '/subscription',
  //       open: false,
  //     },
  //     {
  //       label: 'Manage Customer',
  //       link: '/subscription',
  //       open: false,
  //     },
  //   ],
  // },
  // {
  //   label: 'B2B',
  //   icon: IconCalendarStats,
  //   group: 'contag',
  //   links: [
  //     {
  //       label: 'Company Request',
  //       link: '/subscription',
  //       open: false,
  //     },
  //     {
  //       label: 'Manage Company',
  //       link: '/subscription',
  //       open: false,
  //     },
  //   ],
  // },
  // {
  //   label: 'Catalog',
  //   icon: IconCalendarStats,
  //   group: 'contag',
  //   links: [
  //     {
  //       label: 'Manage Product',
  //       link: '/subscription',
  //       open: false,
  //     },
  //     {
  //       label: 'Manage Category',
  //       link: '/subscription',
  //       open: false,
  //     },
  //     {
  //       label: 'Manage Product Bundle',
  //       link: '/subscription',
  //       open: false,
  //     },
  //   ],
  // },
  // {
  //   label: 'Order',
  //   icon: IconCalendarStats,
  //   group: 'contag',
  //   links: [
  //     {
  //       label: 'Manage Order',
  //       link: '/subscription',
  //       open: false,
  //     },
  //   ],
  // },
  { label: 'Settings', icon: IconAdjustments, group: 'settings' },
  {
    label: 'Security',
    icon: IconLock,
    group: 'settings',
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
]

const useStyles = createStyles((theme) => {
  // console.log(theme.colorScheme)
  return {
    navbar: {
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      paddingBottom: 0,
    },

    header: {
      padding: theme.spacing.md,
      paddingTop: 0,
      marginLeft: -theme.spacing.md,
      marginRight: -theme.spacing.md,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[3]
      }`,
    },

    links: {
      marginLeft: -theme.spacing.md,
      marginRight: -theme.spacing.md,
    },

    linksInner: {
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,
    },

    footer: {
      marginLeft: -theme.spacing.md,
      marginRight: -theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[3]
      }`,
    },
    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [`& .${getStylesRef('icon')}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: getStylesRef('icon'),
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },
  }
})

export interface SidebarProps {
  opened: boolean
}

export const Sidebar = ({ opened }: SidebarProps) => {
  const authContext = useAuth()

  const { classes } = useStyles()

  const groupLinkData = groupBy(linkData, (item) => item.group || 'main')

  const links = Object.keys(groupLinkData).map((item) => (
    <Box key={item}>
      {/*{item !== 'default' && (*/}
      {/*  <LinksGroup {...item} key={item.label} />*/}
      {/*)}*/}
      <div
        className={
          'py-2 capitalize text-gray-600 font-medium w-full decoration-slate-400'
        }
      >
        {item}
      </div>

      {groupLinkData[item].map((link) => (
        <LinksGroup {...link} key={link.label} />
      ))}
    </Box>
  ))

  return (
    <Navbar
      height="100vh"
      width={{ sm: 300 }}
      p="md"
      style={{ paddingTop: -70 }}
      hiddenBreakpoint="sm"
      className={classes.navbar}
      hidden={!opened}
    >
      <Navbar.Section className={classes.header}>
        <Group position="apart">
          {/*<Logo width={120} />*/}
          <Code sx={{ fontWeight: 700 }}>v3.1.2</Code>
        </Group>
      </Navbar.Section>
      <ScrollArea
        h={600}
        offsetScrollbars={true}
        scrollbarSize={7}
        scrollHideDelay={200}
      >
        {/*<Navbar.Section grow form={ScrollArea} className={classes.links}>*/}
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      {/*</Navbar.Section>*/}
      <Navbar.Section className={classes.footer}>
        <Stack justify="center" spacing={0}>
          {/*<NavbarLink icon={IconSwitchHorizontal} label="Change account" />*/}
          {/*<NavbarLink icon={IconLogout} label="Logout" />*/}
          <Button onClick={authContext.logOut}>
            <IconLogout stroke={1.5} />
          </Button>
        </Stack>
      </Navbar.Section>
    </Navbar>
  )
}

export default Sidebar
