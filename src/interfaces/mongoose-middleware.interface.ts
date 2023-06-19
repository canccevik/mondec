import {
  MongooseDefaultQueryMiddleware,
  MongooseDistinctDocumentMiddleware,
  MongooseDistinctQueryMiddleware,
  MongooseDocumentMiddleware,
  MongooseQueryAndDocumentMiddleware,
  MongooseQueryMiddleware,
  MongooseQueryOrDocumentMiddleware
} from 'mongoose'

export type MongooseMiddleware =
  | MongooseQueryMiddleware
  | MongooseDocumentMiddleware
  | MongooseDistinctQueryMiddleware
  | MongooseDefaultQueryMiddleware
  | MongooseQueryOrDocumentMiddleware
  | MongooseDistinctDocumentMiddleware
  | MongooseQueryAndDocumentMiddleware
