import QueryProviders from "@/tanstack/QueryProvider";
import { PropsWithChildren } from "react";

const ProviderLayout = ({ children }: PropsWithChildren) => {
  return <QueryProviders>{children}</QueryProviders>;
};

export default ProviderLayout;
