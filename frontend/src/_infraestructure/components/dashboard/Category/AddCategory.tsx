import { AddCategoryModel } from "@/_domain/models/category/AddCategoryModel";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import FormGroup from "../../user/FormGroup";
import { Button } from "primereact/button";
import { toast } from "sonner";
import useAddCategory from "@/_infraestructure/hooks/query/category/useAddCategory";

function AddCategory() {
  const { mutateAsync, isPending } = useAddCategory();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddCategoryModel>({
    resolver: zodResolver(AddCategoryModel),
  });
  const handleSave: SubmitHandler<AddCategoryModel> = (data) => {
    toast.promise(mutateAsync(data), {
      loading: "Agregando categoria...",
      success: (data) => {
        console.log(data);
        reset();
        return "Agregado";
      },
      error: (err) => {
        console.log(err);
        return "error";
      },
    });
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit(handleSave)}>
      <div className="grid md:grid-cols-3 gap-5">
        <FormGroup
          disabled={isPending}
          error={errors.name}
          {...register("name")}
          label="Nombre Categoria"
        />
        <FormGroup
          disabled={isPending}
          error={errors.description}
          {...register("description")}
          label="Descripción Categoria"
        />
        <label
          htmlFor="icon-cat"
          className="h-full w-full bg-surface-b border cursor-pointer border-primary border-dashed rounded"
        >
          <div className="grid place-content-center gap-2 text-center h-full">
            <span className="text-zinc-500">Agregar Icono de Categoria</span>
            <small className="text-zinc-500">
              Recomendado | 1:1 | cuadrado | transparente
            </small>
          </div>
          <input type="file" id="icon-cat" className="hidden" />
        </label>
      </div>
      <div className="grid place-content-center mt-5">
        <Button disabled={isPending} label="Agregar" />
      </div>
    </form>
  );
}

export default AddCategory;
