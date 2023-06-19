import mongoose, { Schema } from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

import { UserModel, UserSchema } from './schemas/user.schema'

describe('Schema Factory', () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri(), { dbName: 'test' })

    await UserModel.create({ username: 'john', age: 20 })
    await UserModel.create({ username: 'sara', age: 25 })
    await UserModel.create({ username: 'jack', age: 10 })
  })

  it('should create schema for given class', () => {
    expect(UserSchema instanceof Schema).toBe(true)
  })

  it('should schema apply given schema options', () => {
    expect((UserSchema as any).options.versionKey).toBe(false)
  })

  it('should schema have defined properties', () => {
    expect(UserSchema.obj.username).toStrictEqual({ type: String, unique: true, required: true })
    expect(UserSchema.obj.age).toStrictEqual({ type: Number })
  })

  it('should schema method works correctly', async () => {
    const user = await UserModel.findOne({ username: 'john' })

    const correctResult = new Date().getFullYear() - 20

    expect(user?.getBirthYear()).toEqual(correctResult)
  })

  it('should schema static works correctly', async () => {
    const adultUsers = await UserModel.getAdults()

    expect(adultUsers.find((x) => x.age < 18)).toBe(undefined)
  })
})
