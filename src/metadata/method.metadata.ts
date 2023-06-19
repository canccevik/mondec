import { MethodType } from '../interfaces'

export interface MethodMetadata {
  target: object
  propertyKey: string | symbol
  type: MethodType
  value: (this: any, ...args: any[]) => any
}
