import { Dyngoose } from 'dyngoose'
import * as uuid from 'uuid'

@Dyngoose.$Table({
  name: 'Item',
})
class Item extends Dyngoose.Table {
  @Dyngoose.Attribute.String({ default: () => uuid() })
  public id: string

  @Dyngoose.Attribute.String()
  public email: string

  @Dyngoose.$PrimaryKey('id')
  static readonly primaryKey: Dyngoose.Query.PrimaryKey<Item, string>

  @Dyngoose.$GlobalSecondaryIndex({ hashKey: 'email' })
  static readonly emailIndex: Dyngoose.Query.GlobalSecondaryIndex<Item>
}