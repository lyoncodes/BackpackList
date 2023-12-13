import express from "express";
import { items } from './data.js';

const api = express.Router();

api.get("/allItems", (req, res) => {
  return items;
})

export { api }