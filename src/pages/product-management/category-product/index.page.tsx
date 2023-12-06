import AdminLayout from '@/core/AdminLayout'
import HeaderAddEdit from '@/core/components/header/HeaderAddEdit'
import { getAllCategoryProductPagination } from '@/features/product-management/category-product/category-product.api'
import { CourseTableComponent } from '@/pages/academic/master-data/course/table/course.table'
import { CategoryProductTableComponent } from '@/pages/product-management/category-product/table/category-product.table'
import { ProductTableComponent } from '@/pages/product-management/product/table/product.table'
import { breadCrumbs } from '@/types/common'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const breadCrumbs: breadCrumbs[] = [
  { title: 'Dashboard', value: 'dashboard', href: '/dashboard' },
  {
    title: 'Tabel Kategori Produk',
    value: 'table_category_product',
    href: '#',
  },
]

export default function CategoryProductListPage() {
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
      <HeaderAddEdit
        breadcrumbs={breadCrumbs}
        title={`Tabel Kategori Produk`}
        backUrl="/product-management/category-product"
        activePage={`add`}
      />
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
