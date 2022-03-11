import { IsEmail, IsNotEmpty, IsPhoneNumber, Length, Matches } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Length(3, 15)
  userName: String;

  @IsNotEmpty()
  @Length(2, 20)
  firstName: String;

  @IsNotEmpty()
  @Length(2, 20)
  lastName: String;

  @IsNotEmpty()
  avatar: String;

  @IsEmail()
  @IsNotEmpty()
  email: String;

  @IsNotEmpty()
  @Matches(/\d{3}-\d{3}-\d{4}$/, {message: 'phone number must be a valid phone number'})
  phoneNumber: String;
  
}
