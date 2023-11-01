import { useDisclosure } from '@mantine/hooks'
import { Modal, Button, Group, Text, Grid, Input } from '@mantine/core'

export default function PaymentModal() {
  const [opened, { open, close }] = useDisclosure(false)

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

      {/* Modal When Opened */}
      <Modal
        opened={opened}
        onClose={close}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        {/* Modal content */}
        <Grid>
          <Grid.Col>
            <Group sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text fz="md">Total Pembayaran</Text>
              <Text fz="md">Rp. 12.000</Text>
            </Group>
          </Grid.Col>
          <Grid.Col>
            <Input required={true} placeholder="Masukan Nama Customer"></Input>
          </Grid.Col>
          <Grid.Col>
            <Input required={true} placeholder="Masukan Uang Customer"></Input>
          </Grid.Col>
          <Grid.Col>
            <Group sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text fz="md">Kembalian</Text>
              <Text fz="md">Rp. 12.000</Text>
            </Group>
          </Grid.Col>
          <Button
            variant="light"
            color="blue"
            miw={400}
            mx={'auto'}
            my="md"
            radius="md"
            onClick={open}
          >
            Bayar
          </Button>
        </Grid>
      </Modal>
    </>
  )
}
