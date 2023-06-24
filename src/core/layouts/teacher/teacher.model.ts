export interface ITeacherTableData {
  name: string
  email: string
  nidn: string
  title: string
  areas_of_expertise: string
}

export interface ITeacherForm {
  name: string
  email: string
  title: string
  experience: string
  position: string
  nidn: string
  areas_of_expertise: string
  education: string
  scientific_publications: string
  phone: string
  avatar: File | string
}
