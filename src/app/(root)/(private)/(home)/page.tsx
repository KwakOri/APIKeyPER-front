import PageNavBar from "@/components/PageNavBar";
import TokenList from "@/components/TokenList";
import { dummyTokens } from "@/data";
import Mobile from "@/layouts/Mobile";

const HomePage = () => {
  const tokens = structuredClone(dummyTokens).sort(
    (a, b) =>
      new Date(a.tokenExpiryDate).getTime() -
      new Date(b.tokenExpiryDate).getTime()
  );
  const expiringSoonTokens = tokens
    .filter((token) => {
      const daysUntilExpiration = Math.ceil(
        (new Date(token.tokenExpiryDate).getTime() - new Date().getTime()) /
          (1000 * 60 * 60 * 24)
      );
      return daysUntilExpiration <= 30 && daysUntilExpiration >= 1;
    })
    .slice(0, 4);

  return (
    <Mobile>
      <PageNavBar />
      <div className="px-2 pt-4 pb-8 flex flex-col gap-8">
        <TokenList title={"Keys expiring soon"} tokens={expiringSoonTokens} />
        <TokenList title={"My keys"} tokens={tokens} />
      </div>
    </Mobile>
  );
};

export default HomePage;
