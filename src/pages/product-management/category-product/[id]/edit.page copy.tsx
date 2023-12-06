import AdminLayout from '@core/AdminLayout'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

import { CategoryProductEntity } from '@/features/product-management/category-product/category-product.model'
import {
  getCategoryProductById,
  updateCatProduct,
} from '@/features/product-management/category-product/category-product.api'
import CategoryProductFormEdit from '@/pages/product-management/category-product/edit-form/edit-catproduct.form'

export default function PeriodEditPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [categoryproductData, setCategoryProductData] =
    useState<CategoryProductEntity | null>(null)
  const categoryproductId = (router.query.id as string) || '0'

  const fetchPeriod = useCallback(
    async (id: string) => {
      if (categoryproductId !== '0') {
        try {
          const res = await getCategoryProductById(id)
          setCategoryProductData(res)
        } catch (error: any) {
          toast.error(`${error.message}`)
        }
      }
    },
    [categoryproductId]
  )

  useEffect(() => {
    if (categoryproductId !== '0') {
      fetchPeriod(categoryproductId)
    }
  }, [categoryproductId])

  const handleSubmit = async (payload: CategoryProductEntity) => {
    // if (payload) {
    setIsLoading(true)
    // if (!!payload.id) {
    try {
      const res = await updateCatProduct(payload)
      // toast.success(`Kategori produk berhasil dibuat`, {
      //   position: 'bottom-center',
      // })
      // console.log(payload)
      // router.push('/product-management/category-product')
      if (res) {
        toast.success(`Kategori Produk ${payload.name} berhasil dibuat`, {
          position: 'bottom-center',
        })
        console.log(res)
        router.push('/product-management/category-product')
      }
    } catch (error: any) {
      toast.error(`Kategori produk gagal dibuat`, {
        position: 'bottom-center',
      })
      console.log({ error })
    } finally {
      setIsLoading(false)
    }
    // } else {
    //   alert('Id kategori produk tidak ditemukan')
    // }
    // } else {
    //   alert('Something went wrong')
    // }
  }

  return (
    <AdminLayout>
      <CategoryProductFormEdit
        onFormSubmit={handleSubmit}
        defaultValues={categoryproductData}
        submitState={isLoading}
      />
    </AdminLayout>
  )
}
