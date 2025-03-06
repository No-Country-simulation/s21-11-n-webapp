import { transformCostToString } from "@/_infraestructure/utils/history";
import { Icon } from "@iconify/react/dist/iconify.js";

interface HistoryCardCostProps {
  cost: number;
}

export const HistoryCardCostSection = ({ cost }: HistoryCardCostProps) => {
  return (
    <div className="flex text-xl font-semibold px-3 text-primary gap-2 items-center">
      <Icon icon="streamline:money-cash-coins-stack-accounting-billing-payment-stack-cash-coins-currency-money-finance" />
      <div>${transformCostToString(cost)}</div>
    </div>
  );
};
