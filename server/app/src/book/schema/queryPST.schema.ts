import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { QueryPSTEnum } from 'src/book/enum/pst.enum';

@Schema({
  collection: 'querypst',
  versionKey: false,
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
})
export class QueryPST {
  constructor(queryPst: Partial<QueryPST>) {
    Object.assign(this, queryPst);
  }
  @Prop()
  uuid: string;

  @Prop({ default: 'NA' })
  userUuid: string;

  @Prop({ default: 'NA' })
  queryUuid: string;

  @Prop()
  messages: string;

  @Prop()
  result: string;

  @Prop({ enum: QueryPSTEnum })
  type: string;
}

export const queryPstSchema = SchemaFactory.createForClass(QueryPST);
