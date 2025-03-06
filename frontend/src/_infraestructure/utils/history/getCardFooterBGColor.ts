import { HistoryStateType } from '@/_domain/models/history/HistoryStateType';

export const getCardFooterBGColor = (
  state: HistoryStateType
): string => {
  switch (state) {
    case 'Aprobado':
      return 'text-green-900 bg-green-100 rounded p-1 font-semibold';
    case 'Cancelado':
      return 'text-red-900 bg-red-100 rounded p-1 font-semibold';
    case 'Devuelto':
      return 'text-cyan-900 bg-cyan-100 rounded p-1 font-semibold';
    case 'Pendiente':
      return 'text-orange-900 bg-orange-100 rounded p-1 font-semibold';
    case 'Procesando':
      return 'text-purple-900 bg-purple-100 rounded p-1 font-semibold';
    case 'Rechazado':
      return 'text-pink-900 bg-pink-100 rounded p-1 font-semibold';
    case 'Disputa':
      return 'text-yellow-900 bg-yellow-100 rounded p-1 font-semibold';
    default:
      return '';
  }

}
