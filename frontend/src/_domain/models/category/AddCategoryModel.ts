import { z } from "zod";

export const AddCategoryModel = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  description: z.string().min(1, "La descripción es requerida"),
  thumbnail: z.string().url({ message: "La imagen es URL" }).optional(),
  isActive: z.boolean().optional().default(true),
});

export type AddCategoryModel = z.infer<typeof AddCategoryModel>;
