import { deleteProduct } from '@/features/product-management/product/prodcut.api'
import { ProductEntity } from '@/features/product-management/product/product.model'
import { Button, Modal } from '@mantine/core'
import React, { useState } from 'react'

interface DeleteProductModalProps {
  isOpen: boolean
  onClose: () => void
  id: string
  // data: ProductProductEntity[]
  onDelete: () => void
}

const DeleteProductModal: React.FC<DeleteProductModalProps> = ({
  isOpen,
  onClose,
  id,
  // data,
  onDelete,
}) => {
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState<ProductEntity[]>([])

  // Function to fetch updated data after deletion
  const fetchData = async () => {
    try {
      const response = await fetch('/products/find') // Replace with your actual API endpoint
      const data = await response.json()
      return data // Assuming your API returns an array of  products
    } catch (error) {
      console.error('Error fetching updated data:', error)
      throw new Error('Failed to fetch updated data')
    }
  }

  // Function to update data after successful deletion
  const handleDataUpdate = async () => {
    try {
      const updatedData = await fetchData() // Fetch updated data
      setProducts(updatedData) // Update state with fetched data
    } catch (error) {
      console.error('Failed to update data:', error)
      // Handle error: Display an error message or notification to the user
    }
  }

  const handleDelete = async () => {
    setLoading(true)
    try {
      await deleteProduct(id)
      onDelete() // Trigger the onDelete function after successful deletion
      await handleDataUpdate() // Update data after successful deletion
    } catch (error) {
      console.error('Failed to delete product:', error)
    } finally {
      setLoading(false)
      onClose() // Close the modal after deletion (whether success or failure)
    }
  }

  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      title="Delete Product"
      size="sm"
      withCloseButton={!loading}
      // hideOverlay={!loading}
    >
      <p>Are you sure you want to delete this product?</p>
      <Button onClick={handleDelete} color="red" disabled={loading}>
        {loading ? 'Deleting...' : 'Delete'}
      </Button>
    </Modal>
  )
}

export default DeleteProductModal
