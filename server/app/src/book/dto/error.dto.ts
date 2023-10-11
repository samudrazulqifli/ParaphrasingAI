import { IsOptional } from 'class-validator';

export class GetErrorDto {
  @IsOptional()
  skip: string;

  @IsOptional()
  limit: string;
}
