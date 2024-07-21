import { ButtonHTMLAttributes, forwardRef } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ onClick, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className="w-full"
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
