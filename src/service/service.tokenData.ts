import { privateInstance } from "./instances";

export const getAllTokenData = async () => {
  const { data } = await privateInstance.get("/token");
  return data;
};

export const getTokenData = async ({ id }: { id: string }) => {
  const { data } = await privateInstance.get(`/token/${id}`);
  return data;
};
