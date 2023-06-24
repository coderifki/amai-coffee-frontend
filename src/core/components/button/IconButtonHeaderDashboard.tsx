import { Avatar, Group, Text, UnstyledButton } from '@mantine/core'
import React from 'react'

interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  image: string
  title: string
  total: number | string
}

export default function UserButton({
  image,
  title,
  total,
  ...others
}: UserButtonProps) {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '150px',
        height: '50px',
        padding: 5,
        paddingLeft: 10,
        marginRight: 14,
        opacity: 0.8,
        backgroundColor: '#fff !important',
        borderRadius: theme.radius.md,
        boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.25)',
        color:
          theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        // '&:hover': {
        //   backgroundColor:
        //     theme.colorScheme === 'dark'
        //       ? theme.colors.dark[8]
        //       : theme.colors.gray[0],
        // },
      })}
      {...others}
    >
      <Group>
        <Avatar
          src={image}
          radius="md"
          sx={{
            opacity: 1,
          }}
        />

        <div style={{ flex: 1 }}>
          <Text
            size="12px"
            weight={700}
            sx={{
              opacity: 1,
            }}
          >
            {title}
          </Text>

          <Text
            color="green"
            fw={'bold'}
            size="10px"
            sx={{
              opacity: 1,
            }}
          >
            {total}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  )
}
