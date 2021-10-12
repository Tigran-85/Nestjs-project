import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { userDiToken } from "./user.di";

@Module({
  controllers: [UserController],
  providers: [{
    provide: userDiToken.USER,
    useClass: UserService
  }]
})
export class UserModule {
}
