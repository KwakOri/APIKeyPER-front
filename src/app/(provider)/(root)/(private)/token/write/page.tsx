"use client";

import SVGIcon from "@/components/SVGIcon";
import TokenForm from "@/components/TokenForm";
import Mobile from "@/layouts/Mobile";
import { useRouter } from "next/navigation";

const WritingTokenPage = () => {
  const router = useRouter();
  const handleBackButtonClick = () => {
    router.back();
  };

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
          <TokenForm />
        </div>
      </div>
    </Mobile>
  );
};

export default WritingTokenPage;
