import { Card, Image, Text, Badge, Button, Group, Grid } from '@mantine/core'

type Props = {
  title: string
  price: number
  desctiptions: string
  image: string
  discont?: number
}

export default function ProductCard(props: Props) {
  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Image src={props.image} height={160} alt="Norway" />
        </Card.Section>

        <Group mt="md" mb="xs">
          <Text fw={500}>{props.title}</Text>

          {props.discont && (
            <Badge color="pink" variant="light">
              {`Discount ${props.discont} %`}
            </Badge>
          )}
        </Group>
        <Text fw={500}>{props.price}</Text>

        <Text size="sm" c="dimmed" className="py-2">
          {props.desctiptions}
        </Text>

        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Book classic tour now
        </Button>
      </Card>
    </>
  )
}
