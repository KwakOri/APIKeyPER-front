import SVGIcon from "@/components/SVGIcon";
import { IconMapTypes } from "@/icons/icons";
import { ButtonHTMLAttributes } from "react";

interface DropdownSelectProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconMapTypes;
  label: string;
}

const DropdownSelect = ({ icon, label, ...props }: DropdownSelectProps) => {
  return (
    <button
      className="w-full h-12 flex items-center justify-between px-2"
      {...props}
    >
      <SVGIcon icon={icon} />
      <p className="text-white">{label}</p>
    </button>
  );
};

export default DropdownSelect;
