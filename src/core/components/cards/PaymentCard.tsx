import PaymentModal from '@/core/layouts/payment/PaymentModal'
import { createPayment } from '@/features/transaction-management/payment/payment.api'
import {
  CreateTransactionDto,
  PaymentMethodEntity,
} from '@/features/transaction-management/payment/payment.model'
import { Card, Divider, Group, Image, Text, TextInput } from '@mantine/core'
import { useRouter } from 'next/router'
import React from 'react'
import toast from 'react-hot-toast'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import { IoIosCloseCircle } from 'react-icons/io'

export interface ICartItem {
  id: string
  name: string
  quantity: number
  image?: string
  price: number
  cat_product_id: string
}

type Props = {
  carts: ICartItem[]
  increaseQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
  removeItem: (id: string) => void
}

// type PaymentData = {
//   payment_method_name: string
//   payment_amount: number
//   customer_name: string
//   // Other fields related to payment data if applicable
// }

export default function PaymentCard({
  carts,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}: Props) {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  // Calculate total amount
  const totalAmount = carts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  const handleSubmitPayment = async (createPayload: CreateTransactionDto) => {
    setIsLoading(true)
    try {
      const res = await createPayment(createPayload)
      if (res) {
        toast.success(`Transaksi berhasil dibuat`, {
          position: 'bottom-center',
        })
        router.push('/product-management/product')
      }
    } catch (error: any) {
      console.log(`Error: ${error.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  // const handleSubmitPayment = (paymentData: PaymentData) => {
  //   // Handle payment submission logic here
  //   console.log('Payment data:', paymentData)
  // }
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
                    src={item?.image || 'http://fakeimg.pl/200x400'}
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
            <PaymentModal
              amount={totalAmount}
              onSubmitPayment={handleSubmitPayment}
              carts={carts}
              isLoading={isLoading}
            />
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
