import { Schema, SchemaOptions } from 'mongoose'

import { Type } from '../interfaces'
import { TypeMetadataStorage } from '../storages'

export class SchemaFactory {
  public static createForClass<T>(target: Type<T>): Schema<T> {
    const schemaMetadata = TypeMetadataStorage.getSchemaMetadataByTarget(target)
    const propertyMetadata = TypeMetadataStorage.getPropertyMetadataByTarget(target)
    const methodsMetadata = TypeMetadataStorage.getMethodMetadataByTarget(target)

    const schema = new Schema<T>(
      Object.assign(
        {},
        ...propertyMetadata.map((item) => {
          return { [item['propertyKey']]: item.options }
        })
      ),
      schemaMetadata?.options as SchemaOptions<any>
    )

    methodsMetadata.forEach((metadata) => {
      schema[metadata.type](metadata.propertyKey as string, metadata.value)
    })
    return schema
  }
}
