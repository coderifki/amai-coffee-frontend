import { useState } from 'react'
import {
  Box,
  Collapse,
  createStyles,
  Group,
  Text,
  ThemeIcon,
  UnstyledButton,
} from '@mantine/core'
import {
  Icon,
  IconCalendarStats,
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons-react'
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
  control: {
    fontWeight: 500,
    display: 'block',
    width: '100%',
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },
  subControl: {
    fontWeight: 500,
    display: 'block',
    width: '100%',
    // padding: `${theme.spacing.lg}px ${theme.spacing.md}px`,
    paddingRight: `${theme.spacing.xl}px`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    fontSize: theme.fontSizes.sm,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },

  link: {
    fontWeight: 500,
    display: 'block',
    textDecoration: 'none',
    paddingTop: `${theme.spacing.sm}`,
    paddingBottom: `${theme.spacing.sm}`,
    paddingLeft: 31,
    marginLeft: 30,
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    borderLeft: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },
  subLink: {
    fontWeight: 500,
    display: 'block',
    textDecoration: 'none',
    paddingTop: `${theme.spacing.sm}`,
    paddingBottom: `${theme.spacing.sm}`,
    paddingLeft: 31,
    marginLeft: 60,
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    borderLeft: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  },
  chevron: {
    transition: 'transform 200ms ease',
  },
}))

export interface LinksGroupProps {
  icon: Icon
  label: string
  initiallyOpened?: boolean
  group?: string
  link?: string
  links?: {
    label: string
    link: string
    open?: boolean
    subLinks?: { label: string; link: string }[]
  }[]
}

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  link,
  links,
}: LinksGroupProps) {
  const { classes, theme } = useStyles()
  const hasLinks = Array.isArray(links)
  const [opened, setOpened] = useState(initiallyOpened || false)
  const [localLinks, setLocalLinks] = useState(links || [])

  const subLinkToggle = (key: number) => {
    if (localLinks) {
      localLinks[key].open = !localLinks[key].open
      setLocalLinks([...localLinks])
    }
  }

  const ChevronIcon = theme.dir === 'ltr' ? IconChevronRight : IconChevronLeft
  const items = (hasLinks ? localLinks : []).map((link, key) => (
    <div key={key}>
      {Array.isArray(link.subLinks) ? (
        <>
          <UnstyledButton
            onClick={() => subLinkToggle(key)}
            className={classes.subControl}
          >
            <Group position="apart" spacing={0}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {/*<ThemeIcon variant="light" size={30}>*/}
                {/*  <Icon size={18} />*/}
                {/*</ThemeIcon>*/}
                <Link href={link.link ?? '#'}>
                  <Text className={classes.link}>{link.label}</Text>
                  {/*<Box ml="md">{link.label}</Box>*/}
                </Link>
              </Box>
              {hasLinks && (
                <ChevronIcon
                  className={classes.chevron}
                  size={24}
                  stroke={1.5}
                  style={{
                    transform: link.open
                      ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)`
                      : 'none',
                  }}
                />
              )}
            </Group>
          </UnstyledButton>
          <Collapse in={link?.open || false}>
            {link.subLinks.map((subLink) => (
              <Link href={subLink.link} key={subLink.label}>
                <Text className={classes.subLink}>{subLink.label}</Text>
              </Link>
            ))}
          </Collapse>
        </>
      ) : (
        <Link href={link.link} key={link.label}>
          <Text className={`${classes.link}`}>{link.label}</Text>
        </Link>
      )}
    </div>
  ))

  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
      >
        <Group position="apart" spacing={0}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" size={40}>
              <Icon size={20} />
            </ThemeIcon>
            <Link href={link ?? '#'}>
              <Box ml="md">{label}</Box>
            </Link>
          </Box>
          {hasLinks && (
            <ChevronIcon
              className={classes.chevron}
              size={24}
              stroke={1.5}
              style={{
                transform: opened
                  ? `rotate(${theme.dir === 'rtl' ? -90 : 90}deg)`
                  : 'none',
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  )
}

const mockdata = {
  label: 'Releases',
  icon: IconCalendarStats,
  links: [
    { label: 'Upcoming releases', link: '/' },
    { label: 'Previous releases', link: '/' },
    { label: 'Releases schedule', link: '/' },
  ],
}

export function NavbarLinksGroup() {
  return (
    <Box
      sx={(theme) => ({
        minHeight: 220,
        padding: theme.spacing.md,
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
      })}
    >
      <LinksGroup {...mockdata} />
    </Box>
  )
}
