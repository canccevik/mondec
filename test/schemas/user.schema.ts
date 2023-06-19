import mongoose, { Model } from 'mongoose'

import { Method, Prop, Schema, SchemaFactory, Static } from '../../src'

interface IUser {
  username: string
  age: number
}

interface IUserSchema extends IUser {
  getBirthYear(): number
}

interface IUserModel extends Model<IUserSchema> {
  getAdults(): UserDocument[]
}

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

  @Method()
  public getBirthYear(): number {
    return new Date().getFullYear() - this.age
  }

  @Static()
  public async getAdults(): Promise<UserDocument[]> {
    const userModel = this as unknown as IUserModel
    return userModel.find({ age: { $gte: 18 } })
  }
}

export const UserSchema = SchemaFactory.createForClass<IUser, IUserModel>(User)
export const UserModel = mongoose.model<IUser, IUserModel>('users', UserSchema)
export type UserDocument = ReturnType<typeof UserModel['hydrate']>
