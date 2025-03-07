import { AuthRoles } from "@/_domain/models/auth/RolesAuthModel";
import AnimatedPage from "@/_infraestructure/components/layout/pages/AnimatedPage";
import AdminForm from "@/_infraestructure/components/user/AdminForm";
import UserForm from "@/_infraestructure/components/user/UserForm";
import { useAuthStore } from "@/_infraestructure/store/auth/authStore";
// import UserPhoto from "@/_infraestructure/components/user/UserPhoto";

const ProfilePage = () => {
  const { userRole } = useAuthStore();
  return (
    <AnimatedPage>
      <div className="">
        {userRole === AuthRoles.ROLE_ADMIN ? <AdminForm /> : <UserForm />}
      </div>
    </AnimatedPage>
  );
};

export default ProfilePage;
