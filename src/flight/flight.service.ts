import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Flight } from "./flight.interface";

@Injectable()
export class FlightService {
  constructor(
    @InjectModel("Flight") private readonly flightModel: Model<Flight>,
  ) {}

  public all(): Promise<Flight[]> {
    return this.flightModel.find().exec();
  }

  public one(id: string): Promise<Flight> {
    return this.flightModel.findOne({ id }).exec();
  }
}
