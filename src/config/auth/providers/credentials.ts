// src/auth/providers/credentials.ts
import CredentialsProvider from "next-auth/providers/credentials";
import z from "zod";

export const credentialsProvider = CredentialsProvider({
  async authorize(credentials) {
    const parsedCredentials = z
      .object({
        email: z.string().email(),
        password: z.string(),
      })
      .safeParse(credentials);

    if (!parsedCredentials.success) {
      return null;
    }

    const { email, password } = parsedCredentials.data;
    console.log({ email, password });
    try {
      const res = await fetch(`${process.env.BACKEND_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Error de autenticación:", errorData.message);
        return null;
      }

      // Parseamos la respuesta exitosa
      const data = await res.json();
      console.log("Data:", data);

      const userRoles = Array.isArray(data.userRoles) ? data.userRoles : [];

      return {
        id: data.id,
        email: data.email,
        username: data.username,
        isActive: data.isActive,
        userInformation: data.userInformation,
        userRoles: userRoles.map(
          (role: { role: { name: string } }) => role.role.name
        ),
        accessToken: data.token,
        expiresAt: Date.now() + 6 * 60 * 60 * 1000, // Token válido por 6 horas
      };
    } catch (error) {
      console.log("Error en la autenticación:", error);
      if (error instanceof Error) {
        return { error: error.message };
      }
      return { error: "Error inesperado durante la autenticación" };
    }
  },
});
