import { ActionIcon, Flex } from '@mantine/core'
// import { IconChevronDown } from '@tabler/icons-react';
import { IoMdChatbubbles, IoMdNotifications } from 'react-icons/io'

export default function NotificationIcon() {
  return (
    <>
      <Flex direction={'row'} gap={'sm'}>
        <ActionIcon
          size="xl"
          radius="md"
          variant="outline"
          style={{
            boxShadow: ' 0px 0px 3px rgba(0, 0, 0, 0.25)',
            border: 'none',
          }}
        >
          <IoMdChatbubbles
            size="2rem"
            style={{
              color: '#018B14',
            }}
          />
        </ActionIcon>
        <ActionIcon
          size="xl"
          radius="md"
          variant="outline"
          style={{
            boxShadow: ' 0px 0px 3px rgba(0, 0, 0, 0.25)',
            border: 'none',
          }}
        >
          <IoMdNotifications
            size="2rem"
            style={{
              color: '#018B14',
            }}
          />
        </ActionIcon>
      </Flex>
    </>
  )
}
