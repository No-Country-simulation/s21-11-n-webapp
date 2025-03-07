import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "primereact/button";
import { SubmitHandler, useForm } from "react-hook-form";
import AdminLogo from "./AdminLogo";
import { InputTextarea } from "primereact/inputtextarea";
import FormGroup from "./FormGroup";
import { AdminUpdateModel } from "@/_domain/models/user/AdminUpdateProfile";
import { InputNumber } from "primereact/inputnumber";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";

const AdminForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminUpdateModel>({
    resolver: zodResolver(AdminUpdateModel),
  });
  const handleSave: SubmitHandler<AdminUpdateModel> = (data) => {
    console.log(data);
  };
  return (
    <div className="p-5 mt-10 mb-20 min-w-sm h-full">
      <form onSubmit={handleSubmit(handleSave)} autoComplete="off">
        <div className="flex flex-col gap-20 p-5 bg-surface-a rounded">
          <AdminLogo />
          <div className="flex flex-col gap-5 pb-10">
            <div className="flex flex-col md:grid md:grid-cols-2 gap-5 gap-y-10">
              <div className="flex flex-col gap-5">
                <span className="text-2xl font-semibold col-span-2 text-text">
                  Información personal
                </span>
                <FormGroup
                  icon="fluent:rename-16-regular"
                  label={"adminName"}
                  error={errors.adminName}
                  id="adminName"
                  {...register("adminName")}
                />

                <FormGroup
                  icon="mdi:email-outline"
                  label={"email"}
                  error={errors.email}
                  id="email"
                  {...register("email")}
                />
                <FormGroup
                  icon="solar:phone-linear"
                  label={"phone"}
                  error={errors.phone}
                  id="phone"
                  {...register("phone")}
                />
              </div>
              <div className="flex flex-col gap-5">
                <span className="text-2xl font-semibold col-span-2 text-text">
                  Información tienda
                </span>
                <FormGroup
                  icon="fluent:rename-16-regular"
                  label={"storeName"}
                  error={errors.storeName}
                  id="storeName"
                  {...register("storeName")}
                />
                <label htmlFor="slogan" className="flex flex-col gap-2 w-full">
                  <span>Slogan</span>
                  <InputTextarea
                    rows={6}
                    cols={30}
                    // disabled={isLoading}
                    className="w-full resize-none"
                    {...register("slogan")}
                    id="slogan"
                    aria-describedby="slogan-help"
                  />

                  <small
                    className={errors.slogan && "text-rose-500"}
                    id="slogan-help"
                  >
                    {errors.slogan
                      ? errors.slogan.message
                      : "Ingrese slogan principal"}
                  </small>
                </label>
              </div>
              <div className="flex flex-col md:grid md:grid-cols-2 col-span-2 gap-5">
                <span className="text-2xl font-semibold col-span-2 text-text">
                  Información de pago
                </span>
                <FormGroup
                  icon="oui:token-element"
                  label={"accessToken"}
                  error={errors.accessToken}
                  id="accessToken"
                  {...register("accessToken")}
                />
                <FormGroup
                  icon="solar:key-broken"
                  label={"publicKey"}
                  error={errors.publicKey}
                  id="publicKey"
                  {...register("publicKey")}
                />
                <FormGroup
                  icon="solar:key-broken"
                  label={"key"}
                  error={errors.key}
                  id="key"
                  {...register("key")}
                />
                <FormGroup
                  icon="mage:id-card"
                  label={"collectorID"}
                  error={errors.collectorID}
                  id="collectorID"
                  {...register("collectorID")}
                  type="number"
                />
              </div>
            </div>
            <div className="grid place-content-center">
              <Button label="Guardar" className="col-span-2 mt-10" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminForm;
