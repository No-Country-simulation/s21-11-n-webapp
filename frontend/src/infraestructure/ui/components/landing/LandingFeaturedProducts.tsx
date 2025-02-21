import { Carousel, CarouselResponsiveOption } from "primereact/carousel";
import { Icon } from "@iconify/react";

function LandingFeaturedProducts() {
  interface typex {
    src: string;
    name: string;
  }
  const products: typex[] = [
    {
      src: "https://neufeldresources.blob.core.windows.net/catalogos/content/catalogo-ecommerce/Postres/PanDeMuerto.png",
      name: "pan de muerto",
    },
    {
      src: "https://colmaiz.co/wp-content/uploads/2019/04/Producto-Preparacion-Pandebono.png",
      name: "pan de muerto",
    },
    {
      src: "https://png.pngtree.com/png-clipart/20231203/original/pngtree-garlic-bread-herb-photo-png-image_13757153.png",
      name: "pan de muerto",
    },
    {
      src: "https://png.pngtree.com/png-clipart/20240312/original/pngtree-chocolate-cornet-bread-png-image_14568061.png",
      name: "pan de muerto",
    },
    {
      src: "https://png.pngtree.com/png-clipart/20240321/original/pngtree-french-bread-presented-in-transparency-png-image_14643560.png",
      name: "pan de algo",
    },
    {
      src: "https://panlapaz.mx/uploads/conchacho_1.png",
      name: "pan de muerto",
    },
  ];
  const responsiveOptions: CarouselResponsiveOption[] = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const productTemplate = (data: typex) => {
    return (
      <div className="surface-border border-round flex flex-col items-center m-2 text-center py-5 px-3">
        <img
          className="object-contain aspect-square w-auto max-w-60"
          src={data.src}
        />
        <span className="font-primary text-4xl">{data.name}</span>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col gap-2 items-center">
        <Icon
          icon="hugeicons:bread-01"
          className="text-gray-500"
          width="48"
          height="48"
        />
        <span className="font-primary text-5xl">Productos Destacados</span>
      </div>
      <Carousel
        value={products}
        numVisible={3}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
      />
    </>
  );
}

export default LandingFeaturedProducts;
