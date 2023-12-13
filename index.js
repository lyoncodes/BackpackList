import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import createError from 'http-errors';
import cors from 'cors';
import { itemApi } from './routes/items.js';
import { usersRouter } from './routes/users.js';
import { getUser, getUserTrips, getItem, getAllTrips, getTrip, createItem} from './data.js';


const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'pug');

app.use(express.json());
app.use('/items', cors());
app.use('/users', cors());
app.use('/items', itemApi)
app.use('/users', usersRouter)
app.use(express.urlencoded({
  extended: true
}))
// add middleware for backend directory

// 404 handling
app.use((req, res, next) => {
  next(createError(404));
});
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render('error');
});


/**
 * routes
 */
// app.get('/', (req, res) => {
//   res.render('home', { trips: getUserTrips(1), user: getUser(1) });
// })

// app.get('/item/:id', (req, res) => {
//   res.render('itemDetail', { item: getItem(req.params.id) });
// })

// app.get('/trips/:userId', (req, res) => {
//   res.render('userTrips', { trips: getUserTrips(req.params.userId) });
// })

// app.get('/trip/:id', (req, res) => {
//   let trip = getTrip(req.params.id);
//   let tripList = [];
  
//   trip.items.forEach((id) => {
//     tripList.push(getItem(id))
//   })
  
//   res.render('tripDetail', { trip: trip, tripList: tripList });
// })

// app.get('/user/:id', (req, res) => {
//   res.render('profileEdit', { user: getUser(req.params.id) })
// })

// app.post('/createItem', async (req, res) => {
//   createItem(req.body)
//   console.log(req.body)
// })

app.listen(3000, () => {console.log('app is listening')});