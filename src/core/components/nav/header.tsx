import {
  ActionIcon,
  Burger,
  Flex,
  Group,
  Header,
  MediaQuery,
} from '@mantine/core'
import { IconSun } from '@tabler/icons-react'
import Image from 'next/image'

interface NavHeaderProps {
  opened: boolean
  setOpened: (opened: boolean) => void

  toggleColorScheme: () => void
}

export function NavHeader({
  opened,
  setOpened,
  toggleColorScheme,
}: NavHeaderProps) {
  return (
    <>
      <Header height={60} p={'xs'}>
        {/*<div className={'flex align-middle h-full'}>*/}
        <Group align={'center'} grow={true}>
          <Flex direction={'row'}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened(!opened)}
                size="sm"
                mr="xl"
              />
            </MediaQuery>

            <Image
              width={75}
              height={40}
              alt={'logo'}
              style={{ maxHeight: '100%' }}
              src={
                'https://tripsukasuka.com/wp-content/uploads/2022/07/logo-768x435.png'
              }
            />
            {/*<Text size={'xl'} weight={700}>*/}
            {/*  <Image*/}
            {/*    fill={true}*/}
            {/*    alt={'logo'}*/}
            {/*    src={*/}
            {/*      'https://tripsukasuka.com/wp-content/uploads/2022/07/logo-768x435.png'*/}
            {/*    }*/}
            {/*  />*/}
            {/*</Text>*/}
          </Flex>
          {/*<div className={'flex justify-end flex-1'}>*/}
          <Flex justify={'flex-end'}>
            <ActionIcon
              title="Toggle color scheme"
              onClick={toggleColorScheme}
              size="lg"
              radius="md"
              variant="outline"
            >
              <IconSun />
            </ActionIcon>
          </Flex>
        </Group>
      </Header>
    </>
  )
}
