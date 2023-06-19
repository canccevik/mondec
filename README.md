<p align="center">
<img src="https://i.imgur.com/OOd3beV.jpg" alt="Mondec Logo" width="500" height="170"/>
</p>

<p align="center">🗄️Create simple and clean class-based Mongoose schemas with TypeScript decorators.</p>

## Features

- Lightweight
- Class based schemas
- Easy usage with TS decorators

## Installation

Using npm:

```js
npm install mondec
```

You need to enable emitting decorator metadata in your Typescript config. Add these two lines to your tsconfig.json file under the compilerOptions key:

```js
"emitDecoratorMetadata": true,
"experimentalDecorators": true
```

## Usage

```ts
import mongoose, { Model } from 'mongoose'
import {
  Method,
  MongooseNextFunc,
  PostHook,
  PreHook,
  Prop,
  Schema,
  SchemaFactory,
  Static
} from 'mondec'

interface IUser {
  username: string
  age: number
}

interface IUserSchema extends IUser {
  getBirthYear(): number
}

interface IUserModel extends Model<IUserSchema> {
  getAdults(): UserDocument[]
}

@Schema({
  versionKey: false
})
class User {
  @Prop({
    type: String,
    unique: true,
    required: true
  })
  public username!: string

  @Prop({
    type: Number
  })
  public age!: number

  @Method()
  public getBirthYear(): number {
    return new Date().getFullYear() - this.age
  }

  @Static()
  public async getAdults(): Promise<UserDocument[]> {
    const _this = this as unknown as IUserModel
    return _this.find({ age: { $gte: 18 } })
  }

  @PreHook('save')
  public save(next: MongooseNextFunc): void {
    const _this = this as unknown as UserDocument

    if (_this.age >= 50) {
      next(new Error('50 years and over are not allowed to register!'))
    }
    next()
  }

  @PostHook('findOne')
  public findOne(user: UserDocument): void {
    if (!user) {
      throw new Error('User cannot found!')
    }
  }
}

const UserSchema = SchemaFactory.createForClass<IUser, IUserModel>(User)
const UserModel = mongoose.model<IUser, IUserModel>('users', UserSchema)
type UserDocument = ReturnType<typeof UserModel['hydrate']>
```

## Contributing

1. Fork this repository.
2. Create a new branch with feature name.
3. Create your feature.
4. Commit and set commit message with feature name.
5. Push your code to your fork repository.
6. Create pull request.

## License

[MIT](https://github.com/canccevik/mondec/blob/master/LICENSE)
