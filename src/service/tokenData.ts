import { instance } from "./service";

export const getMyTokenDatas = async () => {
  const result = await instance.get("/token");
  console.log(result);
};
