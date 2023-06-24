import { useAuth } from '@core/contex/AuthUserProvider'
import {
  Avatar,
  createStyles,
  Group,
  Menu,
  rem,
  Text,
  UnstyledButton,
} from '@mantine/core'
import React, { forwardRef } from 'react'
// import { IconChevronDown } from '@tabler/icons-react';
import { FaAngleDown } from 'react-icons/fa'

interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  image: string
  name: string
  email: string
  icon?: React.ReactNode
}

export const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ image, name, email, icon, ...others }: UserButtonProps, ref) => (
    <UnstyledButton
      ref={ref}
      sx={(theme) => ({
        display: 'block',
        width: '220px',
        height: '50px',
        padding: 5,
        paddingLeft: 10,
        marginRight: 14,
        boxShadow: ' 0px 0px 3px rgba(0, 0, 0, 0.25)',
        borderRadius: theme.radius.md,
        color:
          theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
      {...others}
    >
      <Group>
        <Avatar src={image} radius="md" />

        <div style={{ flex: 1 }}>
          <Text size="sm" weight={500}>
            {name}
          </Text>

          <Text color="green" fw={'bold'} size="xs">
            {email}
          </Text>
        </div>

        {icon || <FaAngleDown size="1rem" />}
      </Group>
    </UnstyledButton>
  )
)

UserButton.displayName = 'UserButton'

const useStyles = createStyles((theme) => ({
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
  linksContainer: {
    width: '200px  !important',
    padding: `${rem(8)} ${rem(8)}`,
    borderRadius: theme.radius.md,
    backgroundColor: '#018B14',
    border: 'none',
  },
}))
export default function UserButtonMenu() {
  const { logOut } = useAuth()
  const { classes } = useStyles()
  return (
    <>
      <Menu withArrow>
        <Menu.Target>
          <UserButton
            image="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80"
            name="Jhon Doe"
            email="admin"
          />
        </Menu.Target>
        {/* ...Menu.Items */}
        {/* <Menu.Item>{'Logout'}</Menu.Item> */}
        <Menu.Dropdown className={classes.linksContainer}>
          <Menu.Item className={classes.linksText}>User</Menu.Item>
          <Menu.Item className={classes.linksText}>Setting</Menu.Item>
          <Menu.Item className={classes.linksText} onClick={logOut}>
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  )
}
