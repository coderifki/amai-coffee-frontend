import React from 'react'
import { Group, Text, UnstyledButton, Flex, Center } from '@mantine/core'
import { FaLongArrowAltRight } from 'react-icons/fa'

interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  title: string
  count: number
  description: string
}

export default function AplicationButtonDashboard({
  title,
  count,
  description,
  ...others
}: UserButtonProps) {
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        height: '70px',
        padding: 10,
        backgroundColor: '#018B14 !important',
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
      <Flex justify={'space-between'}>
        <Group>
          <Center>
            <div style={{ flex: 1 }}>
              <Text
                color={'#fff'}
                size={'sm'}
                weight={700}
                sx={{
                  opacity: 1,
                }}
              >
                {`${title} (${count})`}
              </Text>
              <Text
                color={'#fff'}
                size={'sm'}
                weight={400}
                sx={{
                  opacity: 1,
                }}
              >
                {description}
              </Text>
            </div>
          </Center>
        </Group>
        <Center>
          <FaLongArrowAltRight />
        </Center>
      </Flex>
    </UnstyledButton>
  )
}
