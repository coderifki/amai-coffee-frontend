import { ICartItem } from '@/core/components/cards/PaymentCard'
import { useAuth } from '@/core/contex/AuthUserProvider'
import { getAllPaymentPagination } from '@/features/transaction-management/payment/payment.api'
import {
  CreateTransactionDto,
  PaymentMethodEntity,
  TransactionDetailsDto,
} from '@/features/transaction-management/payment/payment.model'
import {
  Button,
  Grid,
  Group,
  Input,
  Modal,
  Radio,
  Text,
  createStyles,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useDisclosure } from '@mantine/hooks'
import { useEffect, useState } from 'react'

const useStyles = createStyles(() => ({
  gridContainer: {
    margin: '10px 0 0 0',
    display: 'flex',
    justifyContent: 'center',
  },
  nextButton: {
    marginTop: '10px',
    backgroundColor: '#BCA37F !important',
    border: 'none',
    color: '#fff',
  },
}))

type PaymentModalProps = {
  onSubmitPayment: (paymentData: CreateTransactionDto) => void // Update 'any' to the correct type if possible}
  isLoading: boolean
  defaultValues?: PaymentMethodEntity
  amount: number // Define the type of 'amount' as a number (assuming it's a numeric value)
  carts: ICartItem[]
}

export default function PaymentModal({
  // onFormSubmit,
  onSubmitPayment,
  defaultValues,
  amount,
  carts,
  isLoading,
}: PaymentModalProps) {
  // const { classes } = useStyles()
  // const form = useForm({
  //   initialValues: {
  //     id: '',
  //     name: '',
  //   },
  //   validate: {
  //     // informasi umum
  //     name: (value) => (value ? null : 'Nama Cetegory Product harus diisi'),
  //   },
  // })

  const auth = useAuth()
  // Add this section to check if user information is available
  useEffect(() => {
    if (auth && auth.user) {
      console.log('Informasi Pengguna:', auth.user) // Menampilkan informasi pengguna ke konsol
    }
  }, [auth])

  // const handleSubmit = (data: PaymentMethodEntity) => {
  //   const tmpData = {
  //     ...data,
  //   }
  //   onFormSubmit(removeEmptyKey(tmpData))
  // }
  // React.useEffect(() => {
  //   if (defaultValues) {
  //     form.setFieldValue('id', defaultValues?.id || '')
  //     form.setFieldValue('name', defaultValues?.name || '')
  //   }
  // }, [defaultValues])

  const [opened, { open, close }] = useDisclosure(false)
  const [customerName, setCustomerName] = useState('')
  const [cashierId, setCashierId] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('tunai')
  const [customerPayment, setCustomerPayment] = useState('')
  const [isDataComplete, setIsDataComplete] = useState(false)
  const [chekcoutProduct, setCeckoutProduct] = useState<PaymentMethodEntity[]>(
    []
  )

  useEffect(() => {
    async function fetchPayment() {
      try {
        // Panggil fungsi API yang telah kamu buat sebelumnya
        const result = await getAllPaymentPagination({
          page: 1,
          limit: 10,
        })
        if (result && result.data) {
          setCeckoutProduct(result.data)
        }
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }

    fetchPayment()
  }, [])

  const form = useForm({
    initialValues: {
      id: '',
      name: '',
      price: 0,
      cat_product_id: '',
      file: '',
    },
    validate: {
      // informasi umum
      name: (value) => (value ? null : 'Nama Product harus diisi'),
      price: (value) => (value && value !== 0 ? null : 'Masukan harga product'),
      cat_product_id: (value) => (value ? null : 'Pilih salah satu kategori'),
      file: (value) => (value ? null : 'Ungaah Foto Produk'),
    },
  })

  const handleSubmitPayment = () => {
    const parsedCustomerPayment = parseFloat(customerPayment)

    if (
      customerName &&
      paymentMethod &&
      !isNaN(parsedCustomerPayment) &&
      carts.length > 0
    ) {
      const transactionDetails: TransactionDetailsDto[] = carts.map((item) => ({
        product_id: item.id,
        qty: item.quantity,
      }))

      const paymentData: CreateTransactionDto = {
        name_customer: customerName,
        total_transactions: amount, // Calculate or set the total transactions
        payment_method_name: paymentMethod,
        pay: parsedCustomerPayment,
        transaction_details: transactionDetails, // Add transaction details if necessary
      }

      onSubmitPayment(paymentData)
      close()
    } else {
      setIsDataComplete(false)
    }
  }

  const calculateChange = () => {
    const change = parseInt(customerPayment) - amount
    return isNaN(change) ? 0 : change
  }

  return (
    <>
      {/* <form onSubmit={form.onSubmit((values) => onFormSubmit(values))}> */}
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
            <Group sx={{ display: 'flex', justifyContent: 'center' }}>
              <Text fw={500} fz="lg" mb={10}>
                Payment Method
              </Text>
              {/* <Text fz="md">Rp. {amount}</Text> */}
            </Group>
          </Grid.Col>

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
              // onChange={(event) => setPaymentMethod(event.currentTarget.value)}
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
            // type={'submit'}
            onClick={handleSubmitPayment}
            // className={classes.nextButton}
            loading={isLoading}
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
      {/* </form> */}
    </>
  )
}
