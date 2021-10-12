export interface userDto {
  username?: string,
  name?: string,
  lastName?: string,
  age?: number,
}

export interface resultDto {
  message?: string,
  data?: userDto | userDto[];
}
