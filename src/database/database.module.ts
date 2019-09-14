import config from "config";
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forRoot(config.get("mongo.url"))],
})
export class DatabaseModule {}
