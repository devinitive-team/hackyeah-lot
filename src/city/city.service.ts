import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { ICity } from "./city.interface";

@Injectable()
export class CityService {
  constructor(
    @InjectModel("City") private readonly cityModel: Model<ICity>,
  ) {}

  public all(): Promise<ICity[]> {
    return this.cityModel.find().exec();
  }

  public one(id: string): Promise<ICity> {
    return this.cityModel.findOne({ id }).exec();
  }
}
