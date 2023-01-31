import { PropOptions } from '../interfaces'
import { TypeMetadataStorage } from '../storages'

export function Prop(options: PropOptions = {}): MethodDecorator {
  return (target: object, propertyKey: string | symbol): void => {
    TypeMetadataStorage.addPropertyMetadata({
      target,
      propertyKey,
      options
    })
  }
}
