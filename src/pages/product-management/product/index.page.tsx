import AdminLayout from '@/core/AdminLayout'
import SearchingField from '@/core/components/fields/SearchingField'
import HeaderAddEdit from '@/core/components/header/HeaderAddEdit'
import { getAllProductPagination } from '@/features/product-management/product/prodcut.api'
import { CourseTableComponent } from '@/pages/academic/master-data/course/table/course.table'
import { ProductTableComponent } from '@/pages/product-management/product/table/product.table'
import { breadCrumbs } from '@/types/common'
import { Grid } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

const breadCrumbs: breadCrumbs[] = [
  { title: 'Dashboard', value: 'dashboard', href: '/dashboard' },
  {
    title: 'Tabel Produk',
    value: 'table_product',
    href: '#',
  },
]

export default function ProductListPage() {
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(5)
  // queries
  const { data, isLoading, error } = useQuery({
    queryKey: [getAllProductPagination.name, { page, limit }],
    queryFn: () => getAllProductPagination({ page, limit }, false),
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
        title={`Tabel Produk`}
        backUrl="/product-management/product"
        activePage={`add`}
      />
      <Grid>
        <Grid.Col span={4}>
          <SearchingField size="sm" />
        </Grid.Col>
      </Grid>
      <ProductTableComponent
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
