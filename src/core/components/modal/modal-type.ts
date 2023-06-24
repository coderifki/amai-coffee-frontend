export interface IViewResutl {
  id: string
  name: string
  open: boolean
  handleClose: (data: boolean) => void
}

type TypeModalBase = 'default' | 'delete'
type SizeModalBase = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface IModalBase extends IBase {
  title: string
  children: React.ReactNode
  type: TypeModalBase
  size?: SizeModalBase
}

export interface IAddModal extends IBase {
  type: string
}

export interface IBase {
  open: boolean
  handleClose: (data: boolean) => void
}
