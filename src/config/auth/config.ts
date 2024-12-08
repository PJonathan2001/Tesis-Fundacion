// src/auth/config.ts
import { NextAuthConfig } from "next-auth";
import { handleJwtCallback } from "./callbacks/jwt";
import { handleSessionCallback } from "./callbacks/session";
import { credentialsProvider } from "./providers/credentials";

const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [credentialsProvider],
  callbacks: {
    jwt: handleJwtCallback,
    session: handleSessionCallback,
  },
};

export default authConfig;
