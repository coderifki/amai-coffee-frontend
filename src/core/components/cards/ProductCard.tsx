import { Card, Image, Text, Badge, Button, Group, Grid } from '@mantine/core'
import { useState } from 'react'

type Props = {
  id: string
  title: string
  price: number
  description: string
  image: string
  discont?: number
  onClick?: (product: Props) => void
}

export default function ProductCard(props: Props) {
  const [cart, setCart] = useState<Props[]>([])

  const handleAddToCart = () => {
    // Trigger the onClick function passed in props, and add the product to the cart array
    if (props.onClick) {
      props.onClick(props)
      setCart([...cart, props])
    }
  }
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
          {props.description}
        </Text>

        <Button
          variant="light"
          color="blue"
          fullWidth
          mt="md"
          radius="md"
          onClick={handleAddToCart}
        >
          Book classic tour now
        </Button>
      </Card>
    </>
  )
}
