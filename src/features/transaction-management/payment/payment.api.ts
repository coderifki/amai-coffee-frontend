import { PaymentMethodEntity } from '@/features/transaction-management/payment/payment.model'
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
    payment_method_id: '1',
    payment_method_name: 'payment 1',
    payment_amount: '120000',
    customer_name: 'Bekih',
  },
]

const mockData: PaymentMethodEntity = {
  id: '',
  payment_method_id: '2',
  payment_method_name: 'payment 2',
  payment_amount: '12000',
  customer_name: 'Bekah',
}

// this function doesn't work because the backend doesn't yet create the payment method
export function createPayment(props: PaymentMethodEntity) {
  return apiClient.post('categoryproducts/create', props, {
    accessToken: 'token',
  })
}

export function updatePayment(props: PaymentMethodEntity) {
  return apiClient.patch(
    `categoryproducts/update/${props.payment_method_id}`,
    props
  )
}

export async function getPaymentById(query: string) {
  const result = await apiClient.get<BaseResponse<PaymentMethodEntity>>(
    `/categoryproducts/find${query}`
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
    >('/categoryproducts', {
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
