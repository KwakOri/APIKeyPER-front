import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
  id: string;
}

const Input = ({ id, label, className, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-1 w-full h-full">
      {label && (
        <label className={"text-sm text-primary-55"} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={`text-sm h-11 w-full px-4 placeholder-primary-55 text-primary-75 rounded-lg border border-primary-45 ${className}`}
        id={id}
        name={id}
        {...props}
      />
    </div>
  );
};

export default Input;
