import {
  CreateTransactionDto,
  PaymentMethodEntity,
} from '@/features/transaction-management/payment/payment.model'
import { apiClient } from '@core/api/base.api'
import { BasePaginatedResponse, BaseResponse } from '@core/api/base.response'
import { Builder } from 'builder-pattern'

interface GetAllPaginationRequest {
  page: number
  limit: number
}

const mockList: PaymentMethodEntity[] = [
  {
    id: '',
    cashier_id: '',
    name_customer: '',
    total_transactions: 0,
    pay: 0,
    created_at: new Date(),
    updated_at: new Date(),
    payment_method_name: 'payment 1',
    transaction_details: [],
  },
]

const mockData: PaymentMethodEntity = {
  id: '',
  cashier_id: '',
  name_customer: '',
  total_transactions: 1,
  pay: 1,
  created_at: new Date(),
  updated_at: new Date(),
  payment_method_name: 'payment 2',
  transaction_details: [],
}

// this function doesn't work because the backend doesn't yet create the payment method
export function createPayment(props: CreateTransactionDto) {
  return apiClient.post('transactions/create', props, {
    accessToken: 'token',
  })
}

export function updatePayment(props: PaymentMethodEntity) {
  return apiClient.patch(`transactions/update/${props.id}`, props)
}

export async function getPaymentById(query: string) {
  const result = await apiClient.get<BaseResponse<PaymentMethodEntity>>(
    `/transactions/find${query}`
  )
  return result.data.data
}

export async function getAllPaymentPagination(
  props: GetAllPaginationRequest,
  mock = false
) {
  const { page, limit } = props
  let result: PaymentMethodEntity[]

  const responseBuilder =
    Builder<BasePaginatedResponse<PaymentMethodEntity[]>>()
  if (!mock) {
    const fetchApi = await apiClient.get<
      BasePaginatedResponse<PaymentMethodEntity[]>
    >('/transactions', {
      params: {
        page,
        limit,
      },
    })
    result = fetchApi.data?.data || []
    responseBuilder.message(fetchApi.data?.message || '')
    responseBuilder.page(page)
    responseBuilder.per_page(limit)
    responseBuilder.total_page(fetchApi.data?.total_page || 0)
    responseBuilder.total(fetchApi.data?.total || 0)
  } else {
    result = mockList
    responseBuilder.total(2)
    responseBuilder.total_page(1)
  }
  responseBuilder.data(result)
  responseBuilder.page(page)
  responseBuilder.per_page(limit)

  return responseBuilder.build()
}
