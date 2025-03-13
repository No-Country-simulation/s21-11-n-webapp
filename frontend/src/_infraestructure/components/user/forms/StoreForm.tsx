import { motion } from "motion/react";
import FormGroup from "../FormGroup";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StoreModel } from "@/_domain/models/store/StoreModel";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import { toast } from "sonner";
import { ChangeEvent, useState } from "react";
import { AddImage } from "@/_infraestructure/http/product/imageProduct";

function StoreForm() {
  const [image, setImage] = useState<File | null>(null);
  const [coverPicture, setCoverPicture] = useState<string | null>(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<StoreModel>({
    resolver: zodResolver(StoreModel),
  });

  const handleSave: SubmitHandler<StoreModel> = async (data) => {
    // let finalCoverPicture = coverPicture;
    // if (!finalCoverPicture) {
    //   if (!image) return toast.warning("Agregue imagen de producto");

    //   const uploaded = await AddImage(image);
    //   if (uploaded.error || !uploaded.coverPicture) {
    //     return toast.error(uploaded.error || "Error al subir la imagen");
    //   }
    //   finalCoverPicture = uploaded.coverPicture;
    //   setCoverPicture(finalCoverPicture);
    // }
    // data.coverPicture = finalCoverPicture;

    console.log(data);
  };

  const onUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.warning("Solo se permiten imágenes");
      return;
    }
    setImage(file);
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
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2 ">
            <span className="font-semibold">Logo Tienda</span>
            <label htmlFor="image">
              <div className="h-60 w-full p-1 rounded cursor-pointer hover:shadow-xl transition-shadow border bg-surface border-dashed border-primary flex items-center justify-center">
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    alt="preview image"
                    className="w-full h-full object-contain rounded"
                  />
                ) : (
                  <span className="text-zinc-500">Agregar Imagen</span>
                )}
              </div>
              <input
                onChange={onUpload}
                type="file"
                className="hidden"
                id="image"
              />
            </label>

            <small className="text-zinc-500">
              Recomendado | 1:1 | cuadrado | transparente
            </small>
          </div>

          <div className="flex flex-col gap-5">
            <FormGroup
              icon="fluent:rename-16-regular"
              label={"Nombre Tienda"}
              error={errors.storeName}
              id="storeName"
              {...register("storeName")}
            />
            <label htmlFor="slogan" className="flex flex-col gap-2 w-full">
              <span className="font-semibold">Slogan</span>
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
                className={errors.slogan ? "text-rose-500" : "text-gray-400"}
                id="slogan-help"
              >
                {errors.slogan
                  ? errors.slogan.message
                  : "Ingrese slogan principal"}
              </small>
            </label>
          </div>
        </div>
        <div className="w-full mt-5 grid place-content-center">
          <Button label="Guardar" />
        </div>
      </form>
    </motion.div>
  );
}

export default StoreForm;
