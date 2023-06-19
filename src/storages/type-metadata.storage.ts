import { Type } from '../interfaces'
import { PropertyMetadata, SchemaMetadata } from '../metadata'
import { MethodMetadata } from '../metadata/method.metadata'

class TypeMetadataStorageHost {
  private schemas = new Array<SchemaMetadata>()
  private properties = new Array<PropertyMetadata>()
  private methods = new Array<MethodMetadata>()

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

  public addMethodMetadata(metadata: MethodMetadata): void {
    this.methods.push(metadata)
  }

  public getMethodMetadataByTarget<T>(target: Type<T>): MethodMetadata[] {
    return this.methods.filter((metadata) => metadata.target === target)
  }
}

export const TypeMetadataStorage = new TypeMetadataStorageHost()
