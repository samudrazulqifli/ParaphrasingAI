import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { ParaphraseEnum } from '../enum/paraphrase.enum';

export class ParaphraseDto {
  @IsNotEmpty()
  query: string;

  @IsOptional()
  uuidQuery: string;

  @IsNotEmpty()
  @IsEnum(ParaphraseEnum)
  style: string;
}
