import { Prop, Schema } from '../../src'

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
}
