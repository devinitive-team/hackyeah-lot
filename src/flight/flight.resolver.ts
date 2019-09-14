import { Logger } from "@nestjs/common";
import { Args, Query, Resolver } from "@nestjs/graphql";
import { FlightService } from "./flight.service";
import axios from "../axiosWrapper";

@Resolver("Flight")
export class FlightResolver {
  private readonly logger = new Logger(FlightResolver.name);
  constructor(private readonly flightService: FlightService) {}

  @Query()
  async flights() {
    const bodyFormData = {
      cabinClass: "E",
      market: "PL",
      departureDate: ["22022019"],
      returnDate: "25022019",
      origin: ["WAW"],
      tripType: "R",
      adt: 1,
      destination: ["CDG"],
    };

    try {
      const res = await axios({
        method: "post",
        url: "https://api.lot.com/flights-dev/v2/booking/availability",
        data: bodyFormData,
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res);
    } catch (error) {
      this.logger.error(error);
    }
    return await this.flightService.all();
  }
}
