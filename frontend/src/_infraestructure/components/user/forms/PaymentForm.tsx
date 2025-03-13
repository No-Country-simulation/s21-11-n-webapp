import { motion } from "motion/react";
import FormGroup from "../FormGroup";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaymentModel } from "@/_domain/models/payment/PaymentModel";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "primereact/button";

function PaymentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentModel>({ resolver: zodResolver(PaymentModel) });
  const handleSave: SubmitHandler<PaymentModel> = (data) => {
    console.log(data);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="p-5 bg-surface-a"
    >
      <form autoComplete="off" onSubmit={handleSubmit(handleSave)}>
        <div className="flex flex-col md:grid md:grid-cols-2 col-span-2 gap-5">
          <FormGroup
            icon="oui:token-element"
            label={"Token de acceso"}
            error={errors.accessToken}
            id="accessToken"
            {...register("accessToken")}
          />
          <FormGroup
            icon="solar:key-broken"
            label={"Lave publica"}
            error={errors.publicKey}
            id="publicKey"
            {...register("publicKey")}
          />
          <FormGroup
            icon="solar:key-broken"
            label={"Llave"}
            error={errors.key}
            id="key"
            {...register("key")}
          />
          <FormGroup
            icon="mage:id-card"
            label={"ID de colector"}
            error={errors.collectorID}
            id="collectorID"
            {...register("collectorID")}
            type="number"
          />
        </div>
        <div className="w-full mt-5 grid place-content-center">
          <Button label="Guardar" />
        </div>
      </form>
    </motion.div>
  );
}

export default PaymentForm;
