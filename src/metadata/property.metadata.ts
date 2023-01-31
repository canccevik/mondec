import { PropOptions } from '../interfaces'

export interface PropertyMetadata {
  target: object
  propertyKey: string | symbol
  options: PropOptions
}
