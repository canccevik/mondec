import mongoose, { Model, Schema } from 'mongoose'

import { Type } from '../interfaces'
import { TypeMetadataStorage } from '../storages'

export class SchemaFactory {
  public static createForClass<T>(name: string, target: Type<T>): Model<T> {
    const schemaMetadata = TypeMetadataStorage.getSchemaMetadataByTarget(target)
    const propertyMetadata = TypeMetadataStorage.getClassFieldsByPredicate(
      (item) => item.target === target
    )

    const schema = new Schema(
      Object.assign(
        (target as any).schema,
        ...propertyMetadata.map((item) => {
          return { [item['propertyKey']]: item.options }
        })
      ),
      schemaMetadata?.options
    )
    return mongoose.model<T>(name, schema)
  }
}
