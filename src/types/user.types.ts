export interface IUser {
  id: string;
  email: string;
  username: string;
  isActive: boolean;
  userInformation: UserInformation;
  userRoles: UserRole[];
}

export interface UserInformation {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
}

export interface UserRole {
  role: Role;
}

export interface Role {
  name: string;
}
