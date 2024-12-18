import Dropdown from "@/components/Dropdown/Dropdown";
import SVGIcon from "@/components/SVGIcon";

import { useState } from "react";

const PageNavBar = () => {
  const [active, setActive] = useState<boolean>(false);
  const toggleMenu = () => {
    setActive((prev) => !prev);
  };
  return (
    <div className="fixed w-full max-w-[600px]">
      <div
        className={
          "h-[50px] w-full bg-primary-85 flex justify-between items-center px-4 relative z-10"
        }
      >
        <h2 className="text-2xl font-extrabold text-white">APIKeyPER</h2>
        <button onClick={toggleMenu}>
          <SVGIcon icon={"IC_Menu"} size={"lg"} className={"fill-white"} />
        </button>
      </div>
      <Dropdown active={active} />
    </div>
  );
};

export default PageNavBar;
