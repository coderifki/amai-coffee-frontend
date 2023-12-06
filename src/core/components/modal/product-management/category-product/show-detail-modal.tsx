import React from 'react'
import { Modal, Button } from '@mantine/core'
import { CategoryProductEntity } from '@/features/product-management/category-product/category-product.model'

interface ShowCategoryProductModalProps {
  isOpen: boolean
  onClose: () => void
  categoryProduct: CategoryProductEntity | null
}

const ShowCategoryProductModal: React.FC<ShowCategoryProductModalProps> = ({
  isOpen,
  onClose,
  categoryProduct,
}) => {
  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      title="Category Product Details"
      size="md"
    >
      {categoryProduct ? (
        <>
          <p>ID: {categoryProduct.id}</p>
          <p>Name: {categoryProduct.name}</p>
          {/* Add more details here based on the properties of CategoryProductEntity */}
        </>
      ) : (
        <p>Category product not found.</p>
      )}
      <Button onClick={onClose} style={{ marginTop: '16px' }}>
        Close
      </Button>
    </Modal>
  )
}

export default ShowCategoryProductModal
