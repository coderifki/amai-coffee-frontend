import { getAllCategoryProductPagination } from '@/features/product-management/category-product/category-product.api'
import { CategoryProductEntity } from '@/features/product-management/category-product/category-product.model'
import { createStyles, Select, SelectProps } from '@mantine/core'
import { useEffect, useState } from 'react'

const useStyles = createStyles(() => ({
  selectField: {
    '& .mantine-Select-label': {
      color: '#868E96',
    },
    '& .mantine-Select-item': {
      width: '98%',
    },
    '& .mantine-Select-item[data-selected]': {
      color: '#fff',
      backgroundColor: '#018B14',
      // transition: 'all 0.5s ease-in-out',
    },
    '& .mantine-Select-item[data-selected]:hover': {
      color: '#fff',
      backgroundColor: '#018B14',
      // opacity: 0.8,
      // transition: 'all 0.5s ease-in-out',
    },
    '& .mantine-Select-item[data-hovered]': {
      color: '#fff',
      opacity: 0.8,
      backgroundColor: '#018B14',
      transition: 'all 0.3s ease-in-out',
      width: '98%',
    },
    '& .mantine-Select-input:focus-within': {
      borderColor: '#018B14',
    },
  },
}))

// interface CategoryProductEntity {
//   id: string
//   name?: string
// }

interface Props {
  label: string
  placeholder: string
  required?: boolean
  categories: CategoryProductEntity[]
  value: string
  onChange: (value: string | null) => void
}

// export default function SelectField({
//   label,
//   placeholder,
//   required = false,
//   data,
//   ...other
// }: Props & SelectProps) {
//   const { classes } = useStyles()
//   return (
//     <>
//       <Select
//         className={classes.selectField}
//         label={label}
//         placeholder={placeholder}
//         withAsterisk={required}
//         data={data}
//         clearable
//         {...other}
//       />
//     </>
//   )
// }

const SelectField: React.FC<Props> = ({
  label,
  placeholder,
  required = false,
  value,
  onChange,
  ...other
}) => {
  const { classes } = useStyles()
  const [categories, setCategories] = useState<CategoryProductEntity[]>([])

  useEffect(() => {
    // Panggil fungsi untuk mengambil data kategori dari API
    async function fetchData() {
      try {
        const response = await getAllCategoryProductPagination({
          page: 1,
          limit: 10,
        }) // Sesuaikan parameter dengan kebutuhan
        setCategories(response.data || [])
      } catch (error) {
        console.error('Failed to fetch category data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <Select
      className={classes.selectField}
      label={label}
      placeholder={placeholder}
      required={required}
      data={categories.map((category?: any) => ({
        label: category.name || '',
        value: category.id || '',
      }))}
      value={value}
      onChange={(newValue) => onChange(newValue as string)}
      clearable
      {...other}
    />
  )
}

export default SelectField
