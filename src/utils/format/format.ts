import { Status, TStatus } from "@/constants/expiryStatus";
import dayjs from "dayjs";

const format = {
  getRemainingDays: ({ tokenExpiryDate }: { tokenExpiryDate: Date }) => {
    const now = dayjs();
    const expiryDate = dayjs(tokenExpiryDate);

    return Math.ceil(expiryDate.diff(now) / (1000 * 60 * 60 * 24));
  },
  getIntentWithExpiryDate: ({
    tokenExpiryDate,
  }: {
    tokenExpiryDate: Date;
  }): { status: TStatus; remainingDays: number } => {
    const remainingDays = format.getRemainingDays({ tokenExpiryDate });
    const status = () => {
      if (remainingDays < 1) return Status.EXPIRED;
      if (remainingDays <= 7) return Status.DANGEROUS;
      if (remainingDays <= 30) return Status.WARNING;
      return Status.SAFE;
    };
    return { status: status(), remainingDays };
  },
};

export default format;
