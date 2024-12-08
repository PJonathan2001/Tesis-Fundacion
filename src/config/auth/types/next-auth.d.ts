// src/auth/types/next-auth.d.ts

import NextAuth from "next-auth";
import { IUser } from "../../../types/user.types";

declare module "next-auth" {
  interface User extends IUser {
    accessToken: string;
    expiresAt: number;
  }

  interface Session {
    user: User;
    accessToken: string;
    expires: string;
  }

  interface JWT {
    id: string;
    email: string;
    username: string;
    isActive: boolean;
    userInformation: {
      id: string;
      userId: string;
      firstName: string;
      lastName: string;
      phone: string;
      address: string;
    };
    userRoles: string[];
    accessToken: string;
    expiresAt: number;
  }
}
