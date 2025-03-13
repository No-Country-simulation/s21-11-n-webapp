import { z } from "zod";

export const UserAdminModel = z.object({
  adminName: z
    .string()
    .min(2, "El nombre del administrador debe tener al menos 2 caracteres")
    .max(50, "El nombre del administrador no puede superar los 50 caracteres"),
  email: z.string().email("Debe ser un correo electrónico válido"),
  phone: z
    .string()
    .regex(/^\+?[0-9]{10,15}$/, "Debe ser un número de teléfono válido"),
});
export type UserAdminModel = z.infer<typeof UserAdminModel>;
