import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div>
      <label className={"text-sm text-primary-55"} htmlFor={label}>
        {label}
      </label>
      <input
        className={
          "text-sm h-11 w-full px-4 placeholder-primary-55 text-primary-75 rounded-lg border border-primary-55"
        }
        id={label}
        {...props}
      />
    </div>
  );
};

export default Input;
