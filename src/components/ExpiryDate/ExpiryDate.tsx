import SVGIcon from "@/components/SVGIcon";
import { Status } from "@/constants/expiryStatus";
import format from "@/utils/format";
import { cn } from "@/utils/tailwind/cn";
import { cva } from "class-variance-authority";

const expiryDateVariants = cva(``, {
  variants: {
    status: {
      [Status.EXPIRED]: `fill-intent-expired`,
      [Status.DANGEROUS]: `fill-intent-dangerous`,
      [Status.WARNING]: `fill-intent-warning`,
      [Status.SAFE]: `fill-intent-safe`,
    },
  },
  defaultVariants: {
    status: Status.SAFE,
  },
});

interface ExpiryDateProps {
  tokenExpiryDate: Date;
}

const ExpiryDate = ({ tokenExpiryDate }: ExpiryDateProps) => {
  const { status, remainingDays } = format.getIntentWithExpiryDate({
    tokenExpiryDate,
  });
  return (
    <div className="flex gap-2">
      <p className="text-sm text-primary-85">
        {status === Status.EXPIRED ? "expired" : `remain ${remainingDays}d`}
      </p>
      <SVGIcon
        icon="IC_ExpiryDate"
        className={cn(expiryDateVariants({ status }))}
      />
    </div>
  );
};

export default ExpiryDate;
