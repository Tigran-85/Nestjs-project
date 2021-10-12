import { Injectable } from "@nestjs/common";
import { resultDto, userDto } from "./user.dto";

@Injectable()
export class UserService {
  users: userDto[] = [];

  constructor() {
  }

  public addUser(payload: userDto): resultDto {
    const isExist = this.users.filter(elem => elem.username === payload.username);

    if (isExist && isExist.length > 0) {
      return {
        message: "User already exist",
        data: []
      };
    }

    this.users.push(payload);
    return {
      message: "",
      data: payload
    };
  }

  public getUser(): resultDto {
    return {
      message: "",
      data: this.users
    };
  }

  public getUserByUsername(username: string): resultDto {
    const isExist = this.users.filter(elem => elem.username === username);
    if (isExist && isExist.length > 0) {
      return {
        message: "",
        data: isExist
      };
    }

    return {
      message: "Incorrect username",
      data: []
    };
  }

  public updateUser(username: string, payload: userDto): resultDto {
    const isExist = this.users.map(elem => {
      if (elem.username === username) {
        elem.name = payload.name;
        elem.lastName = payload.lastName;
        elem.age = payload.age;
      }

      return elem;
    });


    if (isExist && isExist.length > 0) {
      return {
        message: "User info is updated",
        data: []
      };
    } else {
      return {
        message: "Incorrect username",
        data: []
      };
    }
  }

  public deleteUser(username: string): resultDto {
    this.users.forEach((elem, index) => {
      if (elem.username === username) {
        this.users.splice(index,1)
      }
    });


    return {
      message: "User is deleted",
      data: []
    };

  }
}
