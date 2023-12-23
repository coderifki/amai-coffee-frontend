import React, { useEffect, useState } from 'react'
import { Select, createStyles } from '@mantine/core'
import { getAllCategoryProductPagination } from '@/features/product-management/category-product/category-product.api'
import { CategoryProductEntity } from '@/features/product-management/category-product/category-product.model'

const useStyles = createStyles(() => ({
  categorySelector: {
    '& .mantine-Select-label': {
      color: '#3f83f980',
    },
    '& .mantine-Select-item': {
      width: '98%',
      marginTop: '5px',
      marginBottom: '5px',
    },
    '& .mantine-Select-item[data-selected]': {
      color: '#fff',
      backgroundColor: '#1c7ed6',
    },
    '& .mantine-Select-item[data-selected]:hover': {
      color: '#fff',
      backgroundColor: '#1c7ed6',
    },
    '& .mantine-Select-item[data-hovered]': {
      color: '#fff',
      opacity: 0.8,
      backgroundColor: '#3f83f980',
      transition: 'background-color 0.3s ease-in-out, color 0.3s ease-in-out',

      width: '98%',
    },
    '& .mantine-Select-input:focus-within': {
      borderColor: '#3f83f980',
    },
  },
}))

interface CategorySelectorProps {
  onSelectCategory: (category: string) => void
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  onSelectCategory,
}) => {
  const { classes } = useStyles()
  const [categories, setCategories] = useState<CategoryProductEntity[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllCategoryProductPagination({
          page: 1,
          limit: 10,
        })

        // const response = response.data?.map((category) => category.name) || []
        setCategories(response.data || [])
      } catch (error) {
        // Handle error fetching categories
        console.error('Error fetching categories:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <Select
      className={classes.categorySelector}
      data={categories.map((category) => ({
        label: category.name || '',
        value: category.id || '',
      }))}
      placeholder="Pilih Kategori"
      onChange={(value) => onSelectCategory(value as string)}
    />
  )
}

export default CategorySelector
