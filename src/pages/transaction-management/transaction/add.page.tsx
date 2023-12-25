import AdminLayout from '@/core/AdminLayout'
import PaymentCard, { ICartItem } from '@/core/components/cards/PaymentCard'
import ProductCard from '@/core/components/cards/ProductCard'
import CategorySelector from '@/core/components/selector/CatProductSelector'
import { getAllProductPagination } from '@/features/product-management/product/prodcut.api'
import { createPayment } from '@/features/transaction-management/payment/payment.api'
import { PaymentMethodEntity } from '@/features/transaction-management/payment/payment.model'
import { breadCrumbs } from '@/types/common'
import { Grid, Text } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

const breadCrumbs: breadCrumbs[] = [
  { title: 'Dashboard', value: 'dashboard', href: '/dashboard' },
  {
    title: 'Tabel Transaksi',
    value: 'table_transaction',
    href: '/transaction-management/transaction',
  },
  {
    title: `Tambah Produk`,
    value: `add`,
    href: '#',
  },
]

export default function AddTransactionPage() {
  const [chart, setChart] = useState<ICartItem[]>([])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(5)
  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  // Function to increase quantity for an item in the cart
  const increaseQuantity = (id: string) => {
    setChart(
      chart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    )
  }

  // Function to decrease quantity for an item in the cart
  const decreaseQuantity = (id: string) => {
    const existingItem = chart.find((cartItem) => cartItem.id === id)
    if (existingItem && existingItem.quantity > 1) {
      setChart(
        chart.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      )
    } else {
      setChart(chart.filter((cartItem) => cartItem.id !== id))
    }
  }

  // Function to remove items from the cart
  const removeItem = (id: string) => {
    setChart(chart.filter((cartItem) => cartItem.id !== id))
  }

  // Function to add items to the cart
  const addCart = (item: ICartItem) => {
    const existingItem = chart.find((cartItem) => cartItem.id === item.id)
    if (existingItem) {
      setChart(
        chart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      )
    } else {
      setChart([...chart, { ...item, quantity: 1 }])
    }
  }

  // Function to subtract items from the cart
  const substractCart = (item: ICartItem) => {
    const existingItem = chart.find((cartItem) => cartItem.id === item.id)
    if (existingItem && existingItem.quantity > 1) {
      setChart(
        chart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      )
    } else {
      setChart(chart.filter((cartItem) => cartItem.id !== item.id))
    }
  }

  const {
    data,
    isLoading: isLoadingProduct,
    error,
  } = useQuery({
    queryKey: [getAllProductPagination.name, { page, limit }],
    queryFn: () => getAllProductPagination({ page, limit }, false),
    refetchOnMount: true,
    keepPreviousData: false,
  })

  const handleSubmitForm = async (data: PaymentMethodEntity) => {
    setIsLoading(true)
    try {
      const res = await createPayment(data)
      if (res) {
        toast.success(`Produk ${data.payment_method_name} berhasil dibuat`, {
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
  const [selectedCategory, setSelectedCategory] = useState<string>('')

  // Callback saat kategori dipilih dari CategorySelector
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <AdminLayout>
      {/* Tampilkan CategorySelector */}
      <Text pb="8px" fz="md">
        Select Category Product
      </Text>
      <CategorySelector onSelectCategory={handleCategorySelect} />
      <br></br>
      {/* Grid produk */}
      {isLoadingProduct ? (
        <p>Product is loading...</p>
      ) : (
        <Grid grow>
          <Grid.Col md={8} xs={12}>
            <Grid>
              {data?.data
                ?.filter((item) => item.cat_product_id === selectedCategory) // Filter produk sesuai kategori yang dipilih
                .map((item) => (
                  <Grid.Col md={4} key={item.id}>
                    {/* ProductCard dengan pemilihan kategori */}
                    <ProductCard
                      image="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=720&amp;q=80"
                      description="Deskripsi Produk Tidak Ditemukan"
                      id={item?.id || ''}
                      price={item?.price || 0}
                      title={item?.name || 'Nama Produk Tidak Ditemukan'}
                      onClick={(item) =>
                        addCart({
                          ...item,
                          id: item.id,
                          name: item.title,
                          quantity: 1,
                          cat_product_id: selectedCategory, // Mengirim kategori yang dipilih
                        })
                      }
                    />
                  </Grid.Col>
                ))}
            </Grid>
          </Grid.Col>
          <Grid.Col md={4} xs={12}>
            {/* Menampilkan PaymentCard */}
            <PaymentCard
              carts={chart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeItem={removeItem}
            />
          </Grid.Col>
        </Grid>
      )}
    </AdminLayout>
  )
}
