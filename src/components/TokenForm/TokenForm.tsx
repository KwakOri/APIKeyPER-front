import Button from "@/components/Buttons/Button";
import Input from "@/components/Input";
import dayjs from "dayjs";

const TokenForm = () => {
  return (
    <form className="flex flex-col gap-4">
      <Input label="Title" id={"title"} placeholder={"API Key"} />
      <Input
        label="Description"
        id={"description"}
        placeholder={"This is a very important api key."}
      />
      <div className="flex gap-4 h-full">
        <Input
          className="grow"
          label="Created Date"
          id={"createdDate"}
          placeholder={dayjs().format("YY.MM.DD")}
        />
        <Input
          className="grow"
          label="Expiry Date"
          id={"expiryDate"}
          placeholder={dayjs()
            .add(1, "year")
            .format("YY.MM.DD")}
        />
      </div>
      <Input label="Key" id={"key"} placeholder={"API secret key "} />
      <Button type="submit">
        <p>DONE</p>
      </Button>
    </form>
  );
};

export default TokenForm;
