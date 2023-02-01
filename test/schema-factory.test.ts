import { Schema } from 'mongoose'

import { SchemaFactory } from '../src'
import { User } from './schemas'

describe('Schema Factory', () => {
  it('should create schema for class', () => {
    const userSchema = SchemaFactory.createForClass(User)

    expect(userSchema instanceof Schema).toBe(true)
    expect((userSchema as any).options.versionKey).toBe(false)
    expect(userSchema.obj.username).toStrictEqual({ type: String, unique: true, required: true })
    expect(userSchema.obj.age).toStrictEqual({ type: Number })
  })
})
