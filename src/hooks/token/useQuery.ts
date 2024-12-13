import { TokenSchema } from "@/data";
import { queryOptions } from "@/hooks/token/queries";
import { useQuery } from "@tanstack/react-query";

export const useAllTokenData = () =>
  useQuery<{ data: TokenSchema[] }, Error, TokenSchema[]>(
    queryOptions.tokens()
  );
