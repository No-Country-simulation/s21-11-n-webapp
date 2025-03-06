import { transformDateToTimeOnlyString } from '@/_infraestructure/utils/history'
import { Icon } from '@iconify/react/dist/iconify.js'

interface HistoryCardOnlyTimeSectionProps {
  date: Date
}

export const HistoryCardOnlyTimeSection = (
  { date }: HistoryCardOnlyTimeSectionProps
) => {
  return (
    <div className='flex gap-1 items-center text-text'>
      <Icon icon="tabler:clock-hour-3" />
      <div>
        {transformDateToTimeOnlyString(date)}
      </div>
    </div>
  )
}
