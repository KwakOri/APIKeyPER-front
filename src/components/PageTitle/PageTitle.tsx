import { PropsWithChildren } from "react";

const PageTitle = ({ children }: PropsWithChildren) => {
  return (
    <h1 className="text-[36px] text-primary-85 font-extrabold">{children}</h1>
  );
};

export default PageTitle;
