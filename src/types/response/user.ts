import { IParcel } from "./parcel";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: Address;
  role: string;
  isActive: string;
  isVerified: boolean;
  auths: Auth[];
  parcels: IParcel[];
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  division: string;
  city: string;
  zip: number;
  street: string;
}

export interface Auth {
  provider: string;
  providerId: string;
  _id: string;
}
