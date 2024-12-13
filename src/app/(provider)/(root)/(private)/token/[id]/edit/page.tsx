"use client";

import Loading from "@/components/Loading";
import SVGIcon from "@/components/SVGIcon";
import TokenForm from "@/components/TokenForm";
import { useTokenData } from "@/hooks/token/useQuery";
import Mobile from "@/layouts/Mobile";
import { useParams, useRouter } from "next/navigation";

const TokenEditPage = () => {
  const router = useRouter();
  const handleBackButtonClick = () => {
    router.back();
  };

  const { id } = useParams();

  const { data: tokenData, isPending } = useTokenData({ id: id as string });

  if (isPending || !tokenData) return <Loading />;
  return (
    <Mobile>
      <div className="w-full h-full flex flex-col justify-center items-center p-4">
        <div className="w-full flex flex-col px-10 py-6 gap-6 border border-primary-45 rounded-lg custom-shadow-small">
          <div className="w-full flex justify-end">
            <button onClick={handleBackButtonClick}>
              <SVGIcon icon={"IC_Cancel"} />
            </button>
          </div>
          <div className="flex flex-col items-center">
            <h2 className={"text-[20px] font-semibold text-primary-85"}>
              Edit the key
            </h2>
            <p className="text-[14px] text-primary-55">Edit the key</p>
          </div>
          <TokenForm values={tokenData} onSubmit={} />
        </div>
      </div>
    </Mobile>
  );
};

export default TokenEditPage;
