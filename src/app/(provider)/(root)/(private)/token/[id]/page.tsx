"use client";

import Loading from "@/components/Loading";
import TokenDetail from "@/components/TokenDetail";
import { dummyTokens } from "@/data";
import Mobile from "@/layouts/Mobile";
import { getTokenData } from "@/service/service.tokenData";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const TokenDetailPage = () => {
  const { id } = useParams();
  const tokenData = dummyTokens.find((token) => token.id === id);
  const { data, isPending } = useQuery({
    queryKey: ["token", id],
    queryFn: () => getTokenData({ id: id as string }),
  });
  console.log(data?.data);

  if (isPending) return <Loading />;
  return (
    <Mobile>
      <div className="w-full h-full flex justify-center items-center px-4">
        {tokenData && <TokenDetail tokenData={data?.data} />}
      </div>
    </Mobile>
  );
};

export default TokenDetailPage;
