import AnimatedPage from "@/_infraestructure/components/layout/pages/AnimatedPage";
import { ProductSearchForm } from '@/_infraestructure/components/product/ProductSearchForm/ProductSearchForm';

const ProductsPage = () => {

  return (
    <AnimatedPage>
      <div>
        <ProductSearchForm />

        {/* CARD PANEL */}
        <div>
          card panel
          {/* CARDS */}
          <div>
            card
          </div>
        </div>

      </div>
    </AnimatedPage>
  );
};

export default ProductsPage;
