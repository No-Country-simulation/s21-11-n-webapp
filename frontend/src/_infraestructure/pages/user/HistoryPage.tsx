import { IHistoryCard } from "@/_domain/models/history/IHistoryCard";
import { HistoryCards } from "@/_infraestructure/components/historycard/HistoryCards";
import AnimatedPage from "@/_infraestructure/components/layout/pages/AnimatedPage";
// import EmptySVG from "@/_infraestructure/components/svg/EmptySVG";

const temporalCards: IHistoryCard[] = [
  {
    id: 1,
    cost: 125.2,
    date: new Date("07-30-2024 15:12"),
    state: "Aprobado",
  },
  {
    id: 2,
    cost: 513,
    date: new Date("12-15-2023 21:23"),
    state: "Devuelto",
  },
  {
    id: 3,
    cost: 456.999455,
    date: new Date("12-15-2023 21:23"),
    state: "Pendiente",
  },
  {
    id: 4,
    cost: 456.999455,
    date: new Date("12-15-2023 21:23"),
    state: "Procesando",
  },
  {
    id: 5,
    cost: 456.999455,
    date: new Date("12-15-2023 21:23"),
    state: "Rechazado",
  },
  {
    id: 6,
    cost: 456.999455,
    date: new Date("05-21-2023 06:03"),
    state: "Disputa",
  },
  {
    id: 7,
    cost: 456.999455,
    date: new Date("12-15-2023 21:23"),
    state: "Cancelado",
  },
];

const HistoryPage = () => {
  return (
    <AnimatedPage>
      <div className="flex flex-col-reverse xl:grid xl:grid-cols-5 gap-5 xl:items-start h-full p-5">
        {/* componente para cuando no este en 0 el array de historial */}
        {/* <div className="flex items-center flex-col gap-5 col-span-3">
          <div className="size-40">
            <EmptySVG />
          </div>
          <span className="text-text/50 font-semibold text-xl">
            ¡Historial vacio!
          </span>
        </div> */}
        <div className="flex flex-col items-center sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 col-span-3">
          {temporalCards.map((card: IHistoryCard) => (
            <HistoryCards
              key={card.id}
              cost={card.cost}
              date={card.date}
              state={card.state}
              id={card.id}
            />
          ))}
        </div>
        <div className="col-span-2  xl:sticky xl:top-15 p-5">
          filtros y card o algo para mostrar el total de dinero en compras, el
          total de compras y cosas asi
        </div>
      </div>
    </AnimatedPage>
  );
};

export default HistoryPage;
