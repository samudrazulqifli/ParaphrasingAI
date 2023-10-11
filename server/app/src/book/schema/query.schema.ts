import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  collection: 'query',
  versionKey: false,
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
})
export class Query {
  constructor(query: Partial<Query>) {
    Object.assign(this, query);
  }
  @Prop()
  uuid: string;

  @Prop()
  userUuid: string;

  @Prop()
  bookRef: string;

  @Prop()
  messages: string;

  @Prop()
  referenceSources: boolean;

  @Prop()
  result: string;
}

export const querySchema = SchemaFactory.createForClass(Query);
