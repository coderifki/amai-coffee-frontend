import { Button, Card, Flex, Grid, Text, createStyles } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useEffect, useMemo } from 'react'

import { CategoryProductEntity } from '@/features/product-management/category-product/category-product.model'
import TextField from '@/core/form-fields/text-field'
import HeaderAddEdit from '@/core/components/header/HeaderAddEdit'
import { breadCrumbs } from '@/types/common'

export class CategoryProductFormProps {
  submitState: boolean
  defaultValues: CategoryProductEntity | null
  onFormSubmit: (values: CategoryProductEntity) => void
}

const breadCrumbs: breadCrumbs[] = [
  { title: 'Dashboard', value: 'dashboard', href: '/dashboard' },
  {
    title: 'Tabel Kategori Produk',
    value: 'table_category_product',
    href: '/product-management/category-product',
  },
  {
    title: `Edit Kategori Produk`,
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

export const CategoryProductFormEdit = ({
  submitState,
  defaultValues,
  onFormSubmit,
}: CategoryProductFormProps) => {
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
    let init: CategoryProductEntity | null = {
      id: '',
      // name: '',
    }
    if (defaultValues) {
      init = defaultValues
    }
    return init
  }, [defaultValues])

  const form = useForm({
    initialValues,
    validate: {
      name: (value) => (!value ? 'Category Product Must be Filled!' : null),
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
    <div>
      <HeaderAddEdit
        breadcrumbs={breadCrumbs}
        title={`Tabel Kategori Produk`}
        backUrl="/product-management/category-product"
        activePage={`add`}
      />
      <Card p={'xl'} mih={600}>
        <Card.Section p={'md'}>
          {/* for form */}
          <form
            onSubmit={form.onSubmit((values: CategoryProductEntity) => {
              onFormSubmit({
                ...values,
                id: initialValues?.id || '',
                // name: initialValues?.name || '',
              })
            })}
          >
            <Grid>
              {/* Mulai section data category product */}
              <Grid.Col xs={12} md={12}>
                <Text fw={700} color={'#112D3C'} size={'md'}>
                  Edit Kategori Produk
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
              {/* Other Grid.Cols */}
            </Grid>

            <Grid>
              <Grid.Col md={12} xs={12}>
                <Flex direction={'row'} gap={'md'} justify={'center'}>
                  <Button
                    className={classes.submitButton}
                    fullWidth
                    type="submit"
                    loading={submitState}
                  >
                    Save
                  </Button>
                </Flex>
              </Grid.Col>
            </Grid>
          </form>
        </Card.Section>
      </Card>
    </div>
  )
}

export default CategoryProductFormEdit
