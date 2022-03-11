import { Types } from 'mongoose';
import { BaseUser } from '../domain/user';

export type UserDto = BaseUser & {
  _id: Types.ObjectId;
};
