import { Injectable, Logger } from "@nestjs/common";

import axios from "../axiosWrapper";

@Injectable()
export class FareService {
  private readonly logger = new Logger(FareService.name);

  public async all(opts: any): Promise<any[]> {
    const bodyFormData = {
      params: {} as any,
    };

    for (const [key, value] of Object.entries(opts)) {
      if (value) {
        bodyFormData.params[key] = value;
      }
    }

    try {
      const res = await axios.post(
        "https://api.lot.com/flights-dev/v2/booking/fare",
        bodyFormData,
      );

      return res.data.data.flat();
    } catch (error) {
      this.logger.error(error);
    }
  }
}
