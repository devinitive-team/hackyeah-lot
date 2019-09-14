import { Document } from "mongoose";

export interface ICity extends Document {
  id: string;
  advertisement: string;
  category: string;
  code: string;
  description: string;
  name: string;
  imagesSmall: string[];
  imagesBig: string[];
}
