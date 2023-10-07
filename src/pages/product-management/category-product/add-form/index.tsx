import SelectField from '@/core/form-fields/select-field'
import TextField from '@/core/form-fields/text-field'
import { UserEntity } from '@/features/auth/user/user.model'
import { CategoryProductEntity } from '@/features/product-management/category-product/category-product.model'
import { SubmitCreateProduct } from '@/pages/product-management/product/add-form/add-form-model'
import { removeEmptyKey } from '@/utils/remove-empty-key'
import { Button, Flex, Grid, Space, Text, createStyles } from '@mantine/core'
import { useForm } from '@mantine/form'
import { getCookie } from 'cookies-next'
import React from 'react'

const useStyles = createStyles(() => ({
  gridContainer: {
    margin: '10px 0 0 0',
    display: 'flex',
    justifyContent: 'center',
  },
  nextButton: {
    backgroundColor: '#BCA37F !important',
    border: 'none',
    color: '#fff',
  },
}))

export default function CategoryProductForm({
  onFormSubmit,
  defaultValues,
  isLoading,
}: SubmitCreateProduct) {
  const { classes } = useStyles()
  const form = useForm({
    initialValues: {
      id: '',
      name: '',
    },
    validate: {
      // informasi umum
      name: (value) => (value ? null : 'Nama Product harus diisi'),
    },
  })
  const handleSubmit = (data: CategoryProductEntity) => {
    const tmpData = {
      ...data,
    }
    onFormSubmit(removeEmptyKey(tmpData))
  }
  React.useEffect(() => {
    if (defaultValues) {
      form.setFieldValue('id', defaultValues?.id || '')
      form.setFieldValue('name', defaultValues?.name || '')
    }
  }, [defaultValues])
  return (
    <div>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Space h={'xl'} />
        <Grid>
          <Grid.Col xs={12} md={12}>
            <Text fw={700} color={'#112D3C'} size={'md'}>
              Tambah Kategori Produk
            </Text>
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <TextField
              label="Nama Kategori Produk"
              placeholder="Kategori Produk"
              required={true}
              {...form.getInputProps('name')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={12}>
            {/* <SelectField
              label="Kategori"
              placeholder="Pilih kategori produk"
              required={true}
              data={[
                {
                  label: 'Category One',
                  value: '64cbd183ed0fdf91172ba694',
                },
                {
                  label: 'Category Two',
                  value: '64cbf7d2ed0fdf91172ba695',
                },
              ]}
              {...form.getInputProps('cat_product_id')}
            /> */}
          </Grid.Col>
          {/* <Grid.Col xs={12} md={6}>
            <TextField
              label="Harga produk"
              placeholder="Harga"
              type="number"
              required={true}
              {...form.getInputProps('price')}
            />
          </Grid.Col> */}
        </Grid>
        <Grid>
          <Grid.Col md={12} xs={12}>
            <Flex direction={'row'} gap={'md'} justify={'center'}>
              <Grid.Col md={4} xs={12}>
                <Button
                  className={classes.nextButton}
                  loading={isLoading}
                  fullWidth
                  type={'submit'}
                >
                  {'Submit'}
                </Button>
              </Grid.Col>
            </Flex>
          </Grid.Col>
        </Grid>
      </form>
    </div>
  )
}
