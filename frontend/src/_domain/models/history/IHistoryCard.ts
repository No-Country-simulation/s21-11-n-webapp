import { HistoryStateType } from './HistoryStateType';

export interface IHistoryCard {
  id?: number,
  cost: number,
  date: Date,
  state: HistoryStateType,
}
