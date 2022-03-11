import { BaseUser } from '../domain/user';

export type UserResponse = BaseUser & {
  id: string;
  creationDate: string;
};
