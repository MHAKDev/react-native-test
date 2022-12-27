import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../../constants/interfaces/config.interface";
import { UserLogin } from "../../constants/interfaces/user.interface";

export class AuthService {
  constructor(private env: EnvConfig) {}

  public async auth(payload: UserLogin) {
    let results: AxiosResponse<any> = await axios.post(
      `${this.env.basePath}/auth/login`, payload
      )
    return results;
  }
}
