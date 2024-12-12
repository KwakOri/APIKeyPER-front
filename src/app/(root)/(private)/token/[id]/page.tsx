"use client";

import TokenDetail from "@/components/TokenDetail";
import { dummyTokens } from "@/data";
import Mobile from "@/layouts/Mobile";
import { useParams } from "next/navigation";

const TokenDetailPage = () => {
  const { id } = useParams();
  const tokenData = dummyTokens.find((token) => token.id === id);

  return (
    <Mobile>
      <div className="w-full h-full flex justify-center items-center px-4">
        {tokenData && <TokenDetail tokenData={tokenData} />}
      </div>
    </Mobile>
  );
};

export default TokenDetailPage;
