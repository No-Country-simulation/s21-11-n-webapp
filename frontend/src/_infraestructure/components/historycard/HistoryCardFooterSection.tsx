import { getCardFooterBGColor } from "@/_infraestructure/utils/history";
import clsx from "clsx";
import { HistoryCardFooterIcon } from "./HistoryCardFooterIcon";
import { HistoryStateType } from "@/_domain/models/history";

interface HistoryCardFooterSection {
  state: HistoryStateType;
}

export const HistoryCardFooterSection = ({
  state,
}: HistoryCardFooterSection) => {
  return (
    <div
      className={clsx(
        "flex justify-between py-1 px-3 text-slate-900 rounded-md",
        getCardFooterBGColor(state)
      )}
    >
      <div className="flex items-center">
        <HistoryCardFooterIcon state={state} />
        <div className="pl-1">{state}</div>
      </div>
    </div>
  );
};
