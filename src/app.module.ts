import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

import { CitiesResolver } from "./cities/cities.resolver";

@Module({
  imports: [
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      typePaths: ["./**/*.graphql"],
    }),
  ],
  providers: [CitiesResolver],
})
export class AppModule {}
