export interface User {
  username: string,
  email: string,
  password: string,
}

export interface UserWithId extends User {
  id: number
}