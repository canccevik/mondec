import { createMethodDecorator } from './create-method-decorator'

export function Static(): Function {
  return createMethodDecorator('static')
}
