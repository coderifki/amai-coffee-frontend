import {
  BaseTableType,
  BaseTableTypeEnum,
} from '@/core/components/table/table-type'

export const getNameTypeBaseTable = (type: BaseTableType): string => {
  return BaseTableTypeEnum[type] || ''
}
