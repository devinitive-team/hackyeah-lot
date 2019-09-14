import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { FlightModel } from "./flight.model";
import { FlightService } from "./flight.service";
import { FlightResolver } from "./flight.resolver";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Flight", schema: FlightModel }]),
    FlightModule,
  ],
  exports: [FlightService],
  providers: [FlightService, FlightResolver],
})
export class FlightModule {}
