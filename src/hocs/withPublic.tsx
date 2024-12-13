"use client";

import { useRouter } from "next/navigation";
import { ComponentType, useLayoutEffect } from "react";

export const withPublic = (Component: ComponentType) => <P extends {}>(
  props: P
) => {
  const router = useRouter();

  /* 권한 분기 */
  useLayoutEffect(() => {
    if (localStorage.getItem("ACCESS_TOKEN")) {
      alert("이미 로그인되어 있습니다");
      router.push("/");
    }
  }, []);

  return <Component {...props} />;
};
