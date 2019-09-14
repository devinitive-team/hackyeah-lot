import { Document } from "mongoose";

export interface ICity extends Document {
  category: string;
  code: string;
  description: string;
  name: string;
}
