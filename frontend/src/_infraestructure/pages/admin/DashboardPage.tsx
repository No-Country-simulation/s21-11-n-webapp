import AnimatedPage from "@/_infraestructure/components/layout/pages/AnimatedPage";
import useAddProduct from "@/_infraestructure/hooks/query/useAddProducts";
import { useEffect } from "react";
// import { useUserData } from "@/_infraestructure/store/auth/authStore";

const DashboardPage = () => {
  // const { userID, email } = useUserData();
  const { createProduct, createResponse, isCreating, error } = useAddProduct();

  const handleCLick = () => {
    createProduct({
      name: "string",
      price: 0,
      currentStock: 0,
    });
  };
  useEffect(() => {
    // console.log(createResponse);
    console.log(error);
  }, [, isCreating]);
  return (
    <AnimatedPage className="flex flex-col-reverse sm:flex-row ">
      <div>
        <button onClick={handleCLick}>send</button>
        <span>status: {isCreating}</span>
      </div>
    </AnimatedPage>
  );
};

export default DashboardPage;
