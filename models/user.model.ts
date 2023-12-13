import { Dyngoose } from 'dyngoose'
import * as uuid from 'uuid'

@Dyngoose.$Table({
  name: 'User',
})
class User extends Dyngoose.Table {
  @Dyngoose.Attribute.String({ default: () => uuid() })
  public id: string

  @Dyngoose.Attribute.String()
  public email: string

  @Dyngoose.$PrimaryKey('id')
  static readonly primaryKey: Dyngoose.Query.PrimaryKey<User, string>

  @Dyngoose.$GlobalSecondaryIndex({ hashKey: 'email' })
  static readonly emailIndex: Dyngoose.Query.GlobalSecondaryIndex<User>
}