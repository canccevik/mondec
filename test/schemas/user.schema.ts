import { Method, Prop, Schema } from '../../src'

export interface IUser {
  username: string
  age: number
  getBirthYear(): number
}

@Schema({
  versionKey: false
})
export class User {
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
}
