import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseFilters,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserId } from './domain/user-id';
import { CustomExceptionFilter } from '../commons/exceptions-filters/custom-exception.filter';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
@UseFilters(new CustomExceptionFilter())
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: UserId) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: UserId, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: UserId) {
    return this.usersService.remove(id);
  }
}
