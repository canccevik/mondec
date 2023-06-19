import { MongooseMiddleware } from '../interfaces'
import { createMethodDecorator } from './create-method-decorator'

export function PostHook(method: MongooseMiddleware): Function {
  return createMethodDecorator('hook', {
    hookType: 'post',
    middlewareType: method
  })
}
