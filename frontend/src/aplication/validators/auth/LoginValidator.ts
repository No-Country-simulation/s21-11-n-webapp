import { z } from "zod";

export const LoginSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(5, "El email debe tener al menos 5 caracteres.")
    .max(100, "El email es demasiado largo.")
    .email("El email no es válido."),
  password: z
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres.")
    .max(50, "La contraseña es demasiado larga.")
    .regex(/[A-Z]/, "La contraseña debe incluir al menos una mayúscula.")
    .regex(/[a-z]/, "La contraseña debe incluir al menos una minúscula.")
    .regex(/\d/, "La contraseña debe incluir al menos un número.")
    .regex(
      /[@$!%*?&]/,
      "La contraseña debe incluir al menos un carácter especial (@, $, !, %, *, ?, &)."
    ),
});

export type LoginSchema = z.infer<typeof LoginSchema>;
