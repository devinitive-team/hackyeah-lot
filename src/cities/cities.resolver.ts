import { ParseIntPipe } from "@nestjs/common";
import { Args, Query, Resolver } from "@nestjs/graphql";

@Resolver("Cities")
export class CitiesResolver {
  citiesArray = [
    {
      id: 1,
      name: "Cracow",
    },
    {
      id: 2,
      name: "Warsaw",
    },
  ];

  @Query()
  cities() {
    return this.citiesArray;
  }

  @Query()
  city(@Args("id", ParseIntPipe) id: number) {
    return this.citiesArray.find(city => city.id === id);
  }
}
