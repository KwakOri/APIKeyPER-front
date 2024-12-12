import { PropsWithChildren } from "react";

const SectionTitle = ({ children }: PropsWithChildren) => {
  return <p className={"font-bold text-primary-85"}>{children}</p>;
};

export default SectionTitle;
