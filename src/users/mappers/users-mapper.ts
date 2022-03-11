import { Injectable } from '@nestjs/common';
import { BaseUser, UpdateUser } from '../domain/user';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserDto } from '../dto/user.dto';
import { UserResponse } from '../response/user-response';

@Injectable()
export class UsersMapper {
  createDtoToUser(createUserDto: CreateUserDto): BaseUser {
    const creationDate = new Date().toISOString();
    return {
      firstName: createUserDto.firstName.toString(),
      lastName: createUserDto.lastName.toString(),
      email: createUserDto.email.toString(),
      phoneNumber: createUserDto.phoneNumber.toString(),
      userName: createUserDto.userName.toString(),
      avatar: createUserDto.avatar.toString(),
      creationDate,
    };
  }

  updateDtoToUser(updateUserDto: UpdateUserDto): UpdateUser {
    const { firstName, lastName, avatar, email, phoneNumber } = updateUserDto;
    return {
      firstName,
      lastName,
      avatar,
      email,
      phoneNumber,
    };
  }

  userDtoToUserResponse(userDto: UserDto): UserResponse {
    return {
      id: userDto._id.toString(),
      firstName: userDto.firstName,
      lastName: userDto.lastName,
      creationDate: userDto.creationDate,
      avatar: userDto.avatar,
      userName: userDto.userName,
      phoneNumber: userDto.phoneNumber,
      email: userDto.email,
    };
  }
}
