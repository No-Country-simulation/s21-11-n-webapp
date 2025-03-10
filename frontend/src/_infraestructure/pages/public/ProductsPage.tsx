import { ProductCard } from '@/_domain/models/products/ProductCard';
import AnimatedPage from "@/_infraestructure/components/layout/pages/AnimatedPage";
import { ProductCardComponent } from '@/_infraestructure/components/product/ProductCard/ProductCardComponent';
import { ProductSearchForm } from '@/_infraestructure/components/product/ProductSearchForm/ProductSearchForm';

const temporalProductList: ProductCard[] = [
  {
    productId: 1,
    title: 'Pan de muerto',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    price: 2.5423,
    image: '',
  },
  {
    productId: 2,
    title: 'Torta de chocolate',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    price: 25.21,
    image: '',
  },
  {
    productId: 3,
    title: 'Torta de leche',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    price: 21,
    image: '',
  },
  {
    productId: 4,
    title: 'Mermelada',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    price: 20.20,
    image: 'https://picsum.photos/300/200',
  },
  {
    productId: 5,
    title: 'Pan de trigo',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    price: 1.20,
    image: '',
  },
  {
    productId: 6,
    title: 'Sandwich de mortadela',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    price: 2.5421,
    image: '',
  },
  {
    productId: 7,
    title: 'Pan francés',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
    price: 4.20,
    image: 'https://picsum.photos/300/200',
  },
]

const ProductsPage = () => {
  return (
    <AnimatedPage>
      <div>
        {/* SEARCH FORM */}
        <ProductSearchForm />

        {/* CARD PANEL */}
        <div>
          {/* CARDS */}
          <div className='
            px-4 grid grid-cols-1 gap-5 pb-12
            sm:grid-cols-2
            md:px-10
            lg:grid-cols-3
            xl:px-0
          '>
            {
              temporalProductList.map(
                card => <ProductCardComponent key={card.productId} {...card} />
              )
            }
          </div>
        </div>

      </div>
    </AnimatedPage>
  );
};

export default ProductsPage;
