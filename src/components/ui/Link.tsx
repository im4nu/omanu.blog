import Link from "next/link";

import React from "react";

interface ButtonProps {
  size?: "small" | "medium" | "large";
  variant: "outlined" | "contained";
  children: React.ReactNode;
  className?: string;
  link?: any;
  standInSameTab?: boolean;
}

export default function LinkDemo({
  size,
  variant,
  children,
  className,
  link,
  standInSameTab,
  ...rest
}: ButtonProps) {
  return (
    <Link
      {...rest}
      href={link}
      className={`flex items-center justify-center rounded-xl text-white px-8 py-4 hover:opacity-80 hover:cursor-pointer ease-linear duration-300 ${
        size === "small" ? "text-xs" : ""
      } ${size === "medium" ? "text-sm" : ""} ${
        size === "large" ? "text-base" : ""
      } ${
        variant === "outlined"
          ? "bg-white/10 border border-main"
          : " bg-main-300"
      }
      ${className ? className : ""}
      `}
      target={standInSameTab ? "_self" : "_blank"}
    >
      {children}
    </Link>
  );
}
