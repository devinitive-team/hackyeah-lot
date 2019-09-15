import { Args, Query, Resolver } from "@nestjs/graphql";
import { FareService } from "./fare.service";

@Resolver("Fare")
export class FareResolver {
  constructor(private readonly fareService: FareService) {}

  @Query()
  async fares(
    @Args("listIdOutbound") listIdOutbound: number[],
    @Args("idInbound") idInbound?: number,
    @Args("idOffer") idOffer?: number[],
    @Args("fareFamilyReturnCod") fareFamilyReturnCod?: string,
    @Args("fareFamilyOutwarCod") fareFamilyOutwarCod?: string,
  ) {
    return await this.fareService.all({
      listIdOutbound,
      idInbound,
      idOffer,
      fareFamilyReturnCod,
      fareFamilyOutwarCod,
    });
  }
}
