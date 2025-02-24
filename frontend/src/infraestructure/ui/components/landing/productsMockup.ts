// este archivo s eborra cuando tengamos conexion a API del back

import { CarouselResponsiveOption } from "primereact/carousel";

export interface ProductData {
  id: string;
  src: string;
  name: string;
  price: number;
}

export const products: ProductData[] = [
  {
    src: "https://neufeldresources.blob.core.windows.net/catalogos/content/catalogo-ecommerce/Postres/PanDeMuerto.png",
    name: "pan de muerto",
    id: "1",
    price: 12,
  },
  {
    src: "https://colmaiz.co/wp-content/uploads/2019/04/Producto-Preparacion-Pandebono.png",
    name: "pan de muerto",
    id: "2",
    price: 6,
  },
  {
    src: "https://png.pngtree.com/png-clipart/20231203/original/pngtree-garlic-bread-herb-photo-png-image_13757153.png",
    name: "pan de muerto",
    id: "3",
    price: 5,
  },
  {
    src: "https://png.pngtree.com/png-clipart/20240312/original/pngtree-chocolate-cornet-bread-png-image_14568061.png",
    name: "pan de muerto",
    id: "4",
    price: 19,
  },
  {
    src: "https://png.pngtree.com/png-clipart/20240321/original/pngtree-french-bread-presented-in-transparency-png-image_14643560.png",
    name: "pan de algo",
    id: "5",
    price: 5,
  },
  {
    src: "https://panlapaz.mx/uploads/conchacho_1.png",
    name: "pan de muerto",
    id: "6",
    price: 15,
  },
];

export const responsiveOptions: CarouselResponsiveOption[] = [
  {
    breakpoint: "1024px", // lg
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "768px", // md
    numVisible: 1,
    numScroll: 1,
  },
];
