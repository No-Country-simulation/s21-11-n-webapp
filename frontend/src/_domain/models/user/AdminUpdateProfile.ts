import { z } from "zod";

export const AdminUpdateModel = z.object({
  adminName: z
    .string()
    .min(2, "El nombre del administrador debe tener al menos 2 caracteres")
    .max(50, "El nombre del administrador no puede superar los 50 caracteres"),
  email: z.string().email("Debe ser un correo electrónico válido"),
  phone: z
    .string()
    .regex(/^\+?[0-9]{10,15}$/, "Debe ser un número de teléfono válido"),

  storeName: z
    .string()
    .min(2, "El nombre de la tienda debe tener al menos 2 caracteres")
    .max(50, "El nombre de la tienda no puede superar los 50 caracteres"),
  slogan: z
    .string()
    .min(2, "El slogan debe tener al menos 2 caracteres")
    .max(100, "El slogan no puede superar los 100 caracteres"),

  key: z.string().min(10, "La clave debe tener al menos 10 caracteres"),
  accessToken: z.string().min(20, "El token de acceso es obligatorio"),
  publicKey: z.string().min(20, "La clave pública es obligatoria"),
  collectorID: z
    .string()
    .regex(/^\d+$/, "El ID del cobrador debe ser un número entero positivo")
    .transform((val) => Number(val))
    .refine((val) => Number.isInteger(val) && val > 0, {
      message: "El ID del cobrador debe ser un número válido",
    }),
});

export type AdminUpdateModel = z.infer<typeof AdminUpdateModel>;
