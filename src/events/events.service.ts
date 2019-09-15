import { Injectable, Logger } from "@nestjs/common";

import axios from "axios";

@Injectable()
export class EventsService {
  private readonly logger = new Logger(EventsService.name);

  async getEvents(city: string) {
    try {
      const response =
        await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?size=5&apikey=2piAb9YpPuJxFsFfhYu86iGEnBirWGAh&city=${city}`);
      return response.data._embedded.events.map(event => ({
        name: event.name,
        url: event.url,
        images: event.images,
        startTime: event.dates.start.dateTime,
      }));
    } catch (error) {
      this.logger.error(error);
    }
  }
}
