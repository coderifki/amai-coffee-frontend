export class PaymentMethodEntity {
  id: string
  cashier_id: string
  name_customer: string
  total_transactions: number
  payment_method_name: string
  pay: number
  created_at?: Date
  updated_at?: Date
  transaction_details: TransactionDetails[]
}
export class TransactionDetailsDto {
  product_id: string
  qty: number
}

export class CreateTransactionDto {
  name_customer: string
  total_transactions: number
  pay: number
  payment_method_name: string
  transaction_details: TransactionDetailsDto[]
}

export class TransactionDetails {
  id: string
  transaction_id?: string
  product_id?: string
  quantity: number
  name: string
  price: number
  image?: string
  category: string
}
