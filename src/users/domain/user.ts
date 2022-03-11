import { UserId } from './user-id';

export type User = BaseUser & {
  id: UserId;
};

export type BaseUser = {
  userName: string;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
  phoneNumber: string;
  creationDate: string;
};

export type UpdateUser = {
  firstName: String;
  lastName: String;
  avatar: String;
  email: String;
  phoneNumber: String;
};
