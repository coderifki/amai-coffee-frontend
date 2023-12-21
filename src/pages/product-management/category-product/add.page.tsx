import React from 'react'
import AdminLayout from '@/core/AdminLayout'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/router'
import { breadCrumbs } from '@/types/common'
import HeaderAddEdit from '@/core/components/header/HeaderAddEdit'
import { CategoryProductEntity } from '@/features/product-management/category-product/category-product.model'
import { createCatProduct } from '@/features/product-management/category-product/category-product.api'
import CategoryProductForm from '@/pages/product-management/category-product/add-form'

const breadCrumbs: breadCrumbs[] = [
  { title: 'Dashboard', value: 'dashboard', href: '/dashboard' },
  {
    title: 'Tabel Kategori Produk',
    value: 'table_category_product',
    href: '/product-management/category-product',
  },
  {
    title: `Tambah Kategori Produk`,
    value: `add`,
    href: '#',
  },
]

export default function AddCatProductPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const handleSubmitForm = async (data: CategoryProductEntity) => {
    setIsLoading(true)
    try {
      const res = await createCatProduct(data)
      if (res) {
        toast.success(`Kategori Produk ${data.name} berhasil dibuat`, {
          position: 'bottom-center',
        })
        // console.log(res)
        router.push('/product-management/category-product')
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
        title={`Tabel Kategori Produk`}
        backUrl="/product-management/category-product"
        activePage={`add`}
      />
      <CategoryProductForm
        isLoading={isLoading}
        onFormSubmit={handleSubmitForm}
      />
    </AdminLayout>
  )
}
