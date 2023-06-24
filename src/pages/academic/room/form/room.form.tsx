import { Button, Card, Select, Text, TextInput } from '@mantine/core'
import { useState } from 'react'

export const RoomForm = () => {
  const [periodDate, setPeriodDate] = useState<[Date | null, Date | null]>([
    null,
    null,
  ])
  return (
    <Card p={'xl'} mih={600}>
      <Card.Section>
        <Text weight={500} size={'xl'} mb={'md'}>
          Academic Room Form
        </Text>
      </Card.Section>
      <Card.Section p={'md'}>
        <form>
          <TextInput label="Room Name" description="" />
          <Select
            data={['Classroom', 'Laboratory', 'Office', 'Library']}
            label="Room Type"
          />
          <Button type="submit" variant="filled" className={'mt-5'}>
            Submit
          </Button>
        </form>
      </Card.Section>
    </Card>
  )
}

export default RoomForm
