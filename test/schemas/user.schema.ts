import mongoose from 'mongoose'

import { Prop, Schema, SchemaFactory } from '../../src'

@Schema({
  versionKey: false
})
class User {
  @Prop({
    type: String,
    unique: true,
    required: true
  })
  public username!: string

  @Prop({
    type: Number
  })
  public age!: number
}

export const UserSchema = SchemaFactory.createForClass(User)
export const UserModel = mongoose.model('users', UserSchema)
export type UserDocument = ReturnType<(typeof UserModel)['hydrate']>
