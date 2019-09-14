import {ParseIntPipe} from "@nestjs/common";
import {Args, Query, Resolver} from "@nestjs/graphql";
import axios from "axios"
import {CityService} from "./city.service";

@Resolver("City")
export class CityResolver {
    constructor(private readonly cityService: CityService) {
    }

    @Query()
    async cities() {
        this.getToken();
        return await this.cityService.all();
    }

    @Query()
    async city(@Args("id", ParseIntPipe) id: string) {
        return await this.cityService.one(id);
    }

    async getToken() {
        const bodyFormData = {
            "secret_key": "2przp49a52"
        };

        try {
            const res = await axios({
                method: 'post',
                url: 'https://api.lot.com/flights-dev/v2/auth/token/get',
                data: bodyFormData,
                headers: {'Content-Type': 'application/json', 'X-Api-Key': '9YFNNKS31u9gCFKPetPWdAAjEXnED0B3K18AeYgg'}
            })

            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
}
