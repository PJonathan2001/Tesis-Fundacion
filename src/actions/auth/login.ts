"use server";

import { signIn } from "../../app/api/auth/[...nextauth]/route";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    // Llama a signIn del cliente en el servidor con redirect: false

    const result = await signIn("credentials", {
      ...formData,
      redirect: false, // Para manejar manualmente la respuesta
    });

    if (result?.error) {
      return {
        success: false,
        message: "Credenciales incorrectas",
      };
    }

    return {
      success: true,
      message: "Inicio de sesión exitoso",
    };
  } catch (error) {
    if ((error as any).type === "CredentialsSignin") {
      return {
        success: false,
        message: "El Correo Electrónico o la Contraseña son incorrectos",
      };
    }
    return {
      success: false,
      message: "Error al iniciar sesión",
    };
  }
}
