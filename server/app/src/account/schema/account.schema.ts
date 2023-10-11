import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Salt } from './salt.schema';

@Schema({
  collection: 'account',
  versionKey: false,
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
})
export class Account extends Document {
  @Prop()
  uuid: string;

  @Prop()
  name: string;

  @Prop()
  username: string;

  @Prop()
  password: string;

  // @Prop()
  // email: string;

  constructor(account?: Partial<Account>) {
    super();
    Object.assign(this, account);
  }
}

export const AccountSchema = SchemaFactory.createForClass(Account);
