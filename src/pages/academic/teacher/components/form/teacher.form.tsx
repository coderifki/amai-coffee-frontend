import { Button, Card, Text, TextInput } from '@mantine/core'

export const TeacherForm = () => {
  return (
    <Card p={'xl'} mih={600}>
      <Card.Section>
        <Text weight={500} size={'xl'} mb={'md'}>
          Academic Teacher Form
        </Text>
      </Card.Section>
      <Card.Section p={'md'}>
        <form>
          <TextInput label="Teacher Name" description="" />
          {/*<Select*/}
          {/*  data={['Classroom', 'Laboratory', 'Office', 'Library']}*/}
          {/*  label="Faculty Type"*/}
          {/*/>*/}
          <Button type="submit" variant="filled" className={'mt-5'}>
            Submit
          </Button>
        </form>
      </Card.Section>
    </Card>
  )
}

export default TeacherForm
