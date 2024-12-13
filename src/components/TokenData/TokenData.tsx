import ExpiryDate from "@/components/ExpiryDate";
import { TokenSchema } from "@/data";

interface TokenDataProps {
  tokenData: TokenSchema;
}

const TokenData = ({ tokenData }: TokenDataProps) => {
  const {
    id,
    tokenName,
    tokenDescription,
    tokenValue,
    tokenCreatedDate,
    tokenExpiryDate,
    notificationOption,
    createdAt,
  } = tokenData;

  return (
    <article className="flex w-full justify-between items-center">
      <div className="flex gap-2">
        <div className="w-10 h-10 rounded-lg bg-gray-400"></div>
        <div className="flex flex-col">
          <h3 className="text-[14px] text-primary-95 font-semibold">
            {tokenName}
          </h3>
          <p className="text-sm font-medium text-primary-55">
            {tokenDescription}
          </p>
        </div>
      </div>

      <ExpiryDate tokenExpiryDate={tokenExpiryDate} />
    </article>
  );
};

export default TokenData;
