"use client";

import { withAuth } from "@/hocs/withAuth";
import { PropsWithChildren } from "react";

const PrivateRouteLayout = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default withAuth(PrivateRouteLayout);
