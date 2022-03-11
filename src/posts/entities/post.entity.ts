import * as mongoose from 'mongoose';
import { Post } from '../domain/post';

export const PostSchema = new mongoose.Schema<Post>({
  userId: String,
  description: String,
  imageUrl: String,
  hashtags: [String],
  taggedUsers: [String],
  creationDate: String
});
