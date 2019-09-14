import { Module } from "@nestjs/common";

import { TokenService } from "./token.service";

@Module({
  imports: [TokenModule],
  exports: [TokenService],
  providers: [TokenService],
})
export class TokenModule {}
