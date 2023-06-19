import { MethodType, MongooseMiddleware } from '../interfaces'

export interface MethodOptions {
  hookType: 'pre' | 'post'
  middlewareType: MongooseMiddleware
}

export interface MethodMetadata {
  target: object
  propertyKey: string | symbol
  type: MethodType
  value: (this: any, ...args: any[]) => any
  options?: MethodOptions
}
