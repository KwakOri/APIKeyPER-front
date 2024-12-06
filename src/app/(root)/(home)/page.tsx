"use client";

import { logIn } from "@/service/auth";
import { getMyTokenDatas } from "@/service/tokenData";
import { handleAllowNotification } from "@/utils/firebase/firebaseUtils";
import { useEffect, useState } from "react";

export default function Home() {
  const [fcmToken, setFcmToken] = useState<string | null>(null);
  useEffect(() => {
    const getFCMToken = async () => {
      const token = await handleAllowNotification();
      setFcmToken(token || null);
    };
    getFCMToken();
  }, []);

  return (
    <main>
      <h1>{fcmToken}</h1>
      <button onClick={logIn}>로그인하기</button>
      <button onClick={getMyTokenDatas}>내 토큰 조회하기</button>
    </main>
  );
}
