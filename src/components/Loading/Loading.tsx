import Mobile from "@/layouts/Mobile";
import { SyncLoader } from "react-spinners";

const Loading = () => {
  return (
    <Mobile>
      <div className="w-full h-full flex flex-col justify-center items-center bg-white">
        <SyncLoader />
      </div>
    </Mobile>
  );
};

export default Loading;
