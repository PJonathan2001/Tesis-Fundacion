"use server";

import { signOut } from "../../app/api/auth/[...nextauth]/route";

export const logout = async () => {
  try {
    await signOut();
    return {
      success: true,
      message: "Cierre de sesión exitoso",
    };
  } catch (error) {
    console.error("Error durante el cierre de sesión:" + error);
    return {
      success: false,
      message: "Error al cerrar sesión",
    };
  }
};
