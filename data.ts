// mock types
type User = {
  id: Number,
  email: String,
  userName: String,
  trips: Number[],
  items: Number[],
}

type Item = {
  id: Number,
  name: String,
  description: String,
  weight: Number,
};

type Items = Item[];

type Trip = {
  id: Number,
  title: String,
  items: Items,
  users: User[],
}