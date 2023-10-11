import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  collection: 'book',
  versionKey: false,
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
})
export class Book {
  constructor(error: Partial<Book>) {
    Object.assign(this, error);
  }
  @Prop()
  title: string;

  @Prop()
  src: string;

  @Prop()
  userUuid: string;
}

export const bookSchema = SchemaFactory.createForClass(Book);
