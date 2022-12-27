import { EnvConfig } from "../constants/interfaces/config.interface";
import { ENV } from "./config";
import { AuthService } from "./login";
import { ProductsService } from "./products";
import autoBind from 'auto-bind';

export class SDK {

  AuthService: AuthService;
  ProductsService: ProductsService;

  constructor(private env: EnvConfig) {
    if (!this.env) {
      this.env = ENV;
    }
    this.env = {
      token: '',
      basePath: 'https://dummyjson.com'
    }
    this.AuthService = new AuthService(this.env);
    this.ProductsService = new ProductsService(this.env);

    autoBind(this.AuthService);
    autoBind(this.ProductsService);
  }

  configure(env: EnvConfig) {
    Object.assign(this.env, env);
  }
}
