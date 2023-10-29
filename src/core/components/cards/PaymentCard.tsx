import PaymentModal from '@/core/layouts/payment/PaymentModal'
import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Grid,
  Divider,
  NumberInput,
  ActionIcon,
  Stack,
  Space,
} from '@mantine/core'
import Link from 'next/link'
import { FaCircleXmark } from 'react-icons/fa6'

type Props = {
  title: string
  price: number
  desctiptions: string
  image: string
  discont?: number
}

export default function PaymentCard() {
  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Group mt="md" mb="xs">
          <Text fw={500}>Payment</Text>
        </Group>
        <Divider size="md" label="Order Menu" labelPosition="center" />
        <Group mt="md" mb="xs">
          <Image
            src="/assets/images/card-product/Nasi-Goreng.jpg"
            // height={50}
            width={80}
            fit="contain"
            alt="Norway"
          />
          <Group
            display={'flex'}
            sx={{ flexDirection: 'column', maxHeight: 100, minWidth: 100 }}
          >
            <Text fz="sm">Nasi Goreng</Text>
            {/* <Space h="xs" /> */}

            <NumberInput
              defaultValue={1}
              min={1}
              max={100}
              size="xs"
              maw={80}
              radius="lg"
            />
          </Group>
          <Group sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Text fz="sm">Rp. 12.000</Text>
            <ActionIcon variant="subtle">
              <FaCircleXmark size="1rem" />
            </ActionIcon>
          </Group>
        </Group>
        <Divider
          mt={'md'}
          mb={'md'}
          size="md"
          label="Total Amount"
          labelPosition="center"
        />
        <Group sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Text fz="sm">Total</Text>

          <Text fz="sm">Rp. 12.000</Text>
        </Group>
        <PaymentModal />
        {/* <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Checkout
        </Button> */}
      </Card>
    </>
  )
}
