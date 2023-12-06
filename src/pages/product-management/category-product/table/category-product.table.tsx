import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import {
  Button,
  Group,
  Loader,
  Pagination,
  Table as MantineTable,
  Modal,
} from '@mantine/core'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { formatNumberIndoCurrency } from '@/utils/formatNumberIndoCurrency'
import { CategoryProductEntity } from '@/features/product-management/category-product/category-product.model'
import DeleteCategoryModal from '@/core/components/modal/product-management/delete-confimration-modal'
import { deleteCatProduct } from '@/features/product-management/category-product/category-product.api'
import ShowCategoryProductModal from '@/core/components/modal/product-management/category-product/show-detail-modal'

interface CatProductTableProps {
  isLoading: boolean
  data: CategoryProductEntity[]
  pageCount: number
  pageSize: number
  currentPage: number
  onCurrentPageChange: (page: number) => void
}

export const CategoryProductTableComponent = ({
  isLoading,
  data,
  pageCount,
  pageSize,
  currentPage,
  onCurrentPageChange,
}: CatProductTableProps) => {
  const [showDetailModal, setShowDetailModal] = useState(false)
  const [selectedEntity, setSelectedEntity] =
    useState<CategoryProductEntity | null>(null)

  const handleShowDetail = (id: string) => {
    const entityToShow = data.find((item) => item.id === id)
    setSelectedEntity(entityToShow || null)
    setShowDetailModal(true) // Menggunakan setShowDetailModal untuk membuka modal
  }

  const [showModal, setShowModal] = useState(false)
  const [entityToDelete, setEntityToDelete] =
    useState<CategoryProductEntity | null>(null)

  const handleDeleteClick = (id: string) => {
    const entity = data.find((item) => item.id === id)
    setEntityToDelete(entity || null)
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const confirmDelete = async () => {
    if (entityToDelete) {
      try {
        await deleteCatProduct(entityToDelete.id)

        // Setelah penghapusan berhasil, tambahkan logika untuk memperbarui data
        // Misalnya, lakukan fetch ulang data atau manipulasi state yang menyimpan data kategori produk.
        // Contoh: const updatedData = await fetchData(); setCategoryProducts(updatedData);

        setShowModal(false)
      } catch (error) {
        console.error('Error deleting entity:', error)
        // Tampilkan pesan atau notifikasi kesalahan kepada pengguna
      }
    }
  }

  const columns = React.useMemo<ColumnDef<CategoryProductEntity>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'Categori ID',
      },
      {
        accessorKey: 'name',
        header: 'Nama',
      },
      // {
      //   accessorKey: 'price',
      //   header: 'Harga',
      //   cell: ({ getValue }) => {
      //     return (
      //       <div>{`${formatNumberIndoCurrency(Number(getValue() || 0))}`}</div>
      //     )
      //   },
      // },

      {
        id: 'actions',
        accessorKey: 'id',
        header: 'Actions',
        cell: ({ getValue }) => {
          return (
            <Group spacing="xs" noWrap>
              <Button
                variant="outline"
                size="sm"
                color="blue"
                onClick={() => handleShowDetail(String(getValue()))} // Di sini panggil fungsi handleShowDetail
              >
                Show
              </Button>
              <ShowCategoryProductModal
                isOpen={showDetailModal}
                categoryProduct={selectedEntity}
                onClose={() => setShowDetailModal(false)} // Menutup modal dengan setShowDetailModal
              />
              <Link
                href={`/product-management/category-product/${getValue()}/edit`}
              >
                <Button variant="outline" size="sm" color="yellow">
                  Edit
                </Button>
              </Link>
              <Button
                variant="outline"
                size="sm"
                color="red"
                onClick={() => handleDeleteClick(String(getValue()))} // Ubah di sini agar onClick memanggil fungsi handleDeleteClick dengan ID yang sesuai
              >
                Delete
              </Button>
              <DeleteCategoryModal
                isOpen={showModal} // Gunakan showModal di sini untuk mengontrol keberadaan modal
                onClose={handleCloseModal}
                id={entityToDelete?.id || ''}
                onDelete={confirmDelete} // Ubah menjadi confirmDelete agar ketika modal dikonfirmasi, fungsi penghapusan dipanggil
              />
            </Group>
          )
        },
      },
    ],
    []
  )

  const [customLoading, setCustomLoading] = React.useState(isLoading)

  useEffect(() => {
    setCustomLoading(isLoading)
  }, [isLoading])

  const [reactTableIndex, setReactTableIndex] = React.useState(currentPage)

  useEffect(() => {
    setReactTableIndex(currentPage - 1)
  }, [currentPage])

  const pagination = React.useMemo(
    () => ({
      pageIndex: reactTableIndex,
      pageSize,
    }),
    [reactTableIndex, pageSize]
  )

  const reactTable = useReactTable<CategoryProductEntity>({
    data: data,
    getCoreRowModel: getCoreRowModel(),
    // onStateChange(updater: Updater<TableState>): void {},
    renderFallbackValue: undefined,
    state: {
      pagination,
    },
    columns: columns,
    manualPagination: true,
    debugTable: true,
  })

  return (
    <div>
      <h1>Manage Category Product</h1>
      {customLoading ? (
        <Loader />
      ) : (
        <div className={'overflow-x-auto'}>
          <MantineTable className={'table-auto'}>
            <thead>
              {reactTable?.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <th key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder ? null : (
                          <div>
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </div>
                        )}
                      </th>
                    )
                  })}
                </tr>
              ))}
            </thead>
            <tbody>
              {reactTable?.getRowModel().rows.map((row) => {
                return (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </MantineTable>
          <Pagination
            total={pageCount}
            onChange={(page) => {
              const index = page - 1
              // console.log('page', page)
              reactTable.setPageIndex(index)

              onCurrentPageChange(page)
            }}
            onPreviousPage={() => {
              reactTable.previousPage()
            }}
            onNextPage={() => {
              reactTable.nextPage()
            }}
            onFirstPage={() => {
              reactTable.setPageIndex(0)
            }}
            onLastPage={() => {
              reactTable.setPageIndex(reactTable.getPageCount() - 1)
            }}
            value={reactTable.getState().pagination.pageIndex + 1}
            // page={currentPage}

            // onChange={setCurrent}
          />
          {/* Modal konfirmasi penghapusan */}
          {showModal && entityToDelete && (
            <Modal
              title="Konfirmasi Penghapusan"
              onClose={() => setShowModal(false)}
              size="sm"
              opened
            >
              <div>Anda yakin ingin menghapus {entityToDelete.name}?</div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  marginTop: '16px',
                }}
              >
                <Button
                  variant="outline"
                  color="red"
                  onClick={() => confirmDelete()}
                >
                  Hapus
                </Button>
                <Button
                  style={{ marginLeft: '8px' }}
                  onClick={() => setShowModal(false)}
                >
                  Batal
                </Button>
              </div>
            </Modal>
          )}
        </div>
      )}
    </div>
  )
}
