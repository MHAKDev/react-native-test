import { SDK } from "../../SDK";
import { ENV } from "../../SDK/config";

let sdk: SDK;

export const useGetSDK = () => {

  sdk = new SDK({
    basePath: ENV.basePath,
  });

  return sdk;
};
