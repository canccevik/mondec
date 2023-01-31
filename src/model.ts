import { Schema as MongooseSchema } from 'mongoose'

export abstract class Model {
  public static schema = new MongooseSchema()
}
