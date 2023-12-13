import express from "express";
import { items } from '../data.js';

const itemApi = express.Router();

itemApi.get('/', (req, res, next) => {
  res.render('itemList', {items})
})

export { itemApi }