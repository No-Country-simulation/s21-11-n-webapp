import { IHistoryCard } from '@/_domain/models/history/IHistoryCard';
import { HistoryCardCostSection } from './HistoryCardCostSection';
import { HistoryCardOnlyDateSection } from './HistoryCardOnlyDateSection';
import { HistoryCardOnlyTimeSection } from './HistoryCardOnlyTimeSection';
import { HistoryCardFooterSection } from './HistoryCardFooterSection';

export const HistoryCards = (
  { cost, date, state }: IHistoryCard
) => {

  return (
    // CARD
    <div className='border border-text rounded-md text-sm'>
      {/* CONTENT */}
      <div className='pt-6 pb-4 px-3 flex justify-between flex-wrap'>
        {/* COST */}
        <HistoryCardCostSection cost={cost} />
        {/* DATE */}
        <HistoryCardOnlyDateSection date={date} />
        {/* HOUR TIME */}
        <HistoryCardOnlyTimeSection date={date} />
      </div>
      {/* FOOTER */}
      <HistoryCardFooterSection state={state} />
    </div>
  )
}
