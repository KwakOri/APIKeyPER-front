import { PropsWithChildren } from "react";

const Mobile = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div
        className={"w-[375px] h-[660px] shrink-0 bg-white rounded-lg  relative"}
      >
        <div className="w-full h-full overflow-y-scroll ">{children}</div>
      </div>
    </div>
  );
};

export default Mobile;
