import env from 'react-native-config'
import { EnvConfig } from '../constants/interfaces/config.interface';

export let ENV: EnvConfig = {
  token: "",
  basePath: env.API_BASE_PATH || 'https://dummyjson.com',
};