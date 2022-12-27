import axios, { AxiosResponse } from "axios";
import { EnvConfig } from "../../constants/interfaces/config.interface";

export class ProductsService {
  constructor(private env: EnvConfig) {}

  public async getList() {
    let results: AxiosResponse<any> = await axios.get(`${this.env.basePath}/products`);
    return results;
  }
  
  public async getProduct(query: string) {
    let results: AxiosResponse<any> = await axios.get(`${this.env.basePath}/products/search?q=${query}`);
    return results;
  }
}
