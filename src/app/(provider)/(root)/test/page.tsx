"use client";

import { logIn } from "@/service/service.auth";
import { getAllTokenData } from "@/service/service.tokenData";
import { handleAllowNotification } from "@/utils/firebase/firebaseUtils";
import { useEffect, useState } from "react";

export default function Home() {
  console.log("re-rendering");
  const [fcmToken, setFcmToken] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const [userId, serUserId] = useState<string | null>(null);
  useEffect(() => {
    const getFCMToken = async () => {
      const token = await handleAllowNotification();
      setFcmToken(token || null);
    };
    getFCMToken();
  }, []);

  useEffect(() => {
    const getAccessToken = () => {
      const token = localStorage.getItem("ACCESS_TOKEN");
      setAccessToken(token || null);
    };

    getAccessToken();
    setIsPending(false);
  }, [isPending]);

  const handleLogIn = async () => {
    const accessToken = await logIn();
    setAccessToken(accessToken);
    setIsPending(true);
  };

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <section className=" w-80 flex flex-col gap-4">
        <div>
          <h2>FCM TOKEN</h2>
          <p className="w-full h-full break-words p-2">{fcmToken}</p>
        </div>

        <div>
          <h2>ACCESS TOKEN</h2>
          <p className="w-full h-full break-words p-2">{accessToken}</p>
        </div>

        <p>현재 유저 : {userId}</p>
        <button
          className="p-2 bg-white text-black rounded-full"
          onClick={handleLogIn}
        >
          로그인하기
        </button>
        <button
          className="p-2 bg-white text-black rounded-full"
          onClick={getAllTokenData}
        >
          내 토큰 조회하기
        </button>
      </section>
    </main>
  );
}
