/**
 * @file ButtonBase component
 * @description A base button component that provides a consistent structure for all buttons
 */
import { Button } from "./ui/button";
import clsx from "clsx";
import React from "react";

/**
 * Props for the ButtonBase component
 */
interface ButtonBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Color theme of the button
   * @default "primary"
   */
  color?: "primary" | "secondary";
  
  /**
   * Visual style variant of the button
   * @default "default"
   */
  variant?: "default" | "outlined";
  
  /**
   * Icon to display on the left side of the button text
   */
  leftIcon?: React.ReactNode;
  
  /**
   * Icon to display on the right side of the button text
   */
  rightIcon?: React.ReactNode;
  
  /**
   * Additional CSS classes to apply to the button
   */
  className?: string;
  
  /**
   * Test ID for testing purposes
   */
  "data-testid"?: string;
  
  /**
   * Button content
   */
  children: React.ReactNode;
}

/**
 * Base button component that provides a consistent structure for all buttons
 */
export function ButtonBase({
  color = "primary",
  variant = "default",
  leftIcon,
  rightIcon,
  className,
  children,
  "data-testid": dataTestId,
  ...props
}: ButtonBaseProps) {
  return (
    <Button
      className={clsx(
        "rounded-full flex items-center gap-2 px-4 py-2 font-semibold",
        color === "primary" && "bg-black text-white border-black",
        color === "secondary" && "bg-white text-black border border-gray-200",
        variant === "outlined" && "border-2 border-dashed",
        className
      )}
      data-testid={dataTestId}
      {...props}
    >
      {leftIcon && <span className="mr-2 flex items-center">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2 flex items-center">{rightIcon}</span>}
    </Button>
  );
} 