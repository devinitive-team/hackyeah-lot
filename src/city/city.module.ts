import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { CityModel } from "./city.model";
import { CityService } from "./city.service";
import { CityResolver } from "./city.resolver";

@Module({
  imports: [MongooseModule.forFeature([{ name: "City", schema: CityModel }]), CityModule],
  exports: [CityService],
  providers: [CityService, CityResolver],
})
export class CityModule {}
