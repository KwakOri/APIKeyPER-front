"use client";

import Button from "@/components/Buttons/Button";
import CancelButton from "@/components/Buttons/CancelButton";
import Input from "@/components/Input";
import SVGIcon from "@/components/SVGIcon";
import { TokenSchema } from "@/data";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface TokenDetailProps {
  tokenData: TokenSchema;
}

const TokenDetail = ({ tokenData }: TokenDetailProps) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  const {
    id,
    tokenName,
    tokenFrom,
    tokenValue,
    tokenCreatedDate,
    tokenExpiryDate,
    notificationOption,
    createdAt,
  } = tokenData;
  const router = useRouter();
  const handleBackButtonClick = () => router.back();
  const handleCopyButtonClick = () => {};
  const handleEditButtonClick = () => {};
  const handleDeleteButtonClick = () => {};

  return (
    <article
      className={
        "rounded-lg px-10 py-9 flex flex-col gap-6 w-full border border-primary-45 custom-shadow-small"
      }
    >
      <div className="w-full flex justify-end">
        <CancelButton onClick={handleBackButtonClick} />
      </div>
      <div className="flex gap-4 items-center">
        <div className="bg-primary-55 w-10 h-10 rounded-lg"></div>
        <div className="flex flex-col gap-2 items-start grow">
          <h3 className="text-xl text-primary-85 font-semibold">{tokenName}</h3>
          <p className="text-[14px] text-primary-55">{tokenFrom}</p>
        </div>
      </div>
      <div className="flex justify-around px-1">
        <div className="grow">
          <h4 className="text-sm text-primary-55 ">Created Date</h4>
          <p className="text-primary-85 font-semibold">
            {dayjs(tokenCreatedDate).format("YY.MM.DD")}
          </p>
        </div>
        <div className="grow">
          <h4 className="text-sm text-primary-55 ">Expiry Date</h4>
          <p className="text-primary-85 font-semibold">
            {dayjs(tokenExpiryDate).format("YY.MM.DD")}
          </p>
        </div>
      </div>
      <Input
        label={"key"}
        id={"key"}
        defaultValue={tokenValue}
        type={isAuthorized ? "text" : "password"}
        disabled={true}
      />
      {isAuthorized ? (
        <div className="flex gap-2">
          <Button className={"shrink"} onClick={handleCopyButtonClick}>
            <SVGIcon icon={"IC_Paste"} className="fill-white" />
          </Button>
          <Button className={"shrink"} onClick={handleEditButtonClick}>
            <SVGIcon icon={"IC_Edit"} className="fill-white" />
          </Button>
          <Button className={"shrink"} onClick={handleDeleteButtonClick}>
            <SVGIcon icon={"IC_Delete"} className="fill-white" />
          </Button>
        </div>
      ) : (
        <Button onClick={() => setIsAuthorized(true)}>
          <SVGIcon icon={"IC_Eye"} className="fill-white" />
        </Button>
      )}
    </article>
  );
};

export default TokenDetail;
