import { Schema, SchemaOptions } from 'mongoose'

import { Type } from '../interfaces'
import { TypeMetadataStorage } from '../storages'

export class SchemaFactory {
  public static createForClass<T = {}, K = {}>(target: Type<T>): Schema<T, K> {
    const schemaMetadata = TypeMetadataStorage.getSchemaMetadataByTarget(target)
    const propertyMetadata = TypeMetadataStorage.getPropertyMetadataByTarget(target)

    const schema = new Schema<T, K>(
      Object.assign(
        {},
        ...propertyMetadata.map((item) => {
          return { [item['propertyKey']]: item.options }
        })
      ),
      schemaMetadata?.options as SchemaOptions<any>
    )
    return schema
  }
}
