import { Schema } from 'mongoose'

import { SchemaFactory } from '../src'
import { User } from './schemas'

describe('Schema Factory', () => {
  let userSchema: Schema<User>

  beforeAll(() => {
    userSchema = SchemaFactory.createForClass(User)
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
})
