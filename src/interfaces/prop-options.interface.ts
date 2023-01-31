import { SchemaDefinitionProperty, SchemaType } from 'mongoose'

export type PropOptions<T = any> = Partial<SchemaDefinitionProperty<T>> | SchemaType
