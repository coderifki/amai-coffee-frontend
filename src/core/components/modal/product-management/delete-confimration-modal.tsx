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

  const handleDelete = async () => {
    setLoading(true)
    try {
      await deleteCatProduct(id) // Panggil fungsi penghapusan
      onDelete() // Panggil fungsi setelah penghapusan berhasil
    } catch (error) {
      // Tangani error jika ada
      console.error('Failed to delete category:', error)
    } finally {
      setLoading(false)
      onClose() // Tutup modal setelah penghapusan selesai atau gagal
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
