import { PropsWithChildren } from "react";

const Mobile = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full h-full flex justify-center fixed overflow-hidden ">
      <section className="h-full w-full flex flex-col max-w-[600px] relative bg-white">
        <div className="w-full h-full overflow-y-scroll">{children}</div>
      </section>
    </div>
  );
};

export default Mobile;
