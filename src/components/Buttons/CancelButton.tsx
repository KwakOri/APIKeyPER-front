import SVGIcon from "@/components/SVGIcon";
import { ButtonHTMLAttributes } from "react";

interface CancelButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const CancelButton = ({ className, ...props }: CancelButtonProps) => {
  return (
    <button className={`hover:brightness-125 ${className}`} {...props}>
      <SVGIcon icon={"IC_Cancel"} />
    </button>
  );
};

export default CancelButton;
