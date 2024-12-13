"use client";

import Button from "@/components/Buttons/Button";
import Input from "@/components/Input";
import { TokenSchema } from "@/data";
import { useForm } from "@/hooks/inputs/useForm";
import dayjs from "dayjs";

interface TokenFormProps {
  values?: TokenSchema;
  onSubmit: (formData: TokenSchema) => void;
}

const defaultValue: TokenSchema = {
  id: "",
  createdAt: new Date(),
  notificationOption: "",
  tokenCreatedDate: dayjs().toDate(),
  tokenExpiryDate: dayjs()
    .add(100, "day")
    .toDate(),
  tokenDescription: "",
  tokenName: "",
  tokenValue: "",
  userId: "",
};

const TokenForm = ({ onSubmit, values: existingValue }: TokenFormProps) => {
  const [values, onChange] = useForm<TokenSchema>({
    initialValue: existingValue || defaultValue,
  });
  const handleSubmit = () => {
    values;
  };
  return (
    <form className=" w-full flex flex-col gap-2">
      <Input
        label="Title"
        id={"tokenName"}
        placeholder={"API Key"}
        onChange={onChange}
        value={values.tokenName}
      />
      <Input
        label="Description"
        id={"tokenDescription"}
        placeholder={"This is a very important api key."}
        onChange={onChange}
        value={values.tokenDescription}
      />
      <Input
        className="grow"
        label="Created Date"
        id={"tokenCreatedDate"}
        type={"date"}
        onChange={onChange}
        value={dayjs(values.tokenCreatedDate).format("YYYY-MM-DD")}
      />
      <Input
        className="grow"
        label="Expiry Date"
        id={"tokenExpiryDate"}
        type={"date"}
        onChange={onChange}
        value={dayjs(values.tokenExpiryDate).format("YYYY-MM-DD")}
      />
      <Input
        label="Key"
        id={"tokenValue"}
        placeholder={"API secret key"}
        onChange={onChange}
        value={values.tokenValue}
      />
      <Button className="mt-2" onClick={handleSubmit}>
        <p>DONE</p>
      </Button>
    </form>
  );
};

export default TokenForm;
