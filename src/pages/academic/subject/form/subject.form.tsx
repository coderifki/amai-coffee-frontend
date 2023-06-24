import { Button, Card, Text, TextInput } from '@mantine/core'
import { useState } from 'react'

export const SubjectForm = () => {
  const [periodDate, setPeriodDate] = useState<[Date | null, Date | null]>([
    null,
    null,
  ])
  return (
    <Card p={'xl'} mih={600}>
      <Card.Section>
        <Text weight={500} size={'xl'} mb={'md'}>
          Academic Subject From
        </Text>
      </Card.Section>
      <Card.Section p={'md'}>
        <form>
          <TextInput label="Subject Name" description="" />
          <Button type="submit" variant="filled" className={'mt-5'}>
            Submit
          </Button>
        </form>
      </Card.Section>
    </Card>
  )
}

export default SubjectForm
