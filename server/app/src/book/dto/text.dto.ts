import { IsEnum, IsNotEmpty, IsOptional, Max } from 'class-validator';
import { TextImprovementEnum } from '../enum/text.enum';

export class TextImprovementDto {
  @IsNotEmpty()
  @Max(500)
  query: string;

  @IsNotEmpty()
  @IsEnum(TextImprovementEnum)
  intent: string;

  @IsOptional()
  uuidQuery: string;
}
