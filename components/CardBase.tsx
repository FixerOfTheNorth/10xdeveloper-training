/**
 * @file CardBase component
 * @description A base card component that provides a consistent structure for all cards
 */
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import React from "react";

/**
 * Props for the CardBase component
 */
interface CardBaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Optional title to display in the card header
   */
  title?: string;
  
  /**
   * Additional CSS classes to apply to the card
   */
  className?: string;
  
  /**
   * Test ID for testing purposes
   */
  "data-testid"?: string;
  
  /**
   * Card content
   */
  children: React.ReactNode;
}

/**
 * Base card component that provides a consistent structure for all cards
 */
export function CardBase({
  title,
  className,
  children,
  "data-testid": dataTestId,
  ...props
}: CardBaseProps) {
  return (
    <Card className={className} data-testid={dataTestId} {...props}>
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
    </Card>
  );
} 