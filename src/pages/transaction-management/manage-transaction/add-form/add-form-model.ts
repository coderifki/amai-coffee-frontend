import { PaymentMethodEntity } from '@/features/transaction-management/payment/payment.model'

export interface SubmitCreatePayment {
  onFormSubmit: (data: PaymentMethodEntity) => void
  defaultValues?: PaymentMethodEntity
  isLoading: boolean
}
