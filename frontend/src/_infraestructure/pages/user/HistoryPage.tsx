import { IHistoryCard } from '@/_domain/models/history/IHistoryCard';
import { HistoryCards } from '@/_infraestructure/components/historycard/HistoryCards';
import AnimatedPage from "@/_infraestructure/components/layout/pages/AnimatedPage";

const temporalCards: IHistoryCard[] = [
  {
    id: 1,
    cost: 125.2,
    date: new Date('07-30-2024 15:12'),
    state: 'Aprobado',
  },
  {
    id: 2,
    cost: 513,
    date: new Date('12-15-2023 21:23'),
    state: 'Devuelto',
  },
  {
    id: 3,
    cost: 456.999455,
    date: new Date('12-15-2023 21:23'),
    state: 'Pendiente',
  },
  {
    id: 4,
    cost: 456.999455,
    date: new Date('12-15-2023 21:23'),
    state: 'Procesando',
  },
  {
    id: 5,
    cost: 456.999455,
    date: new Date('12-15-2023 21:23'),
    state: 'Rechazado',
  },
  {
    id: 6,
    cost: 456.999455,
    date: new Date('05-21-2023 06:03'),
    state: 'Disputa',
  },
  {
    id: 7,
    cost: 456.999455,
    date: new Date('12-15-2023 21:23'),
    state: 'Cancelado',
  },
]

const HistoryPage = () => {
  return (
    <AnimatedPage>
      <div className='
        max-w-6xl mx-auto min-h-[70vh]
      '>
        <h1 className='
          px-4
          md:px-10
        '>
          Historial
        </h1>
        <div className='
          grid grid-cols-1 gap-5 px-4
          sm:grid-cols-2
          md:grid-cols-3 md:px-10
        '>
          {
            temporalCards.map(
              card => <HistoryCards key={card.id} {...card} />
            )
          }
        </div>
      </div>
    </AnimatedPage>
  );
};

export default HistoryPage;
