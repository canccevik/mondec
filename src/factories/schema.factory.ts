import { Schema, SchemaOptions } from 'mongoose'

import { Type } from '../interfaces'
import { TypeMetadataStorage } from '../storages'
import { MethodMetadata } from '../metadata/method.metadata'

export class SchemaFactory {
  public static createForClass<T = {}, K = {}>(target: Type<T>): Schema<T, K> {
    const schemaMetadata = TypeMetadataStorage.getSchemaMetadataByTarget(target)
    const propertyMetadata = TypeMetadataStorage.getPropertyMetadataByTarget(target)
    const methodsMetadata = TypeMetadataStorage.getMethodMetadataByTarget(target)

    const schema = new Schema<T, K>(
      Object.assign(
        {},
        ...propertyMetadata.map((item) => {
          return { [item['propertyKey']]: item.options }
        })
      ),
      schemaMetadata?.options as SchemaOptions<any>
    )

    this.registerSchemaMethods(schema, methodsMetadata)
    return schema
  }

  private static registerSchemaMethods(schema: any, methodsMetadata: MethodMetadata[]): void {
    methodsMetadata.forEach((metadata) => {
      if (metadata.type === 'hook' && metadata.options) {
        schema[metadata.options.hookType](metadata.options.middlewareType, metadata.value)
        return
      }
      schema[metadata.type](metadata.propertyKey as string, metadata.value)
    })
  }
}
