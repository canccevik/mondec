import { Schema } from 'mongoose'

import { Type } from '../interfaces'
import { TypeMetadataStorage } from '../storages'

export class SchemaFactory {
  public static createForClass<T>(target: Type<T>): Schema<T> {
    const schemaMetadata = TypeMetadataStorage.getSchemaMetadataByTarget(target)
    const propertyMetadata = TypeMetadataStorage.getClassFieldsByPredicate(
      (item) => item.target === target
    )

    const schema = new Schema<T>(
      Object.assign(
        {},
        ...propertyMetadata.map((item) => {
          return { [item['propertyKey']]: item.options }
        })
      ),
      schemaMetadata?.options
    )
    return schema
  }
}
