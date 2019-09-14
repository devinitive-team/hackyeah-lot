import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

import { DatabaseModule} from "./database/database.module";

import { CitiesResolver } from "./cities/cities.resolver";

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot({
      debug: false,
      playground: true,
      typePaths: ["./**/*.graphql"],
    }),
  ],
  providers: [CitiesResolver],
})
export class AppModule {}
