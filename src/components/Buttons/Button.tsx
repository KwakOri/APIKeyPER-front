import { cn } from "@/utils/tailwind/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

const buttonVariants = cva(
  `w-full rounded-lg flex justify-center items-center shrink-0 sm:hover:brightness-150`,
  {
    variants: {
      intent: {
        primary: `bg-primary-75 text-white`,
        secondary: `bg-white text-primary-75`,
      },
      size: {
        sm: `h-8`,
        md: `h-11`,
        lg: `h-12`,
      },
    },
    defaultVariants: {
      intent: `primary`,
      size: `md`,
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  className?: string;
}

const Button = ({
  children,
  className,
  intent,
  size,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button className={cn(buttonVariants({ intent, className }))} {...props}>
      {children}
    </button>
  );
};

export default Button;
