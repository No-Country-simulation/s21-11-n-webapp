import { z } from "zod";

const today = new Date();
today.setHours(0, 0, 0, 0);
const minDate = new Date(today);
minDate.setFullYear(minDate.getFullYear() - 18); // Debe ser mayor de edad

export const UserUpdateModel = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede superar los 50 caracteres"),
  email: z.string().email("Debe ser un correo electrónico válido"),
  phone: z
    .string()
    .regex(/^\+?[0-9]{10,15}$/, "Debe ser un número de teléfono válido"),
  address: z.string().min(5, "La dirección debe tener al menos 5 caracteres"),
  birthday: z.coerce
    .date()
    .refine((date) => date < minDate, "Debes ser mayor de edad"),
});

export type UserUpdateModel = z.infer<typeof UserUpdateModel>;
