<p align="center">
<img src="https://i.imgur.com/OOd3beV.jpg" alt="Mondec Logo" width="500" height="170"/>
</p>

<p align="center">🗄️Create simple and clean class-based Mongoose schemas with TypeScript decorators.</p>

## Features

- Lightweight
- Class based schemas
- Easy usage with TS decorators

## Installation

Using pnpm:

```js
pnpm install mondec
```

You need to enable emitting decorator metadata in your Typescript config. Add these two lines to your tsconfig.json file under the compilerOptions key:

```js
"emitDecoratorMetadata": true,
"experimentalDecorators": true
```

## Usage

```ts
import mongoose from 'mongoose'
import { Prop, Schema, SchemaFactory } from 'mondec'

@Schema({
  versionKey: false
})
class User {
  @Prop({
    type: String,
    unique: true,
    required: true
  })
  public username: string

  @Prop({
    type: Number
  })
  public age: number
}

const UserSchema = SchemaFactory.createForClass(User)
const UserModel = mongoose.model('users', UserSchema)
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
