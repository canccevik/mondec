import { SchemaOptions } from 'mongoose'

import { TypeMetadataStorage } from '../storages'

export function Schema(options: SchemaOptions = {}): ClassDecorator {
  return (target: object): void => {
    TypeMetadataStorage.addSchemaMetadata({
      target,
      options
    })
  }
}
