import { TokenSchema } from "@/data";
import { queryOptions, tokenQueryKeys } from "@/hooks/token/queries";
import {
  deleteTokenData,
  postTokenData,
  updateTokenData,
} from "@/service/service.tokenData";
import { getPagePath } from "@/utils/urls/getPathname";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const useAllTokenData = () =>
  useQuery<{ data: TokenSchema[] }, Error, TokenSchema[]>(
    queryOptions.tokens()
  );

export const useTokenData = ({ id }: { id: string }) =>
  useQuery<{ data: TokenSchema }, Error, TokenSchema>(
    queryOptions.token({ id })
  );

export const useTokenPost = (
  queryClient: QueryClient,
  router: AppRouterInstance
) =>
  useMutation({
    mutationFn: (tokenData: TokenSchema) => postTokenData({ tokenData }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: tokenQueryKeys.all });
      alert("저장되었습니다.");
      router.replace(getPagePath.homePage());
    },
  });

export const useTokenUpdate = (
  queryClient: QueryClient,
  router: AppRouterInstance
) =>
  useMutation({
    mutationFn: (tokenData: TokenSchema) => updateTokenData({ tokenData }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: tokenQueryKeys.all });
      alert("수정되었습니다.");
      router.replace(getPagePath.homePage());
    },
  });

export const useTokenDelete = (
  queryClient: QueryClient,
  router: AppRouterInstance
) =>
  useMutation({
    mutationFn: (id: string) => deleteTokenData({ id }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: tokenQueryKeys.all });
      alert("삭제되었습니다.");
      router.replace(getPagePath.homePage());
    },
  });
