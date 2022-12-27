export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  contact: string;
  gender: string;
  image?: string;
  token?: string;
}

export interface UserLogin {
  username: string;
  password: string;
}