import { Injectable, Logger } from "@nestjs/common";
import { Interval, NestSchedule } from "nest-schedule";

import axios from "../axiosWrapper";

@Injectable()
export class TokenService extends NestSchedule {
  private readonly logger = new Logger(TokenService.name);

  constructor() {
    super();
    this.getToken();
  }
  @Interval(20 * 60 * 1000)
  async getToken() {
    const bodyFormData = {
      secret_key: "2przp49a52",
    };

    try {
      const res = await axios({
        method: "post",
        url: "https://api.lot.com/flights-dev/v2/auth/token/get",
        data: bodyFormData,
        headers: {
          "Content-Type": "application/json",
          "X-Api-Key": "9YFNNKS31u9gCFKPetPWdAAjEXnED0B3K18AeYgg",
        },
      });

      axios.defaults.headers.Authorization = `Bearer ${res.data.access_token}`;

      this.logger.log("Token has been refreshed!");
    } catch (error) {
      this.logger.error(error);
    }
  }
}
