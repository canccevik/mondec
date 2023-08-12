import { Schema } from 'mongoose'

import { UserSchema } from './schemas/user.schema'

describe('Schema Factory', () => {
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
})
