import React from 'react'
import { Group, Text, UnstyledButton, Flex, Box } from '@mantine/core'
import moment from 'moment'

interface UserButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  date: string
  description: string
}

export default function ButtonComingSoonActivityDashboard({
  date,
  description,
  ...others
}: UserButtonProps) {
  // console.log({ date });
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        height: '90px',
        backgroundColor: '#E7EAEC !important',
        // backgroundColor: 'black !important',
        borderRadius: theme.radius.md,
        boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.25)',
        color:
          theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        margin: '10px 0 10px 0',

        // '&:hover': {
        //   backgroundColor:z
        //     theme.colorScheme === 'dark'
        //       ? theme.colors.dark[8]
        //       : theme.colors.gray[0],
        // },
      })}
      {...others}
    >
      <Flex justify={'space-between'}>
        <Group>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '70px',
              height: '70px',
              borderRadius: '20%',
              margin: '0 0 0 10px',
              backgroundColor: '#2E3261',
            }}
          >
            <Flex justify={'center'} align={'center'} direction={'column'}>
              <Text
                color={'#fff'}
                size={'md'}
                weight={700}
                sx={{
                  opacity: 1,
                }}
                lineClamp={2}
                // truncate
              >
                {/* test */}
                {moment(new Date(date)).format('d')}
              </Text>
              <Text
                color={'#fff'}
                size={'sm'}
                weight={700}
                sx={{
                  opacity: 1,
                }}
                lineClamp={2}
                // truncate
              >
                {/* test */}
                {moment(new Date(date)).format('MMM')}
              </Text>
            </Flex>
          </Box>
          <Box maw={250}>
            <Text
              color={'#000'}
              size={'sm'}
              weight={400}
              sx={{
                opacity: 1,
              }}
              lineClamp={2}
              // truncate
            >
              {description}
            </Text>
          </Box>
        </Group>
      </Flex>
    </UnstyledButton>
  )
}
