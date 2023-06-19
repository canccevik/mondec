import { MethodType } from '../interfaces'
import { TypeMetadataStorage } from '../storages'

export function createMethodDecorator(methodType: MethodType): Function {
  return (target: object, propertyKey: string | symbol): void => {
    const targetMethod = target[propertyKey as keyof typeof target]

    TypeMetadataStorage.addMethodMetadata({
      target: target.constructor,
      type: methodType,
      value: targetMethod,
      propertyKey
    })
  }
}
