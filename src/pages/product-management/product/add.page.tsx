import React from 'react'
import AdminLayout from '@/core/AdminLayout'
import ProductForm from '@/pages/product-management/product/add-form'
import {
  CreateProductProps,
  ProductEntity,
} from '@/features/product-management/product/product.model'
import { createProduct } from '@/features/product-management/product/prodcut.api'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/router'
import { breadCrumbs } from '@/types/common'
import HeaderAddEdit from '@/core/components/header/HeaderAddEdit'

const breadCrumbs: breadCrumbs[] = [
  { title: 'Dashboard', value: 'dashboard', href: '/dashboard' },
  {
    title: 'Tabel Produk',
    value: 'table_product',
    href: '/product-management/product',
  },
  {
    title: `Tambah Produk`,
    value: `add`,
    href: '#',
  },
]

export default function AddProductPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const handleSubmitForm = async (data: CreateProductProps) => {
    setIsLoading(true)
    try {
      console.log(data)

      // create new form data
      const formData = new FormData()

      // append all from data to formData
      formData.append('name', data.name)
      formData.append('price', data.price.toString())
      formData.append('cat_product_id', data.cat_product_id)
      if (data.image !== undefined) {
        formData.append('image', data.image as Blob)
      }

      const res = await createProduct(formData)
      if (res) {
        toast.success(`Produk ${data.name} berhasil dibuat`, {
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

  return (
    <AdminLayout>
      <HeaderAddEdit
        breadcrumbs={breadCrumbs}
        title={`Tabel Produk`}
        backUrl="/product-management/product"
        activePage={`add`}
      />
      <ProductForm isLoading={isLoading} onFormSubmit={handleSubmitForm} />
    </AdminLayout>
  )
}
