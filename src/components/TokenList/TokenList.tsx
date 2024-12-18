import Divider from "@/components/Divider/Divider";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import TokenData from "@/components/TokenData";
import { TokenSchema } from "@/data";
import Link from "next/link";
import { Fragment } from "react";

interface TokenListProps {
  tokens: TokenSchema[];
  title: string;
}

const TokenList = ({ tokens, title }: TokenListProps) => {
  return (
    <section className="flex flex-col gap-4">
      <SectionTitle>{title}</SectionTitle>
      {tokens.length === 0 ? (
        <p className="text-primary-85">데이터가 없습니다</p>
      ) : (
        <ul className="flex flex-col gap-2">
          {tokens.map((token, index) => (
            <Fragment key={token.id}>
              <li className="p-2 rounded-lg hover:bg-primary-55/20">
                <Link href={`/token/${token.id}`}>
                  <TokenData tokenData={token} />
                </Link>
              </li>
              {index < tokens.length - 1 && <Divider />}
            </Fragment>
          ))}
        </ul>
      )}
    </section>
  );
};

export default TokenList;
