import { Type } from '../interfaces'
import { PropertyMetadata, SchemaMetadata } from '../metadata'

class TypeMetadataStorageHost {
  private schemas = new Array<SchemaMetadata>()
  private properties = new Array<PropertyMetadata>()

  public addSchemaMetadata(metadata: SchemaMetadata): void {
    this.schemas.push(metadata)
  }

  public getSchemaMetadataByTarget<T>(target: Type<T>): SchemaMetadata | undefined {
    return this.schemas.find((metadata) => metadata.target === target)
  }

  public addPropertyMetadata(metadata: PropertyMetadata): void {
    this.properties.push(metadata)
  }

  public getPropertyMetadataByTarget<T>(target: Type<T>): PropertyMetadata[] {
    return this.properties.filter((metadata) => metadata.target === target)
  }
}

export const TypeMetadataStorage = new TypeMetadataStorageHost()
