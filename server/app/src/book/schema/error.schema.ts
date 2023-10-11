import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  collection: 'error',
  versionKey: false,
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
})
export class Error {
  constructor(error: Partial<Error>) {
    Object.assign(this, error);
  }
  @Prop()
  message: string;

  @Prop()
  route: string;

  @Prop()
  data: string;
}

export const errorSchema = SchemaFactory.createForClass(Error);
