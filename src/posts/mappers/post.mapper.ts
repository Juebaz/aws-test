import { Injectable } from '@nestjs/common';
import { UserId } from 'src/users/domain/user-id';
import { BasePost, UpdatePost } from '../domain/post';
import { CreatePostDto } from '../dtos/create-post.dto';
import { PostDto} from '../dtos/post.dto';
import { UpdatePostDto } from '../dtos/update-post.dto';
import { PostResponse } from '../response/post.response';

@Injectable()
export class PostMapper {
  createDtoToPost(createPostDto: CreatePostDto): BasePost {
    const creationDate = new Date().toISOString();
    return {
      userId: createPostDto.userId.toString(),
      description: createPostDto.description.toString(),
      imageUrl: createPostDto.imageUrl.toString(),
      hashtags: createPostDto.hashtags as string[],
      taggedUsers: createPostDto.taggedUsers as string[],
      creationDate
    };
  }

  updateDtoToPost(updatePostDto: UpdatePostDto): UpdatePost {
    const { description, hashtags, taggedUsers } =
      updatePostDto;
    return {
      description,
      hashtags,
      taggedUsers
    }
  }

  postDtoToPostResponse(postDto: PostDto): PostResponse {
    return {
      id: postDto._id.toString(),
      userId: postDto.userId,
      description: postDto.description,
      imageUrl: postDto.imageUrl,
      hashtags: postDto.hashtags,
      taggedUsers: postDto.taggedUsers,
      creationDate: postDto.creationDate
    };
  }
}
