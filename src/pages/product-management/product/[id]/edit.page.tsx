import {
  getProductById,
  updateProduct,
} from '@/features/product-management/product/prodcut.api'
import { ProductEntity } from '@/features/product-management/product/product.model'
import ProductFormEdit from '@/pages/product-management/product/edit-form/edit-product.form'
import AdminLayout from '@core/AdminLayout'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

export default function PeriodEditPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [productData, setProductData] = useState<ProductEntity | null>(null)
  const productId = (router.query.id as string) || '0'

  const fetchPeriod = useCallback(
    async (id: string) => {
      if (productId !== '0') {
        try {
          const res = await getProductById(id)
          setProductData(res)
        } catch (error: any) {
          toast.error(`${error.message}`)
        }
      }
    },
    [productId]
  )

  useEffect(() => {
    if (productId !== '0') {
      fetchPeriod(productId)
    }
  }, [productId])

  const handleSubmit = async (payload: ProductEntity) => {
    if (payload) {
      setIsLoading(true)
      if (!!payload?.id) {
        try {
          await updateProduct(payload)
          toast.success(`Produk berhasil dibuat`, {
            position: 'bottom-center',
          })
          router.push('/product-management/product')
        } catch (error: any) {
          toast.error(`Produk gagal dibuat`, {
            position: 'bottom-center',
          })
          console.log({ error })
        } finally {
          setIsLoading(false)
        }
      } else {
        alert('Id Produk tidak ditemukan')
      }
    } else {
      alert('Something went wrong')
    }
  }

  return (
    <AdminLayout>
      <ProductFormEdit
        onFormSubmit={handleSubmit}
        defaultValues={productData}
        submitState={isLoading}
      />
    </AdminLayout>
  )
}
