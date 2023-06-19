import { TypeMetadataStorage } from '../storages'

export function Method(): Function {
  return (target: object, propertyKey: string | symbol): void => {
    const targetMethod = target[propertyKey as keyof typeof target]

    TypeMetadataStorage.addMethodMetadata({
      target: target.constructor,
      type: 'method',
      value: targetMethod,
      propertyKey
    })
  }
}
