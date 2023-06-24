export interface IFaculty extends IAddForm {
  faculty_id?: string | undefined
  school_id?: string | undefined
  created_by?: string | undefined
}

export interface IFormProps {
  onFormSubmit: (data: IFaculty) => void
  defaultValues?: IFaculty
  isLoading: boolean
}

export interface IAddForm {
  faculty_name?: string | undefined
}
