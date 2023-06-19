import { MethodType } from '../interfaces'
import { MethodOptions } from '../metadata/method.metadata'
import { TypeMetadataStorage } from '../storages'

export function createMethodDecorator(methodType: MethodType, options?: MethodOptions): Function {
  return (target: object, propertyKey: string | symbol): void => {
    const targetMethod = target[propertyKey as keyof typeof target]

    TypeMetadataStorage.addMethodMetadata({
      target: target.constructor,
      type: methodType,
      value: targetMethod,
      propertyKey,
      options
    })
  }
}
