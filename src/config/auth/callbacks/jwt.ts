// src/auth/callbacks/jwt.ts
import { User } from "next-auth";
import { JWT } from "next-auth/jwt";

export async function handleJwtCallback({
  token,
  user,
}: {
  token: JWT;
  user?: User | null;
}) {
  if (user) {
    token.id = user.id;
    token.email = user.email;
    token.username = user.username;
    token.isActive = user.isActive;
    token.userInformation = user.userInformation;
    token.userRoles = user.userRoles;
    token.accessToken = user.accessToken;
    token.expiresAt = user.expiresAt;
  }

  return token;
}
