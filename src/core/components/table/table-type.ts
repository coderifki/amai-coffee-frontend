export type BaseTableType =
  | 'student'
  | 'default'
  | 'faculty'
  | 'teacher'
  | 'none'

export enum BaseTableTypeEnum {
  student = 'Mahasiswa',
  default = 'default',
  faculty = 'Fakultas',
  teacher = 'Dosen',
  none = 'none',
}

export type BaseTableActionType =
  | 'add'
  | 'edit'
  | 'delete'
  | 'detail'
  | 'view_result'

export interface IBaseTable {
  data: any[]
  headerTable: string[]
  type: BaseTableType
  // action: 'none' | 'student' | 'default'
  BaseTableActionType: BaseTableActionType[] | []
  isLoading: boolean
  page: number
  limit: number
  total: number
  onPageChange: (page: number) => void
  onLimitChange: (limit: number) => void
  onSearchingChange: (searchingName: string) => void
  refech: () => void
}
