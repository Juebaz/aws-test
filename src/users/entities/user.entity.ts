import * as mongoose from 'mongoose';
import { User } from '../domain/user';

export const UserSchema = new mongoose.Schema<User>({
  userName: String,
  firstName: String,
  lastName: String,
  avatar: String,
  email: String,
  phoneNumber: String,
  creationDate: String,
});
