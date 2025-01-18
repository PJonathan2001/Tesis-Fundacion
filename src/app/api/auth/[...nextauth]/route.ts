import NextAuth from "next-auth";
import authConfig from "../../../../config/auth/config";

export const { signIn, signOut, auth } = NextAuth(authConfig);

// Exporta explícitamente los métodos HTTP GET y POST
//prueba de devsecops