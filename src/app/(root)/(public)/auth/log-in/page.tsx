import Button from "@/components/Button";
import Input from "@/components/Input";
import Mobile from "@/layouts/Mobile";

const LogInPage = () => {
  return (
    <Mobile>
      <div className="w-full h-full px-14 flex flex-col justify-center">
        <div className="flex justify-center items-center h-[120px] w-full mb-[60px]">
          <h1 className="text-[36px] text-primary-85 font-extrabold">
            APIKeyPER
          </h1>
        </div>
        <div className={"flex flex-col gap-3"}>
          <Input
            label={"email"}
            id={"email"}
            placeholder={"apikeyper@keeper.com"}
          />
          <Input label={"password"} id={"password"} placeholder={"********"} />
          <div className="flex flex-col gap-4 py-2">
            <Button>
              <span className={"text-sm"}>LOG IN</span>
            </Button>
            <Button>
              <span className={"text-sm"}>SIGN UP</span>
            </Button>
          </div>
        </div>
      </div>
    </Mobile>
  );
};

export default LogInPage;
