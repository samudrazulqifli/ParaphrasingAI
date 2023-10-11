import { IsNotEmpty } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty({ message: 'Name Must Not Empty' })
  name: string;

  @IsNotEmpty({ message: 'Username Must Not Empty' })
  username: string;

  @IsNotEmpty({ message: 'Password Must Not Empty' })
  password: string;
}
