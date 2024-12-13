"use client";

import Loading from "@/components/Loading";
import TokenDetail from "@/components/TokenDetail";
import { useTokenData } from "@/hooks/token/useQuery";
import Mobile from "@/layouts/Mobile";
import { useParams } from "next/navigation";

const TokenDetailPage = () => {
  const { id } = useParams();

  const { data: tokenData, isPending } = useTokenData({ id: id as string });
  if (isPending || !tokenData) return <Loading />;
  return (
    <Mobile>
      <div className="w-full h-full flex justify-center items-center px-4">
        {tokenData && <TokenDetail tokenData={tokenData} />}
      </div>
    </Mobile>
  );
};

export default TokenDetailPage;
