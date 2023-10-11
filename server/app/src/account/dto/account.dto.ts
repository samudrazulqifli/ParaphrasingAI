import { IsNotEmpty, IsOptional, isNotEmpty } from 'class-validator';

export class UpdateAccountDto {
  @IsOptional()
  oldPassword: string;

  @IsOptional()
  newPassword: string;

  @IsNotEmpty()
  uuid: string;
}

export class DeleteAccountDto {
  @IsNotEmpty()
  uuid: string;
}

export class GetAccountDto {
  @IsNotEmpty()
  uuid: string;
}

export class AccountDto {
  @IsNotEmpty()
  uuid: string;

  @IsNotEmpty()
  username: string;
}
