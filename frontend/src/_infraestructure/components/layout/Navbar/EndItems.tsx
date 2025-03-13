import { ThemeNavbarItem } from "./ThemeNavbarItem";
import { Skeleton } from "primereact/skeleton";
import { useAuthStore } from "@/_infraestructure/store/auth/authStore";
import CartButton from "../Cart/CartButton";
import { AuthRoles } from "@/_domain/models/auth/RolesAuthModel";

import LogOutButton from "../../auth/authLogout";
import SigninButton from "../../auth/authSignin";

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
      <div className="flex gap-3">
        {userRole === AuthRoles.ROLE_USER && <CartButton />}
        <ThemeNavbarItem />
        {userRole === AuthRoles.ROLE_NULL && <SigninButton />}
        {userRole !== AuthRoles.ROLE_NULL && <LogOutButton />}
      </div>
    </>
  );
};

export default EndItems;
