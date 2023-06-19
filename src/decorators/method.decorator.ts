import { createMethodDecorator } from './create-method-decorator'

export function Method(): Function {
  return createMethodDecorator('method')
}
