import { privateInstance } from "@/service/instances";
import { handleAllowNotification } from "@/utils/firebase/firebaseUtils";

export const saveDeviceToken = async ({
  deviceToken,
}: {
  deviceToken: string;
}) => {
  const res = await privateInstance.post("/account/device-token", {
    deviceToken,
  });
  console.log(res);
};

export const getFCMToken = async () => {
  try {
    const token = await handleAllowNotification();
    if (!token) return;
    await saveDeviceToken({ deviceToken: token });
    alert("알림 기기가 성공적으로 등록되었습니다.");
  } catch (err) {
    console.error(err);
  }
};
