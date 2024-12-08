import { z } from "zod";

export const authSquema = z.object({
  email: z
    .string()
    .email(
      "El correo electrónico no es válido, por favor verifica que sea correcto."
    ),
  password: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres."),
});
