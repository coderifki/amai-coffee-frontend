import {
  Avatar,
  Button,
  Card,
  Center,
  Grid,
  Text,
  createStyles,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import React, { useEffect, useMemo, useState } from 'react'

import InputField from '@/core/form-fields/input-field'
import SelectField from '@/core/form-fields/select-field'
import TextField from '@/core/form-fields/text-field'
import { ProductEntity } from '@/features/product-management/product/product.model'
import { FaUserAlt } from 'react-icons/fa'
import { getEnabledCategories } from 'trace_events'
import { breadCrumbs } from '@/types/common'
import HeaderAddEdit from '@/core/components/header/HeaderAddEdit'
import { CategoryProductEntity } from '@/features/product-management/category-product/category-product.model'

export class ProductFormProps {
  submitState: boolean
  defaultValues: ProductEntity | null
  onFormSubmit: (values: ProductEntity) => void
}

const breadCrumbs: breadCrumbs[] = [
  { title: 'Dashboard', value: 'dashboard', href: '/dashboard' },
  {
    title: 'Tabel Produk',
    value: 'table_product',
    href: '/product-management/product',
  },
  {
    title: `Edit Produk`,
    value: `add`,
    href: '#',
  },
]

const useStyles = createStyles(() => ({
  gridContainer: {
    margin: '10px 0 0 0',
    display: 'flex',
    justifyContent: 'center',
  },
  submitButton: {
    marginTop: '10px',
    backgroundColor: '#BCA37F !important',
    border: 'none',
    color: '#fff',
  },
}))

export const ProductFormEdit = ({
  submitState,
  defaultValues,
  onFormSubmit,
}: ProductFormProps) => {
  const [categories, setCategories] = useState<CategoryProductEntity[]>([])

  const initialValues = useMemo(() => {
    let init: ProductEntity | null = {
      id: '',
      cat_product_id: '',
      name: '',
      price: 0,
      images: '',
    }
    if (defaultValues) {
      init = defaultValues
    }
    return init
  }, [defaultValues])

  const form = useForm({
    initialValues,
    validate: {
      name: (value) => (!value ? ' Product Must be Filled!' : null),
      price: (value) => (!value ? ' Product Must be Filled!' : null),
      cat_product_id: (value) => (!value ? ' Product Must be Filled!' : null),
      images: (value) => (!value ? ' Product Must be Filled!' : null),
    },
  })

  const preview =
    form?.values?.images && typeof form?.values?.images !== 'string'
      ? URL.createObjectURL(form?.values?.images as Blob)
      : `http://localhost:3000/api/files?path=${form?.values?.images as string}`

  const handleImageChanges = (file: any) => {
    console.log('Image changes', file)
  }

  React.useEffect(() => {
    if (defaultValues) {
      console.log({ defaultValues })
      form.setFieldValue('id', defaultValues?.id || '')
      form.setFieldValue('name', defaultValues?.name || '')
      form.setFieldValue('price', defaultValues?.price || 0)
      form.setFieldValue('cat_product_id', defaultValues?.cat_product_id || '')
      form.setFieldValue('images', defaultValues?.images || '')
    }
  }, [defaultValues])

  const { classes } = useStyles()

  if (!initialValues) return null

  return (
    <div>
      <HeaderAddEdit
        breadcrumbs={breadCrumbs}
        title={`Tabel Produk`}
        backUrl="/product-management/product"
        activePage={`add`}
      />
      <Card p={'xl'} mih={600}>
        <Card.Section p={'md'}>
          {/* for form */}
          <form
            onSubmit={form.onSubmit((values: ProductEntity) => {
              onFormSubmit({
                ...values,
                id: initialValues?.id || '',
                // name: initialValues?.name || '',
                // price: initialValues?.price || 0,
                // cat_product_id: initialValues?.cat_product_id || '',
                // images: initialValues?.images || '' || null,
              })
            })}
          >
            <Grid>
              {/* Mulai section data mahasiswa */}
              <Grid.Col xs={12} md={12}>
                <Text fw={700} color={'#112D3C'} size={'md'}>
                  Edit Produk{' '}
                </Text>
              </Grid.Col>
              <Grid.Col xs={12} md={6}>
                <TextField
                  label="Nama Produk"
                  placeholder="Nasi Goreng, Mie Goreng, Kopi, Teh Manis.."
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
                  {...form.getInputProps('images')}
                />
              </Grid.Col>
              <Grid.Col xs={12} md={12}>
                <Center>
                  {!preview ? (
                    <Avatar
                      // className={classes.placeholder}
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

              <Button
                className={classes.submitButton}
                fullWidth
                type="submit"
                loading={submitState}
              >
                Save
              </Button>
            </Grid>
          </form>
        </Card.Section>
      </Card>
    </div>
  )
}

export default ProductFormEdit
