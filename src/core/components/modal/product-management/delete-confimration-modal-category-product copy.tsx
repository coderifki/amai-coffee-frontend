import React, { useState } from 'react'
import { Modal, Button } from '@mantine/core'
import { deleteCatProduct } from '@/features/product-management/category-product/category-product.api'
import { CategoryProductEntity } from '@/features/product-management/category-product/category-product.model'

interface DeleteCategoryModalProps {
  isOpen: boolean
  onClose: () => void
  id: string
  // data: CategoryProductEntity[]
  onDelete: () => void
}

const DeleteCategoryModal: React.FC<DeleteCategoryModalProps> = ({
  isOpen,
  onClose,
  id,
  // data,
  onDelete,
}) => {
  const [loading, setLoading] = useState(false)
  const [categoryProducts, setCategoryProducts] = useState<
    CategoryProductEntity[]
  >([])

  // Function to fetch updated data after deletion
  const fetchData = async () => {
    try {
      const response = await fetch('/categoryproducts/find') // Replace with your actual API endpoint
      const data = await response.json()
      return data // Assuming your API returns an array of category products
    } catch (error) {
      console.error('Error fetching updated data:', error)
      throw new Error('Failed to fetch updated data')
    }
  }

  // Function to update data after successful deletion
  const handleDataUpdate = async () => {
    try {
      const updatedData = await fetchData() // Fetch updated data
      setCategoryProducts(updatedData) // Update state with fetched data
    } catch (error) {
      console.error('Failed to update data:', error)
      // Handle error: Display an error message or notification to the user
    }
  }

  const handleDelete = async () => {
    setLoading(true)
    try {
      await deleteCatProduct(id)
      onDelete() // Trigger the onDelete function after successful deletion
      await handleDataUpdate() // Update data after successful deletion
    } catch (error) {
      console.error('Failed to delete category:', error)
    } finally {
      setLoading(false)
      onClose() // Close the modal after deletion (whether success or failure)
    }
  }

  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      title="Delete Category"
      size="sm"
      withCloseButton={!loading}
      // hideOverlay={!loading}
    >
      <p>Are you sure you want to delete this category?</p>
      <Button onClick={handleDelete} color="red" disabled={loading}>
        {loading ? 'Deleting...' : 'Delete'}
      </Button>
    </Modal>
  )
}

export default DeleteCategoryModal
