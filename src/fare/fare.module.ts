import { Module } from "@nestjs/common";

import { FareService } from "./fare.service";
import { FareResolver } from "./fare.resolver";

@Module({
  imports: [FareModule],
  exports: [FareService],
  providers: [FareService, FareResolver],
})
export class FareModule {}
