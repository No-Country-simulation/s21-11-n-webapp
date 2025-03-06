import { HistoryStateType } from '@/_domain/models/history/HistoryStateType';

export const getCardFooterBGColor = (
  state: HistoryStateType
): string => {
  switch (state) {
    case 'Aprobado':
      return 'bg-green-300';
    case 'Cancelado':
      return 'bg-red-400';
    case 'Devuelto':
      return 'bg-cyan-300';
    case 'Pendiente':
      return 'bg-orange-300';
    case 'Procesando':
      return 'bg-purple-300';
    case 'Rechazado':
      return 'bg-pink-400';
    case 'Disputa':
      return 'bg-yellow-400';
    default:
      return '';
  }

}
