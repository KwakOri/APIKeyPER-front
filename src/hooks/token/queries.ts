import { TokenSchema } from "@/data";
import { getAllTokenData, getTokenData } from "@/service/service.tokenData";

export const tokenQueryKeys = {
  all: ["token"] as const,
  tokens: () => [...tokenQueryKeys.all, "all"],
  token: ({ id }: { id: string }) => [...tokenQueryKeys.all, id],
  sortedTokens: ({ sortBy }: { sortBy: string }) => [
    ...tokenQueryKeys.all,
    sortBy,
  ],
};

export const queryOptions = {
  tokens: () => ({
    queryKey: tokenQueryKeys.tokens(),
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
    queryKey: tokenQueryKeys.token({ id }),
    queryFn: () => getTokenData({ id }),
    select: (data: { data: TokenSchema }) => {
      return data.data;
    },
  }),
};
