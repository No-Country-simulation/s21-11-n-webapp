import { z } from "zod";

export const PaymentModel = z.object({
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

export type PaymentModel = z.infer<typeof PaymentModel>;
