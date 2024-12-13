"use client";

import { withPublic } from "@/hocs/withPublic";
import { PropsWithChildren } from "react";

const PublicRouteLayout = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default withPublic(PublicRouteLayout);
