import { Button, Grid, Group, Input, Modal, Radio, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'

type PaymentModalProps = {
  amount: number // Define the type of 'amount' as a number (assuming it's a numeric value)
  onSubmitPayment: (paymentData: any) => void // Update 'any' to the correct type if possible}
}
export default function PaymentModal({
  amount,
  onSubmitPayment,
}: PaymentModalProps) {
  const [opened, { open, close }] = useDisclosure(false)
  const [customerName, setCustomerName] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('tunai')
  const [customerPayment, setCustomerPayment] = useState('')
  const [isDataComplete, setIsDataComplete] = useState(false)

  const handleSubmitPayment = () => {
    if (customerName && paymentMethod && customerPayment) {
      onSubmitPayment({
        payment_method_name: paymentMethod,
        payment_amount: amount,
        customer_name: customerName,
      })
      close()
    } else {
      // Jika ada data yang belum terisi, tampilkan pesan kesalahan atau modal
      setIsDataComplete(false)
    }
  }

  const calculateChange = () => {
    const change = parseInt(customerPayment) - amount
    return isNaN(change) ? 0 : change
  }

  return (
    <>
      <Group position="center">
        <Button
          variant="light"
          color="blue"
          fullWidth
          mt="md"
          radius="md"
          onClick={open}
        >
          Checkout
        </Button>
      </Group>

      <Modal
        opened={opened}
        onClose={close}
        transitionProps={{ transition: 'fade', duration: 500 }}
      >
        {/* Modal content */}
        <Grid>
          <Grid.Col>
            <Group sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text fz="md">Total Pembayaran</Text>
              <Text fz="md">Rp. {amount}</Text>
            </Group>
          </Grid.Col>
          <Grid.Col>
            <Input.Wrapper
              id="input-demo"
              withAsterisk
              label="Masukkan Nama Customer"
            >
              <Input
                required={true}
                placeholder="Masukan Nama Customer"
                value={customerName}
                onChange={(event) => setCustomerName(event.target.value)}
              />
            </Input.Wrapper>
          </Grid.Col>
          <Grid.Col>
            <Input.Wrapper
              id="input-demo"
              withAsterisk
              label="Masukkan Uang Customer"
            >
              <Input
                required={true}
                placeholder="Masukan Uang Customer"
                value={customerPayment}
                onChange={(event) => setCustomerPayment(event.target.value)}
              ></Input>
            </Input.Wrapper>
          </Grid.Col>
          <Grid.Col>
            <Radio.Group
              defaultValue="tunai"
              label="Select your payment method"
              description="You can only select one payment method"
              // onChange={(event) => setPaymentMethod(event.target.value)}
              onChange={(value) => setPaymentMethod(value)}
              withAsterisk
            >
              <Group mt="xs">
                <Radio value="tunai" label="Tunai" />
                <Radio value="non-tunai" label="Non-Tunai" />
              </Group>
            </Radio.Group>
          </Grid.Col>

          <Grid.Col>
            <Group sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text fz="md">Kembalian</Text>
              <Text fz="md">Rp. {calculateChange()}</Text>
            </Group>
          </Grid.Col>
          <Button
            variant="light"
            color="blue"
            miw={400}
            mx={'auto'}
            my="md"
            radius="md"
            onClick={handleSubmitPayment}
          >
            Bayar
          </Button>
          {/* Modal untuk menampilkan pesan ketika tidak semua data terisi */}
          <Modal
            opened={!isDataComplete}
            onClose={() => setIsDataComplete(true)}
          >
            <Text align="center">
              Mohon lengkapi semua data terlebih dahulu.
            </Text>
            <Button fullWidth mt={10} onClick={() => setIsDataComplete(true)}>
              Tutup
            </Button>
          </Modal>
        </Grid>
      </Modal>
    </>
  )
}
