import useAddProduct from "@/_infraestructure/hooks/query/useAddProducts";
import { AxiosError } from "axios";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { toast } from "sonner";
import FormGroup from "../user/FormGroup";
import { AddProductModel } from "@/_domain/models/products/DataProductModel";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "primereact/button";
import { AddImage } from "@/_infraestructure/http/product/imageProduct";
import { ChangeEvent, useState } from "react";
import { ToggleButton } from "primereact/togglebutton";
import { Editor } from "primereact/editor";
import { MultiSelect } from "primereact/multiselect";
import { motion } from "motion/react";

function AddProduct() {
  const { mutateAsync } = useAddProduct();
  const [image, setImage] = useState<File | null>(null);
  const [coverPicture, setCoverPicture] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
    reset
  } = useForm<AddProductModel>({
    resolver: zodResolver(AddProductModel),
    defaultValues: {
      inOffer: false,
    },
  });

  const handleAdd: SubmitHandler<AddProductModel> = async (data) => {
    let finalCoverPicture = coverPicture;
    if (!finalCoverPicture) {
      if (!image) return toast.warning("Agregue imagen de producto");

      const uploaded = await AddImage(image);
      if (uploaded.error || !uploaded.coverPicture) {
        return toast.error(uploaded.error || "Error al subir la imagen");
      }
      finalCoverPicture = uploaded.coverPicture;
      setCoverPicture(finalCoverPicture);
    }
    data.coverPicture = finalCoverPicture;
    console.log(data)
    toast.promise(mutateAsync(data), {
      loading: "Cargando...",
      success: () => {
        setImage(null);
        setCoverPicture(null);
        reset()
        return "Producto agregado exitosamente";
      },
      error: ({ response }: AxiosError<any>) => {
        console.log(response)
        const msg = response?.data?.message || "Error al agregar el producto";
        return msg;
      },
    });
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

  const categories = [
    { name: "Electrónica", code: "elec", id: "1231" },
    { name: "Ropa", code: "ropa", id: "234" },
    { name: "Hogar", code: "hogar", id: "235" },
  ];

  return (
    <form autoComplete="off" onSubmit={handleSubmit(handleAdd)}>
      <div className="bg-surface-a p-5 rounded flex flex-col md:grid md:grid-cols-2 gap-5 w-full">
        <div>
          <FormGroup
            {...register("name")}
            error={errors.name}
            icon="ic:twotone-label"
            label={"Nombre"}
          />
          <div className="grid grid-cols-2 gap-5">
            <FormGroup
              type="number"
              {...register("price")}
              icon="material-symbols:attach-money"
              error={errors.price}
              label={"Precio"}
            />
            <FormGroup
              type="number"
              {...register("currentStock")}
              icon="fluent-mdl2:quantity"
              error={errors.currentStock}
              label={"Cantidad"}
            />
          </div>

          <div className="grid grid-cols-2 gap-5">
            <Controller
              name="inOffer"
              control={control}
              render={({ field }) => (
                <div className="flex flex-col gap-1">
                  <span className="font-medium">Producto en oferta</span>
                  <ToggleButton
                    checked={field.value || false}
                    onChange={(e) => field.onChange(e.value)}
                  />
                  <div className="h-6" />
                </div>
              )}
            />

            <FormGroup
              disabled={!watch("inOffer")}
              label="Porcentaje Descuento"
              icon="ph:percent-duotone"
              type="number"
              {...register("offerPercentageDiscount")}
              error={errors.offerPercentageDiscount}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-medium">Categorias</span>
            <Controller
              name="categories"
              control={control}
              render={({ field }) => (
                <div className="flex flex-col gap-1">
                  <MultiSelect
                    value={categories.filter((c) =>
                      field.value?.includes(c.code)
                    )}
                    onChange={(e) => field.onChange(e.value.map((c) => c.code))}
                    options={categories}
                    optionLabel="name"
                    placeholder="Selecciona categorías"
                    maxSelectedLabels={3}
                    className="w-full"
                  />
                  <motion.small
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className={
                      errors.categories ? "text-rose-500" : "text-gray-400"
                    }
                  >
                    {errors.categories
                      ? Array.isArray(errors.categories)
                        ? errors.categories.map((e, i) => (
                            <span key={i}>{e.message}</span>
                          ))
                        : errors.categories.message
                      : "Elija Categorías"}
                  </motion.small>
                </div>
              )}
            />
          </div>
        </div>

        <div>
          <label htmlFor="image">
            <div className="h-60 w-full p-1 rounded cursor-pointer hover:shadow-xl transition-shadow bg-surface border-dashed border-primary flex items-center justify-center">
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
            Recomendado | 16:9 | horizontal | transparente
          </small>
        </div>
      </div>

      {/* Editor alineado con useForm */}
      <div className="flex flex-col mt-5">
        <span className="font-medium mb-2">Descripción</span>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <Editor
              value={field.value || ""}
              onTextChange={(e) => field.onChange(e.htmlValue)}
              style={{ height: "320px" }}
            />
          )}
        />
      </div>

      <div className="col-span-2 grid place-content-center">
        <Button className="w-full mt-5" label="Guardar" />
      </div>
    </form>
  );
}

export default AddProduct;
