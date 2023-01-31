import { Type } from '../interfaces'
import { SchemaMetadata } from '../metadata'

class TypeMetadataStorageHost {
  private schemas = new Array<SchemaMetadata>()

  public addSchemaMetadata(metadata: SchemaMetadata): void {
    this.schemas.push(metadata)
  }

  public getSchemaMetadataByTarget<T>(target: Type<T>): SchemaMetadata | undefined {
    return this.schemas.find((schema) => schema.target === target)
  }
}

export const TypeMetadataStorage = new TypeMetadataStorageHost()
