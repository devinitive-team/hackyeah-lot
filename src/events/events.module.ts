import { Module } from "@nestjs/common";

import { EventsService } from "./events.service";
import { EventsResolver } from "./events.resolver";

@Module({
  imports: [EventsModule],
  exports: [EventsService],
  providers: [EventsService, EventsResolver],
})
export class EventsModule {}
