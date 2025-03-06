import { HistoryStateType } from '@/_domain/models/history/HistoryStateType';
import { Icon } from '@iconify/react/dist/iconify.js';

interface HistoryCardFooterIconProps {
  state: HistoryStateType
}

export const HistoryCardFooterIcon = (
  { state }: HistoryCardFooterIconProps,
) => {
  switch (state) {
    case 'Aprobado': return <Icon icon="raphael:checked" />
    case 'Cancelado': return <Icon icon="emojione-v1:cancellation-x" />
    case 'Devuelto': return <Icon icon="healthicons:refused-24px" />
    case 'Disputa': return <Icon icon="heroicons-outline:exclamation" />
    case 'Pendiente': return <Icon icon="mdi:clock" />
    case 'Procesando': return <Icon icon="lsicon:working-odd-filled" />
    case 'Rechazado': return <Icon icon="healthicons:refused-negative" />
    default: return <></>
  }
}
