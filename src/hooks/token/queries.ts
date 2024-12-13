import { TokenSchema } from "@/data";
import { getAllTokenData } from "@/service/service.tokenData";

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
};
