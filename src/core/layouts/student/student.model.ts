export interface IStudentsForm extends IFinaceForm {
  nim: string
  name: string
  registerRoad: string
  registerType: string
  dateIn: Date | string
  dateStart: Date | string
  prodiCode: string
  file: File | string
}

export interface IInformationForm extends IDomisiliForm, IKps {
  birthPlace: string
  birthDate: string
  gender: string
  nik: string
  religion: string
  nisn: string
  npwp: string
  citizen: string
  email: string
  transportation: string
  phone: string
  mobilePhone: string
}

export interface IDomisiliForm {
  roadName: string
  rtRw: string
  village: string
  subDistrict: string
  province: string
  district: string
  postCode: string
  typeOfStay: string
}

export interface IKps {
  haveKps?: string
  kpsNumber?: string
}

export interface IParentsForm extends IGuardianForm {
  fatherNik: string
  fatherName: string
  fatherDateBirth: Date | string
  fatherJob: string
  fatherIncome: string
  fatherEducation: string
  motherNik: string
  motherName: string
  motherDateBirth: Date | string
  motherJob: string
  motherIncome: string
  motherEducation: string
}

export interface IGuardianForm {
  guardianNik: string
  guardianName: string
  guardianDateBirth: Date | string
  guardianJob: string
  guardianIncome: string
  guardianEducation: string
}

export interface IFinaceForm {
  typeOfPayment: string
  amountOfPaymnet: string
  acceptedSks: string
  university: string
  studyProgram: string
}

export type IStudents = {
  form1?: IStudentsForm
  form2?: IInformationForm
  // form3?: IDomisiliForm
  // form4?: IKps
  form3?: IParentsForm
  // form6?: IFinaceForm
}

export interface IDetailStudent
  extends IStudentsForm,
    IInformationForm,
    IParentsForm {}
