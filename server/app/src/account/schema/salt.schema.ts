import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document, Mongoose } from 'mongoose';
import { Account } from './account.schema';

@Schema({
  collection: 'salt',
  versionKey: false,
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
})
export class Salt extends Document {
  constructor(salt?: Partial<Salt>) {
    super();
    Object.assign(this, salt);
  }

  @Prop()
  account: string;

  @Prop()
  salt: string;
}

export const SaltSchema = SchemaFactory.createForClass(Salt);
