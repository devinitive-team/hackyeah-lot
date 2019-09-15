import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRoot(
      process.env.MONGO_URL || "mongodb://94.130.13.126/lot",
    ),
  ],
})
export class DatabaseModule {}
