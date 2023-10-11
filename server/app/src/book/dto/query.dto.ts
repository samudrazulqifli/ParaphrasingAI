import { IsNotEmpty, IsOptional } from 'class-validator';

export class GetQueryDto {
  @IsNotEmpty()
  bookRef: string;

  @IsOptional()
  skip: string;

  @IsOptional()
  limit: string;
}
