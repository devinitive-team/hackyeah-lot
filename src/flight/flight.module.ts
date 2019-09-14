import { Module } from "@nestjs/common";

import { FlightService } from "./flight.service";
import { FlightResolver } from "./flight.resolver";

@Module({
  imports: [FlightModule],
  exports: [FlightService],
  providers: [FlightService, FlightResolver],
})
export class FlightModule {}
