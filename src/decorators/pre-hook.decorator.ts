import { MongooseMiddleware } from '../interfaces'
import { createMethodDecorator } from './create-method-decorator'

export function PreHook(method: MongooseMiddleware): Function {
  return createMethodDecorator('hook', {
    hookType: 'pre',
    middlewareType: method
  })
}
