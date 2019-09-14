import { Injectable, Logger } from "@nestjs/common";

import { IFlight } from "./flight.interface";

import axios from "../axiosWrapper";

@Injectable()
export class FlightService {
  private readonly logger = new Logger(FlightService.name);

  public async all(opts: any): Promise<IFlight[]> {
    const bodyFormData = {
      params: {} as any,
    };

    for (const [key, value] of Object.entries(opts)) {
      if (value) {
        if (["departureDate", "origin", "destination"].includes(key)) {
          bodyFormData.params[key] = [value];
        } else {
          bodyFormData.params[key] = value;
        }
      }
    }

    try {
      const res = await axios.post(
        "https://api.lot.com/flights-dev/v2/booking/availability",
        bodyFormData,
      );

      return res.data.data.flat();
    } catch (error) {
      this.logger.error(error);
    }
  }
}
