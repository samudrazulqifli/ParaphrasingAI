import { IsNotEmpty, IsOptional } from 'class-validator';

export class RegisterQuestionDto {
  @IsNotEmpty()
  src: string;

  @IsNotEmpty()
  messages: string;

  @IsNotEmpty()
  referenceSources: string;

  @IsOptional()
  queryUUid: string;
}
