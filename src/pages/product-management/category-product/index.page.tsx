import AdminLayout from '@/core/AdminLayout'
import { getAllCategoryProductPagination } from '@/features/product-management/category-product/category-prodcut.api'
import { CourseTableComponent } from '@/pages/academic/master-data/course/table/course.table'
import { CategoryProductTableComponent } from '@/pages/product-management/category-product/table/category-product.table'
import { ProductTableComponent } from '@/pages/product-management/product/table/product.table'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

export default function ProductListPage() {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(5)
  // queries
  const { data, isLoading, error } = useQuery({
    queryKey: [getAllCategoryProductPagination.name, { page, limit }],
    queryFn: () => getAllCategoryProductPagination({ page, limit }, false),
    refetchOnMount: true,
    keepPreviousData: false,
  })

  const onCurrentPageChange = (page: number) => {
    setPage(page)
  }
  // console.log({ data, isLoading, error })
  return (
    <AdminLayout>
      <CategoryProductTableComponent
        isLoading={isLoading}
        data={data?.data || []}
        pageCount={data?.total_page || 0}
        pageSize={data?.per_page || 0}
        currentPage={page}
        onCurrentPageChange={onCurrentPageChange}
      />
    </AdminLayout>
  )
}
