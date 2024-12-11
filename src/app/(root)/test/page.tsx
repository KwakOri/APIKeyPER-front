import Button from "@/components/Button";
import Input from "@/components/Input";

const page = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-[375px] h-[660px] bg-white">
        <div className={"px-4 flex flex-col gap-4"}>
          <Input
            label="email"
            id={"email"}
            placeholder={"apikeyper@keeper.com"}
          />
          <Button>LOGIN</Button>
        </div>
      </div>
    </div>
  );
};

export default page;
