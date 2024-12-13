import { TokenSchema } from "@/data";
import { getAllTokenData, getTokenData } from "@/service/service.tokenData";

export const queryKeys = {
  all: ["token"] as const,
  tokens: () => [...queryKeys.all, "all"],
  token: ({ id }: { id: string }) => [...queryKeys.all, id],
  sortedTokens: ({ sortBy }: { sortBy: string }) => [...queryKeys.all, sortBy],
};

export const queryOptions = {
  tokens: () => ({
    queryKey: queryKeys.tokens(),
    queryFn: getAllTokenData,
    select: (data: { data: TokenSchema[] }) => {
      return data.data.sort(
        (a, b) =>
          new Date(a.tokenExpiryDate).getTime() -
          new Date(b.tokenExpiryDate).getTime()
      );
    },
  }),
  token: ({ id }: { id: string }) => ({
    queryKey: queryKeys.token({ id }),
    queryFn: () => getTokenData({ id }),
    select: (data: { data: TokenSchema }) => {
      return data.data;
    },
  }),
};
