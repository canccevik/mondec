import mongoose, { Model, Schema } from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

import { SchemaFactory } from '../src'
import { IUser, User } from './schemas'

describe('Schema Factory', () => {
  let userSchema: Schema<IUser>
  let userModel: Model<IUser>

  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri(), { dbName: 'test' })

    userSchema = SchemaFactory.createForClass<IUser>(User)
    userModel = mongoose.model<IUser>('users', userSchema)
  })

  it('should create schema for given class', () => {
    expect(userSchema instanceof Schema).toBe(true)
  })

  it('should schema apply given schema options', () => {
    expect((userSchema as any).options.versionKey).toBe(false)
  })

  it('should schema have defined properties', () => {
    expect(userSchema.obj.username).toStrictEqual({ type: String, unique: true, required: true })
    expect(userSchema.obj.age).toStrictEqual({ type: Number })
  })

  it('should schema method works correctly', async () => {
    const user = await userModel.create({ username: 'johndoe', age: 20 })

    const correctResult = new Date().getFullYear() - 20

    expect(user.getBirthYear()).toEqual(correctResult)
  })
})
