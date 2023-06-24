export function formatNumberIndoCurrency(income: number) {
  const formattedIncome = income.toLocaleString('id-ID')
  return `Rp. ${formattedIncome},-`
}
