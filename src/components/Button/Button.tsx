import { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...props }: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={
        "h-11 w-full bg-primary-75 rounded-lg flex justify-center items-center"
      }
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
