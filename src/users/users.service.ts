import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './domain/user';
import { UserId } from './domain/user-id';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EmailAlreadyExistsException } from './exceptions/email-already-exists.exception';
import { UserDoesNotExistException } from './exceptions/user-does-not-exist.exception';
import { UsernameAlreadyExistsException as UserNameAlreadyExistsException } from './exceptions/username-already-exists.exception';
import { UsersMapper } from './mappers/users-mapper';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>,
    private readonly usersMapper: UsersMapper,
  ) {}

  async create(createUserDto: CreateUserDto) {
    await this.validateCreateUserDto(createUserDto);
    const newUser = this.usersMapper.createDtoToUser(createUserDto);
    const createdUser = await this.userModel.create(newUser);
    return this.usersMapper.userDtoToUserResponse(createdUser);
  }

  async findAll(): Promise<User[]> {
    const res = await this.userModel.find().exec();
    return res.map(this.usersMapper.userDtoToUserResponse);
  }

  async findOne(id: UserId) {
    const userDto = await this.userModel.findById(id).exec();

    if (userDto) {
      return this.usersMapper.userDtoToUserResponse(userDto);
    }

    throw new UserDoesNotExistException();
  }

  async update(id: UserId, updateUserDto: UpdateUserDto) {
    const updateUser = this.usersMapper.updateDtoToUser(updateUserDto);

    const user = await this.userModel.findById(id);

    if (!user) {
      throw new UserDoesNotExistException();
    }

    if (user.email != updateUser.email) {
      await this.validateExistingEmail(updateUser.email);
    }

    const res = await this.userModel.findByIdAndUpdate(
      id,
      { $set: updateUser },
      { returnOriginal: false },
    );

    if (!res) {
      throw new UserDoesNotExistException();
    }

    return this.usersMapper.userDtoToUserResponse(res);
  }

  remove(id: UserId) {
    return `This action removes a #${id} user`;
  }

  async validateCreateUserDto(createUserDto: CreateUserDto): Promise<void> {
    await this.validateExistingEmail(createUserDto.email);
    await this.validateExistingUserName(createUserDto.userName);
  }

  async validateExistingEmail(email: String) {
    const existingEmail = await this.userModel.findOne({
      email: email,
    });
    if (existingEmail != null) {
      throw new EmailAlreadyExistsException();
    }
  }

  async validateExistingUserName(userName: String) {
    const existingUserName = await this.userModel.findOne({
      userName: userName,
    });
    if (existingUserName != null) {
      throw new UserNameAlreadyExistsException();
    }
  }
}
