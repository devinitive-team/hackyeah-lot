import { ParseIntPipe } from "@nestjs/common";
import { Args, Query, Resolver } from "@nestjs/graphql";

import { CityService } from "./city.service";

@Resolver("City")
export class CityResolver {
  constructor(private readonly cityService: CityService) {}

  @Query()
  async cities() {
    return await this.cityService.all();
  }

  @Query()
  async city(@Args("id", ParseIntPipe) id: string) {
    return await this.cityService.one(id);
  }
}
