import Charts from "@/_infraestructure/components/chart/MotstSell";
import AddProduct from "@/_infraestructure/components/dashboard/AddProduct";
import AddCategory from "@/_infraestructure/components/dashboard/Category/AddCategory";
import ListCategory from "@/_infraestructure/components/dashboard/Category/ListCategory";
import AnimatedPage from "@/_infraestructure/components/layout/pages/AnimatedPage";
import { TabView, TabPanel } from "primereact/tabview";

const DashboardPage = () => {
  return (
    <AnimatedPage className="flex flex-col-reverse sm:flex-row ">
      <div className="flex flex-col w-full my-10 gap-5">
        <Charts />
        <TabView>
          <TabPanel header="Producto">
            <TabView>
              <TabPanel header="Agregar">
                <AddProduct />
              </TabPanel>
              <TabPanel header="Lista">lista de productos</TabPanel>
            </TabView>
          </TabPanel>

          <TabPanel header="Categoria">
            <TabView>
              <TabPanel header="Agregar">
                <AddCategory />
              </TabPanel>
              <TabPanel header="Lista">
                <ListCategory />
              </TabPanel>
            </TabView>
          </TabPanel>

          <TabPanel header="Usuarios">usuarios</TabPanel>
        </TabView>
      </div>
    </AnimatedPage>
  );
};

export default DashboardPage;
