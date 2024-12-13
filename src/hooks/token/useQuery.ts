import { TokenSchema } from "@/data";
import { queryOptions, tokenQueryKeys } from "@/hooks/token/queries";
import { postTokenData } from "@/service/service.tokenData";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";

export const useAllTokenData = () =>
  useQuery<{ data: TokenSchema[] }, Error, TokenSchema[]>(
    queryOptions.tokens()
  );

export const useTokenData = ({ id }: { id: string }) =>
  useQuery<{ data: TokenSchema }, Error, TokenSchema>(
    queryOptions.token({ id })
  );

export const useTokenPost = (queryClient: QueryClient) =>
  useMutation({
    mutationFn: (tokenData: TokenSchema) => postTokenData({ tokenData }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: tokenQueryKeys.all });
    },
  });
