export const selectDataPerPage = [
  { value: '5', label: '5 Row' },
  { value: '10', label: '10 Row' },
  { value: '15', label: '15 Row' },
  { value: '20', label: '20 Row' },
]
export const dummyDataTable = [
  {
    id: '1',
    avatar:
      'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    name: 'Robert Wolfkisser',
    job: 'Engineer',
    email: 'rob_wolf@gmail.com',
    nim: '123456789',
    nik: '123456789',
    start_date: '2021-01-01',
  },
  {
    id: '2',
    avatar:
      'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    name: 'Jill Jailbreaker',
    job: 'Engineer',
    email: 'jj@breaker.com',
    nim: '123456789',
    nik: '123456789',
    start_date: '2021-01-01',
  },
  {
    id: '3',
    avatar:
      'https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    name: 'Henry Silkeater',
    job: 'Designer',
    email: 'henry@silkeater.io',
    nim: '123456789',
    nik: '123456789',
    start_date: '2021-01-01',
  },
]

export const dummyBaseDataTable = [
  {
    id: '1',
    avatar:
      'https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    name: 'Robert Wolfkisser',
    email: 'rob_wolf@gmail.com',
    nim: '123456789',
    nik: '123456789',
    start_date: '2021-01-01',
  },
  {
    id: '2',
    avatar:
      'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    name: 'Jill Jailbreaker',
    email: 'jj@breaker.com',
    nim: '123456789',
    nik: '123456789',
    start_date: '2021-01-01',
  },
  {
    id: '3',
    avatar:
      'https://images.unsplash.com/photo-1632922267756-9b71242b1592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    name: 'Henry Silkeater',
    email: 'henry@silkeater.io',
    nim: '123456789',
    nik: '123456789',
    start_date: '2021-01-01',
  },
]

export const dummyParentsGuardiansTable = [
  {
    id: '1',
    name: 'Robert Wolfkisser',
    nik: '123456789',
    birthDate: '2021-01-01',
    education: 'S1',
    job: 'Engineer',
    income: 1000000,
  },
  // make randon value from above Object
  {
    id: '2',
    name: 'Jill Jailbreaker',
    nik: '123456789',
    birthDate: '2021-01-01',
    education: 'S1',
    job: 'Engineer',
    income: 2200000,
  },
  {
    id: '3',
    name: 'Henry Silkeater',
    nik: '123456789',
    birthDate: '2021-01-01',
    education: 'S1',
    job: 'Designer',
    income: 3500000,
  },
]

export const dummyPaymentsTable = [
  {
    id: '1',
    paymentType: 'Transfer',
    transactionNumber: '123456789',
    amount: 1000000,
    status: 'Pending',
  },
  // make randon value from above Object
  {
    id: '2',
    paymentType: 'Transfer',
    transactionNumber: '123456789',
    amount: 200000,
    status: 'Pending',
  },
  {
    id: '3',
    paymentType: 'Transfer',
    transactionNumber: '123456789',
    amount: 3500000,
    status: 'Pending',
  },
]

export const dummyAttendanceTable = [
  {
    id: '1',
    academicCourse: 'S1',
    academicCode: '123456789',
    academicClass: 'A',
    dateTime: new Date('2021-01-01').getTime(),
    status: 'Pending',
    detail: '-',
  },
  // make randon value from above Object
  {
    id: '2',
    academicCourse: 'S1',
    academicCode: '123456789',
    academicClass: 'A',
    dateTime: new Date('2021-01-01').getTime(),
    status: 'Pending',
    detail: '-',
  },
  {
    id: '3',
    academicCourse: 'S1',
    academicCode: '123456789',
    academicClass: 'A',
    dateTime: new Date('2021-01-01').getTime(),
    status: 'Pending',
    detail: '-',
  },
]
