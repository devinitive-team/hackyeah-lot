import { Schema } from "mongoose";

export const FlightModel = new Schema({
  advertisement: String,
  category: String,
  code: String,
  description: String,
  name: String,
  imagesSmall: [String],
  imagesBig: [String],
});
