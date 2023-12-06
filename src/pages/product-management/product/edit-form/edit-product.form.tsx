import { Button, Card, Grid, Text, createStyles } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useEffect, useMemo } from 'react'

import TextField from '@/core/form-fields/text-field'
import { ProductEntity } from '@/features/product-management/product/product.model'

export class ProductFormProps {
  submitState: boolean
  defaultValues: ProductEntity | null
  onFormSubmit: (values: ProductEntity) => void
}

const useStyles = createStyles(() => ({
  gridContainer: {
    margin: '10px 0 0 0',
    display: 'flex',
    justifyContent: 'center',
  },
  submitButton: {
    marginTop: '10px',
    backgroundColor: '#018B14 !important',
    border: 'none',
    color: '#fff',
  },
}))

export const ProductFormEdit = ({
  submitState,
  defaultValues,
  onFormSubmit,
}: ProductFormProps) => {
  // const SchoolList = [
  //   {
  //     label: 'Universitas Muhammadiyah Tangerang',
  //     value: '6456c7073ded35a70e486b2f',
  //   },
  // ]
  // const CourseTypeList = [
  //   {
  //     label: 'General',
  //     value: 'General',
  //   },
  //   {
  //     label: 'Specialization',
  //     value: 'Specialization',
  //   },
  // ]

  const initialValues = useMemo(() => {
    let init: ProductEntity | null = {
      id: '',
      name: '',
      price: 0,
      cat_product_id: '',
      file: '',
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
      file: (value) => (!value ? ' Product Must be Filled!' : null),
    },
  })

  useEffect(() => {
    if (initialValues) {
      form.setFieldValue('name', initialValues.name)
    }
    // console.log({ initialValues })
  }, [initialValues])

  const { classes } = useStyles()

  if (!initialValues) return null

  return (
    <Card p={'xl'} mih={600}>
      <Card.Section p={'md'}>
        {/* for form */}
        <form
          onSubmit={form.onSubmit((values: ProductEntity) => {
            onFormSubmit({
              ...values,
              id: initialValues?.id || '',
              name: initialValues?.name || '',
              price: initialValues?.price || 0,
              cat_product_id: initialValues?.cat_product_id || '',
              file: initialValues?.file || '',
            })
          })}
        >
          <Grid>
            {/* Mulai section data mahasiswa */}
            <Grid.Col xs={12} md={12}>
              <Text fw={700} color={'#112D3C'} size={'md'}>
                Edit Kategori Produk{' '}
              </Text>
            </Grid.Col>
            <Grid.Col xs={12} md={6}>
              <TextField
                label="Nama Kategori Produk"
                placeholder="Makanan, Minuman, Snack.."
                required={true}
                {...form.getInputProps('name')}
              />
            </Grid.Col>
            {/* <Grid.Col xs={12} md={6}>
              <TextField
                label="Course Code"
                placeholder="BING123, KALK222"
                required={true}
                {...form.getInputProps('course_code')}
              />
            </Grid.Col> */}

            {/* <Grid.Col xs={12} md={6}>
              <SelectField
                label="Course Type"
                placeholder="Course Type"
                required={true}
                data={CourseTypeList}
                {...form.getInputProps('course_type')}
              />
            </Grid.Col> */}

            {/* <Grid.Col xs={12} md={6}>
              <TextField
                label="Credits (SKS)"
                type="number"
                required={true}
                placeholder="Credits"
                {...form.getInputProps('credits')}
              />
            </Grid.Col> */}

            {/* <Grid.Col xs={12} md={6}>
              <SelectField
                label="School"
                placeholder="School"
                required={true}
                data={SchoolList}
                {...form.getInputProps('school_id')}
              />
            </Grid.Col> */}

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
  )
}

export default ProductFormEdit
