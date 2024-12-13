import { ChangeEvent, useState } from "react";

export const useForm = <T extends Record<string, any>>({
  initialValue,
}: {
  initialValue: T;
}) => {
  const [values, setValues] = useState<T>(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return [values, onChange] as const;
};
