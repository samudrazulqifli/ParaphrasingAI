import { IsNotEmpty } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: 'Username Must Not Empty' })
  username: string;

  @IsNotEmpty({ message: 'Password Must Not Empty' })
  password: string;
}
