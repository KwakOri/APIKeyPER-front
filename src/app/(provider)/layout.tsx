import QueryProviders from "@/tanstack/queryProvider";
import { PropsWithChildren } from "react";

const ProviderLayout = ({ children }: PropsWithChildren) => {
  return <QueryProviders>{children}</QueryProviders>;
};

export default ProviderLayout;
