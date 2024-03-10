import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export default function Skeleton({
  className,
  ...rest
}: ComponentProps<"div">) {
  return (
    <div
      className={twMerge("bg-white/20 animate-pulse rounded", className)}
      {...rest}
    />
  );
}
