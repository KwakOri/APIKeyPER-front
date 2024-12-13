"use client";

import { useRouter } from "next/navigation";
import { ComponentType, useLayoutEffect } from "react";

export const withAuth = (Component: ComponentType) => <P extends {}>(
  props: P
) => {
  const router = useRouter();

  /* 권한 분기 */
  useLayoutEffect(() => {
    if (!localStorage.getItem("ACCESS_TOKEN")) {
      alert("로그인 후 이용이 가능합니다.");
      router.push("/auth/log-in");
    }
  }, []);

  return <Component {...props} />;
};
