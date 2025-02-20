import {
  getMessaging,
  getToken,
  MessagePayload,
  onMessage,
} from "firebase/messaging";
// import { sendTokenToServer } from "./api";
import { app } from "@/utils/firebase/firebase";
import registerServiceWorker from "./registerServiceWorker";

export async function handleAllowNotification() {
  if (typeof window === "undefined" || typeof window.navigator === "undefined")
    return;
  const messaging = getMessaging(app);

  registerServiceWorker();

  try {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY,
      });
      if (token) {
        return token;
        // sendTokenToServer(token); // (토큰을 서버로 전송하는 로직)
      } else {
        alert("토큰 등록이 불가능 합니다. 생성하려면 권한을 허용해주세요");
      }
    } else if (permission === "denied") {
      alert(
        "web push 권한이 차단되었습니다. 알림을 사용하시려면 권한을 허용해주세요"
      );
    }
  } catch (error) {
    alert(error);
    console.error("푸시 토큰 가져오는 중에 에러 발생", error);
  }
}

export const onMessageListener = () => {
  if (typeof window === "undefined" || typeof window.navigator === "undefined")
    return;
  const messaging = getMessaging(app);

  return new Promise<MessagePayload>((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
};
