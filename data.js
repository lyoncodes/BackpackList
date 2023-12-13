const items = [
  {
    id: 1,
    name: 'headlamp',
    description: 'black and decker 200xb',
    weight: 1.75
  },
  {
    id: 2,
    name: 'sleeping bag',
    description: 'REI feather down',
    weight: 3.4
  },
  {
    id: 3,
    name: 'camp stove',
    description: 'MSI gas burner',
    weight: 1.15
  }
]
const trips = [
  {
    title: 'enchantments day trip',
    id: 1,
    items: [
      1,
      2
    ],
    users: [
      1
    ]
  },
  {
    title: 'cowlitz-rama romp',
    id: 2,
    items: [
      1,
      2,
      3
    ],
    users: [
      1
    ]
  },
]
const users = [
  {
    id: 1,
    username: 'michaellyon',
    trips: [
      1
    ],
    items: [
      1,
      2
    ]
  }
]

let user = {}

const setUser = (username) => {
  user = users.find(user => user.username == username);
  return user;
}

setUser(users[0].username);

const getUser = () => {
  return user;
}

const getAllItems = () => {
  return items;
}

const getItem = (id) => {
  return items.find(item => item.id == id);
}

const createItem = (item) => {
  items.push(item);
  console.log(items)
  return items;
}

const getAllTrips = () => {
  return trips;
}

const getUserTrips = (id) => {
  return trips.filter((trip) => trip.users.includes(id))
}

const getTrip = (id) => {
  return trips.find(trip => trip.id == id);
}


export { items, trips, users, getUser, getAllItems, getItem, getAllTrips, getUserTrips, getTrip, createItem }