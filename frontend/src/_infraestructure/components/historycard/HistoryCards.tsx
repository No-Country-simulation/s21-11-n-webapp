import { IHistoryCard } from "@/_domain/models/history/IHistoryCard";
import { HistoryCardCostSection } from "./HistoryCardCostSection";
import { HistoryCardOnlyDateSection } from "./HistoryCardOnlyDateSection";
import { HistoryCardOnlyTimeSection } from "./HistoryCardOnlyTimeSection";
import { HistoryCardFooterIcon } from "./HistoryCardFooterIcon";
import clsx from "clsx";
import { getCardFooterBGColor } from "@/_infraestructure/utils/history";
import HistoryButton from "./HistoryButton";

export const HistoryCards = ({ cost, date, state, id }: IHistoryCard) => {
  return (
    // CARD
    <div className="border border-surface-b min-w-xs transition-colors bg-surface-a p-3 hover:bg-surface-a/50 text-sm">
      {/* COST */}
      <HistoryCardCostSection cost={cost} />
      {/* CONTENT */}
      <div className="px-3 py-2 flex justify-between flex-wrap">
        {/* DATE */}
        <HistoryCardOnlyDateSection date={date} />
        {/* HOUR TIME */}
        <HistoryCardOnlyTimeSection date={date} />

        <div className={clsx("flex items-center", getCardFooterBGColor(state))}>
          <HistoryCardFooterIcon state={state} />
          <div className="pl-1">{state}</div>
        </div>
      </div>
      <div className="w-full flex items-center justify-end">
        <HistoryButton historyId={id!} />
      </div>
    </div>
  );
};
