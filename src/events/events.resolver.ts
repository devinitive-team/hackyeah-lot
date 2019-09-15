import { Args, Query, Resolver } from "@nestjs/graphql";
import { EventsService } from "./events.service";

import { IEvent } from "./events.interface";

@Resolver("Events")
export class EventsResolver {
  constructor(private readonly eventsService: EventsService) {}

  @Query()
  async events(
    @Args("city") city: string,
  ): Promise<IEvent[]> {
    return await this.eventsService.getEvents(city);
  }
}
