import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { SummarizeEnum } from '../enum/summarize.enum';

export class SummarizeDto {
  @IsNotEmpty()
  query: string;

  @IsOptional()
  uuidQuery: string;

  @IsNotEmpty()
  @IsEnum(SummarizeEnum)
  type: string;
}
