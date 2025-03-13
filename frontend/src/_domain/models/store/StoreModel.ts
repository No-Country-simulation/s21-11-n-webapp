import { z } from "zod";

export const StoreModel = z.object({
  storeName: z
    .string()
    .min(2, "El nombre de la tienda debe tener al menos 2 caracteres")
    .max(50, "El nombre de la tienda no puede superar los 50 caracteres"),
  slogan: z
    .string()
    .min(2, "El slogan debe tener al menos 2 caracteres")
    .max(100, "El slogan no puede superar los 100 caracteres"),
  coverPicture: z
    .string()
    .url("La imagen de portada debe ser una URL válida")
    .optional(),
});

export type StoreModel = z.infer<typeof StoreModel>;
