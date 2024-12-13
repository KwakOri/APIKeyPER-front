import { TokenSchema } from "@/data";
import { privateInstance } from "./instances";

export const getAllTokenData = async () => {
  const { data } = await privateInstance.get("/token");
  return data;
};

export const getTokenData = async ({ id }: { id: string }) => {
  const { data } = await privateInstance.get(`/token/${id}`);
  return data;
};

export const postTokenData = async ({
  tokenData,
}: {
  tokenData: TokenSchema;
}) => {
  const body = {
    tokenName: tokenData.tokenName,
    tokenDescription: tokenData.tokenDescription,
    tokenValue: tokenData.tokenValue,
    tokenCreatedDate: tokenData.tokenCreatedDate,
    tokenExpiryDate: tokenData.tokenExpiryDate,
    notificationOption: tokenData.notificationOption,
  };
  const result = await privateInstance.post(`/token`, body);
  return result;
};

export const updateTokenData = async ({
  tokenData,
}: {
  tokenData: TokenSchema;
}) => {
  const body = {
    tokenName: tokenData.tokenName,
    tokenDescription: tokenData.tokenDescription,
    tokenValue: tokenData.tokenValue,
    tokenCreatedDate: tokenData.tokenCreatedDate,
    tokenExpiryDate: tokenData.tokenExpiryDate,
    notificationOption: tokenData.notificationOption,
  };
  const result = await privateInstance.put(`/token/${tokenData.id}`, body);
  return result;
};
