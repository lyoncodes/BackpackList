import express from "express";

const usersRouter = express.Router();

usersRouter.get('/', (req, res, next) => {
  res.send('user resource')
})

export { usersRouter }