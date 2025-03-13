import { z } from "zod";

export const AddProductModel = z.object({
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  price: z.coerce.number().positive("Precio invalido"),
  description: z.string().nullable().optional(),
  currentStock: z.coerce
    .number()
    .int()
    .min(1, { message: "La cantidad minima es 1" })
    .nonnegative("El stock no puede ser negativo"),
  coverPicture: z.string().url("Imagen invalida").optional(),
  inOffer: z.boolean().nullable(),
  offerPercentageDiscount: z.coerce
    .number()
    .min(0, { message: "El descuento no puede ser menor a 0%" })
    .max(100, { message: "El descuento no puede ser mayor a 100%" })
    .nullable(),
  categories: z.array(z.string({ message: "Tipo de categoria invalida" }), {
    message: "Elija una o mas categorias",
  }),
});

export type AddProductModel = z.infer<typeof AddProductModel>;
