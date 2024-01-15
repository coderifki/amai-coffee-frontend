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
      // console.log(payload)
      if (!!payload?.id) {
        try {
          console.log(payload)
          setIsLoading(true)
          const formData = new FormData()
          formData.append('id', payload.id)
          payload.name && formData.append('name', payload.name)
          payload.price && formData.append('price', payload.price.toString())
          if (payload.cat_product_id) {
            formData.append('cat_product_id', payload.cat_product_id)
          }
          if (payload.images && typeof payload.images !== 'string') {
            formData.append('image', payload.images as Blob)
          }
          // console.log(formData.get('images'))
          await updateProduct(formData)
          toast.success(`Produk berhasil di ubah`, {
            position: 'bottom-center',
          })
          router.push('/product-management/product')
        } catch (error: any) {
          toast.error(`Produk gagal diubah`, {
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
