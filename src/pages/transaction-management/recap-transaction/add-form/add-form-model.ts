import { ICartItem } from '@/core/components/cards/PaymentCard'
import { PaymentMethodEntity } from '@/features/transaction-management/payment/payment.model'

export interface SubmitCreateTransaction {
  onFormSubmit: (data: PaymentMethodEntity) => void
  defaultValues?: PaymentMethodEntity
  isLoading: boolean
  amount: number
  carts: ICartItem[]
}
