import { Args, Query, Resolver } from "@nestjs/graphql";
import { FlightService } from "./flight.service";

@Resolver("Flight")
export class FlightResolver {
  constructor(private readonly flightService: FlightService) {}

  @Query()
  async flights(
    @Args("origin") origin: string,
    @Args("destination") destination: string,
    @Args("departureDate") departureDate: string,
    @Args("cabinClass") cabinClass: string,
    @Args("market") market: string,
    @Args("tripType") tripType: string,
    @Args("adt") adt: number,
    @Args("c14") c14?: string,
    @Args("chd") chd?: string,
    @Args("inf") inf?: string,
    @Args("fromCache") fromCache?: string,
    @Args("fareType") fareType?: string,
    @Args("returnDate") returnDate?: string,
  ) {
    return await this.flightService.all({
      origin,
      destination,
      departureDate,
      cabinClass,
      market,
      tripType,
      adt,
      c14,
      chd,
      inf,
      fromCache,
      fareType,
      returnDate,
    });
  }
}
