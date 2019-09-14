import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ScheduleModule } from "nest-schedule";

import { DatabaseModule } from "./database.module";

import { CityModule } from "./city/city.module";
import { FlightModule } from "./flight/flight.module";
import { TokenModule } from "./token/token.module";

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      typePaths: ["./**/*.graphql"],
    }),
    ScheduleModule.register(),

    CityModule,
    FlightModule,
    TokenModule,
  ],
})
export class AppModule {}
