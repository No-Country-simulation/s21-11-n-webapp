import { transformCostToString } from '@/_infraestructure/utils/history'
import { Icon } from '@iconify/react/dist/iconify.js'

interface HistoryCardCostProps {
  cost: number,
}

export const HistoryCardCostSection = (
  { cost }: HistoryCardCostProps
) => {
  return (
    <div className='flex gap-2 items-center'>
      <Icon icon="streamline:money-cash-coins-stack-accounting-billing-payment-stack-cash-coins-currency-money-finance"
      />
      <div>
        ${transformCostToString(cost)}
      </div>
    </div>
  )
}
