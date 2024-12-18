"use client";

import FloatingButton from "@/components/FloatingButton/FloatingButton";
import Loading from "@/components/Loading";
import PageNavBar from "@/components/PageNavBar";
import TokenList from "@/components/TokenList";
import { TokenSchema } from "@/data";
import { useAllTokenData } from "@/hooks/token/useQuery";
import Mobile from "@/layouts/Mobile";

const HomePage = () => {
  const { data: tokens, isPending } = useAllTokenData();
  const getExpiringSoonTokens = (tokens: TokenSchema[]) => {
    if (tokens.length === 0) return [];
    return tokens
      .filter((token) => {
        const daysUntilExpiration = Math.ceil(
          (new Date(token.tokenExpiryDate).getTime() - new Date().getTime()) /
            (1000 * 60 * 60 * 24)
        );
        return daysUntilExpiration <= 30 && daysUntilExpiration >= 1;
      })
      .slice(0, 4);
  };

  if (isPending || tokens === undefined) return <Loading />;

  return (
    <Mobile>
      <div className="absolute right-2 bottom-2 ">
        <FloatingButton />
      </div>
      <PageNavBar />
      <div className="px-2 pt-4 pb-8 flex flex-col gap-8">
        <TokenList
          title={"Keys expiring soon"}
          tokens={getExpiringSoonTokens(tokens)}
        />
        <TokenList title={"My keys"} tokens={tokens} />
      </div>
    </Mobile>
  );
};

export default HomePage;
