import SVGIcon from "@/components/SVGIcon";
import { getPagePath } from "@/utils/urls/getPathname";
import Link from "next/link";

const FloatingButton = () => {
  return (
    <Link href={getPagePath.tokenWritePage()}>
      <button className="w-10 h-10 flex justify-center items-center bg-primary-85 rounded-full">
        <SVGIcon icon={"IC_Plus"} className="fill-white" />
      </button>
    </Link>
  );
};

export default FloatingButton;
