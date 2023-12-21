import InputField from '@/core/form-fields/input-field'
import SelectField from '@/core/form-fields/select-field'
import TextField from '@/core/form-fields/text-field'
import { getAllCategoryProductPagination } from '@/features/product-management/category-product/category-product.api'
import { CategoryProductEntity } from '@/features/product-management/category-product/category-product.model'
import { ProductEntity } from '@/features/product-management/product/product.model'
import { SubmitCreateProduct } from '@/pages/product-management/product/add-form/add-form-model'
import { removeEmptyKey } from '@/utils/remove-empty-key'
import {
  Avatar,
  Button,
  Center,
  Flex,
  Grid,
  Space,
  Text,
  createStyles,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import React, { useEffect, useState } from 'react'
import { FaUserAlt } from 'react-icons/fa'

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
  placeholder: {
    '& .mantine-Avatar-placeholder': {
      // color: '#868E96',
      backgroundColor: '#CED4DA',
    },
  },
}))

export default function ProductForm({
  onFormSubmit,
  defaultValues,
  isLoading,
}: SubmitCreateProduct) {
  const { classes } = useStyles()
  const [categories, setCategories] = useState<CategoryProductEntity[]>([])

  useEffect(() => {
    async function fetchCategories() {
      try {
        // Panggil fungsi API yang telah kamu buat sebelumnya
        const result = await getAllCategoryProductPagination({
          page: 1,
          limit: 10,
        })
        if (result && result.data) {
          setCategories(result.data)
        }
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }

    fetchCategories()
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

  const handleSubmit = (data: ProductEntity) => {
    const tmpData = {
      ...data,
      price: Number(data.price),
    }
    onFormSubmit(removeEmptyKey(tmpData))
  }

  const preview =
    form?.values?.file && typeof form?.values?.file !== 'string'
      ? URL.createObjectURL(form?.values?.file)
      : (form?.values?.file as string)

  React.useEffect(() => {
    if (defaultValues) {
      form.setFieldValue('id', defaultValues?.id || '')
      form.setFieldValue('name', defaultValues?.name || '')
      form.setFieldValue('price', defaultValues?.price || 0)
      form.setFieldValue('cat_product_id', defaultValues?.cat_product_id || '')
    }
  }, [defaultValues])
  return (
    <div>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <Space h={'xl'} />
        <Grid>
          <Grid.Col xs={12} md={12}>
            <Text fw={700} color={'#112D3C'} size={'md'}>
              Tambah Produk
            </Text>
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <TextField
              label="Nama Produk"
              placeholder="Produk"
              required={true}
              {...form.getInputProps('name')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <SelectField
              label="Kategori"
              placeholder="Pilih kategori produk"
              required={true}
              categories={categories}
              value={form.values.cat_product_id || ''}
              onChange={(value) =>
                form.setFieldValue('cat_product_id', value || '')
              }
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <TextField
              label="Harga produk"
              placeholder="Harga"
              type="number"
              required={true}
              {...form.getInputProps('price')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={6}>
            <InputField
              label="Unggah Foto"
              placeholder="Unggah Foto"
              acceptType="image/png,image/jpeg,image/jpg"
              required={true}
              {...form.getInputProps('file')}
            />
          </Grid.Col>
          <Grid.Col xs={12} md={12}>
            <Center>
              {!preview ? (
                <Avatar
                  className={classes.placeholder}
                  size="xl"
                  sx={{ backgroundColor: '#CED4DA' }}
                >
                  <FaUserAlt />
                </Avatar>
              ) : (
                <Avatar size="xl" src={preview} />
              )}
            </Center>
          </Grid.Col>
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
