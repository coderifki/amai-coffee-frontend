import PaymentModal from '@/core/layouts/payment/PaymentModal'
import {
  Card,
  Divider,
  Group,
  Image,
  NumberInput,
  Text,
  TextInput,
} from '@mantine/core'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import { IoIosCloseCircle } from 'react-icons/io'

export interface ICartItem {
  id: string
  name: string
  quantity: number
  price: number
  cat_product_id: string
}

type Props = {
  carts: ICartItem[]
  increaseQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
  removeItem: (id: string) => void
}

export default function PaymentCard({
  carts,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}: Props) {
  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Group mt="md" mb="xs">
          <Text fw={500}>Payment</Text>
        </Group>
        <Divider size="md" label="Order Menu" labelPosition="center" />

        {/* Display if carts exist */}
        {carts.length > 0 && (
          <>
            {/* Loop through the carts */}
            {carts.map((item, index) => (
              <div key={index}>
                <Group mt="md" mb="xs">
                  <Image
                    src="/assets/images/card-product/Nasi-Goreng.jpg"
                    width={80}
                    fit="contain"
                    alt="Norway"
                  />
                  <Group
                    display="flex"
                    sx={{
                      flexDirection: 'column',
                      maxHeight: 100,
                      minWidth: 100,
                    }}
                  >
                    <Text fz="sm">{item?.name || 'tidak ada namanya'}</Text>
                    <Group align="center">
                      <FaMinusCircle
                        onClick={() => decreaseQuantity(item.id)}
                      />
                      <TextInput
                        value={item.quantity}
                        onChange={() => {}}
                        min={1}
                        max={100}
                        size="xs"
                        maw={80}
                        radius="lg"
                      />
                      <FaPlusCircle onClick={() => increaseQuantity(item.id)} />
                    </Group>
                  </Group>
                  <Group
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Text fz="sm">Rp. {item.quantity * item.price}</Text>
                    <IoIosCloseCircle onClick={() => removeItem(item.id)} />
                  </Group>
                </Group>
              </div>
            ))}

            <Divider
              mt="md"
              mb="md"
              size="md"
              label="Total Amount"
              labelPosition="center"
            />
            <Group sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text fz="sm">Total</Text>
              {/* Calculate the total amount */}
              <Text fz="sm">
                Rp.{' '}
                {carts.reduce(
                  (acc, item) => acc + item.price * item.quantity,
                  0
                )}
              </Text>
            </Group>
            <PaymentModal />
          </>
        )}
        {/* Add Checkout Button */}
        {/* <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Checkout
        </Button> */}
      </Card>
    </>
  )
}
