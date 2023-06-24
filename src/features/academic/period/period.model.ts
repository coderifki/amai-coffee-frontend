export class PeriodEntity {
  period_id: string
  period_name: string //TA. 2021/2022, TA. 2021/2022, TA. 2020/2021
  period_code: string //20212, 20213, 20202
  term_type: string // gasal genap pendek
  period_status: string // active inactive
  start_date: Date | string
  end_date: Date | string
  school_id: string
}
