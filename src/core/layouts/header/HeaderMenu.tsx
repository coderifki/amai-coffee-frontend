import {
  Center,
  createStyles,
  Flex,
  Group,
  Menu,
  rem,
  Stack,
} from '@mantine/core'
import { useRouter } from 'next/router'
// import { IconChevronDown } from '@tabler/icons-react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa'

const HEADER_HEIGHT = rem(70)

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  linksText: {
    color: '#fff',
    fontSize: '14px',
    fontWeight: 400,
    transition: '0.3s ease-in-out',
    '&:hover': {
      color: '#112D3C',
      transition: '0.3s ease-in-out',
    },
  },
  linksTitle: {
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    color: '#fff',
    fontSize: '14px',
    fontWeight: 400,
    transition: '0.3s ease-in-out',
    '&:hover': {
      color: '#112D3C',
      transition: '0.3s ease-in-out',
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
  linksContainer: {
    width: '200px  !important',
    padding: `${rem(8)} ${rem(8)}`,
    borderRadius: theme.radius.md,
    backgroundColor: '#018B14',
    border: 'none',
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: '24.8px',
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    color: '#112D3C',
    fontSize: '16px',
    fontWeight: 400,
    '&:hover': {
      borderBottom: '2px solid #018B14',
      // backgroundColor: 'red',
      // theme.colorScheme === 'dark'
      //   ? theme.colors.dark[6]
      //   : theme.colors.gray[0],
    },
  },
  linkActive: {
    display: 'block',
    lineHeight: '24.8px',
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    color: '#112D3C',
    fontSize: '16px',
    fontWeight: 700,
    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: rem(5),
  },
}))

interface HeaderActionProps {
  links: {
    link: string
    label: string
    links?: {
      link: string
      label: string
      links?: { link: string; label: string }[]
    }[]
  }[]
}

export default function HeaderMenu({ links }: HeaderActionProps) {
  const { classes } = useStyles()
  const router = useRouter()
  // const { hovered, ref } = useHover();
  // console.log(router.pathname.split('/').includes('dashboard'));
  // const location = useLocation();
  // console.log(location.pathname.split('/').includes('dashboard'));

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => {
      const secondMenuItems = item.links?.map((secondItem) => {
        return (
          <Menu.Item
            className={classes.linksText}
            key={secondItem.link}
            onClick={() => router.replace(`${secondItem.link}`)}
          >
            {secondItem.label}
          </Menu.Item>
        )
      })
      if (secondMenuItems) {
        return (
          <Menu
            key={link.label}
            trigger="hover"
            transitionProps={{ exitDuration: 0 }}
            withinPortal
            position="right-start"
            arrowPosition="center"
          >
            <div className={classes.linksTitle}>
              <Menu.Target>
                <Stack>
                  <Flex
                    gap="xl"
                    justify="space-between"
                    align="center"
                    direction="row"
                    wrap="wrap"
                  >
                    <span>{link.label}</span>
                    <FaAngleRight size={rem(12)} />
                  </Flex>
                </Stack>
              </Menu.Target>
            </div>
            <Menu.Dropdown className={classes.linksContainer}>
              {secondMenuItems}
            </Menu.Dropdown>
          </Menu>
        )
      }
      return (
        <Menu.Item
          key={item.link}
          className={classes.linksText}
          onClick={() => router.replace(`${item.link}`)}
        >
          {item.label}
        </Menu.Item>
      )
    })

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          transitionProps={{ exitDuration: 0 }}
          withinPortal
        >
          <div className={classes.link}>
            <Menu.Target>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <FaAngleDown size={rem(12)} />
              </Center>
            </Menu.Target>
          </div>
          {/* </a> */}
          <Menu.Dropdown className={classes.linksContainer}>
            {menuItems}
          </Menu.Dropdown>
        </Menu>
      )
    }

    return (
      <a
        key={link.label}
        href={link.link}
        // console.log(location.pathname.split('/').includes('dashboard'));
        className={
          router.pathname.split('/').includes(link.label.toLowerCase())
            ? classes.linkActive
            : classes.link
        }
        // onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    )
  })
  return (
    <Group spacing={5} className={classes.links}>
      {items}
    </Group>
  )
}
