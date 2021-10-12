import { Controller, Inject, Post, Body, Get, Param, Put, Delete } from "@nestjs/common";
import { UserService } from "./user.service";
import { userDto } from "./user.dto";
import { userDiToken } from "./user.di";

@Controller("user")
export class UserController {
  constructor(
    @Inject(userDiToken.USER) private readonly userService: UserService
  ) {
  }

  @Post()
  addUser(@Body() payload: userDto) {
    return this.userService.addUser(payload);
  }

  @Get()
  getUser() {
    return this.userService.getUser();
  }

  @Get(":username")
  async getUserByUsername(@Param("username") username: string) {
    return this.userService.getUserByUsername(username);
  }

  @Put(":username")
  async updateUser(@Body() payload: userDto,
                   @Param("username") username: string) {
    return this.userService.updateUser(username, payload);
  }

  @Delete(":username")
  async deleteUser(@Param("username") username: string) {
    return this.userService.deleteUser(username);
  }
}
