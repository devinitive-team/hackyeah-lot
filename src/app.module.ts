import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

import { DatabaseModule } from "./database.module";

import { CityModule } from "./city/city.module";

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      typePaths: ["./**/*.graphql"],
    }),
    CityModule,
  ],
})
export class AppModule {}
