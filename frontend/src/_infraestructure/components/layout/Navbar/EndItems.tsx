import { ThemeNavbarItem } from "./ThemeNavbarItem";
import { Skeleton } from "primereact/skeleton";
import { useAuthStore } from "@/_infraestructure/store/auth/authStore";
import CartButton from "../Cart/CartButton";
import { AuthRoles } from "@/_domain/models/auth/RolesAuthModel";
import AuthButton from "../../auth/AuthButton";

const EndItems = () => {
  const { userRole } = useAuthStore();

  if (!userRole)
    return (
      <div className="flex items-center mr-2 gap-2">
        <Skeleton width="90px" height="39px"></Skeleton>
        <Skeleton width="91px" height="39px"></Skeleton>
      </div>
    );

  return (
    <>
      <div className="flex items-center mr-2 gap-2">
        {userRole === AuthRoles.ROLE_USER && <CartButton />}
        <ThemeNavbarItem />
        <AuthButton />
      </div>
    </>
  );
};

export default EndItems;
