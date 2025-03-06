import { transformDateToDateOnlyString } from '@/_infraestructure/utils/history'
import { Icon } from '@iconify/react/dist/iconify.js'

interface HistoryCardOnlyDateSection {
  date: Date
}

export const HistoryCardOnlyDateSection = (
  { date }: HistoryCardOnlyDateSection
) => {
  return (
    <>
      <div className='flex gap-2 items-center'>
        <Icon icon="uiw:date" />
        <div>
          {transformDateToDateOnlyString(date)}
        </div>
      </div>
    </>
  )
}
