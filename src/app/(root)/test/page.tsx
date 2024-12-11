import Input from "@/components/Input";

const page = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-[375px] h-[660px] bg-white">
        <div className={"px-4"}>
          <Input label="email" placeholder={"apikeyper@keeper.com"} />
        </div>
      </div>
    </div>
  );
};

export default page;
