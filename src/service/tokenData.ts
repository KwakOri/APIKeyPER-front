import { privateInstance } from "./service";

export const getMyTokenDatas = async () => {
  const result = await privateInstance.get("/token");
  console.log(result);
};
