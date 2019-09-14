import { Schema } from "mongoose";

export const CityModel = new Schema({
  category: String,
  code: String,
  description: String,
  name: String,
});
