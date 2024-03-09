import { ComponentProps, FunctionComponent, PropsWithChildren } from "react";
import classNames from "classnames";

interface ButtonProps extends ComponentProps<"button"> {}

export const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <button
      type="button"
      className={classNames("px-2 py-1 border border-black", className)}
      {...rest}
    >
      {children}
    </button>
  );
};
