// src/auth/callbacks/session.ts
import { UserInformation, UserRole } from "@/types/user.types";
import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

export async function handleSessionCallback({
  session,
  token,
}: {
  session: Session;
  token: JWT;
}) {
  session.user = {
    id: token.id as string,
    email: token.email as string,
    username: token.username as string,
    isActive: token.isActive as boolean,
    userInformation: token.userInformation as UserInformation,
    userRoles: token.userRoles as UserRole[],
    accessToken: token.accessToken as string,
    expiresAt: token.expiresAt as number,
  };

  session.accessToken = token.accessToken as string;
  session.expires = new Date(token.expiresAt as number).toISOString();

  return session;
}
