/**
 * @file StatCard component
 * @description A card component for displaying statistics with icon and value
 */
import { CardBase } from "./CardBase";
import { cn } from "@/lib/utils";
import React from "react";
import { Skeleton } from "./ui/skeleton";
import { Badge } from "./ui/badge";
import { ArrowRight, TrendingDown, TrendingUp } from "lucide-react";

/**
 * Props for the StatCard component
 */
interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Title of the statistic
   */
  title: string;
  
  /**
   * Value to display for the statistic
   */
  value: string;
  
  /**
   * Icon to display above the value
   */
  icon: React.ReactNode;
  
  /**
   * Color variant for the card
   * @default "primary"
   */
  color?: "primary" | "secondary" | "blue" | "green" | "purple";
  
  /**
   * Additional CSS classes to apply to the card
   */
  className?: string;
  
  /**
   * Test ID for testing purposes
   */
  "data-testid"?: string;

  /**
   * Optional description text to show under the title
   */
  description?: string;

  /**
   * Optional trend percentage value
   */
  trend?: number;

  /**
   * Whether the trend is positive (true) or negative (false)
   */
  trendPositive?: boolean;

  /**
   * Optional text to explain what the trend refers to
   */
  trendLabel?: string;

  /**
   * Optional link text for the footer
   */
  linkText?: string;

  /**
   * Optional click handler for the footer link
   */
  onLinkClick?: () => void;
}

/**
 * StatCard component for displaying statistics with icon and value
 */
export function StatCard({
  title,
  value,
  icon,
  color = "primary",
  className,
  description,
  trend,
  trendPositive = true,
  trendLabel,
  linkText,
  onLinkClick,
  "data-testid": dataTestId,
  ...props
}: StatCardProps) {
  // Map colors to tailwind classes
  const colorMap = {
    primary: {
      border: "border-l-primary",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      linkColor: "text-primary"
    },
    secondary: {
      border: "border-l-secondary",
      iconBg: "bg-secondary/10",
      iconColor: "text-secondary-foreground",
      linkColor: "text-secondary-foreground"
    },
    blue: {
      border: "border-l-blue-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
      linkColor: "text-blue-500"
    },
    green: {
      border: "border-l-green-500",
      iconBg: "bg-green-100",
      iconColor: "text-green-500",
      linkColor: "text-green-500"
    },
    purple: {
      border: "border-l-purple-500",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-500",
      linkColor: "text-purple-500"
    }
  };

  const colorClasses = colorMap[color] || colorMap.primary;

  return (
    <CardBase 
      title=""
      className={cn(
        "min-w-[180px] border-l-4",
        colorClasses.border,
        className
      )} 
      data-testid={dataTestId} 
      {...props}
    >
      <div className="px-6 pb-2">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg text-muted-foreground font-medium">{title}</h3>
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
          </div>
          <div className={cn("p-2 rounded-full", colorClasses.iconBg)}>
            <div className={colorClasses.iconColor}>
              {icon}
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 pt-2">
        <div className="flex items-baseline mt-2">
          <div className="text-3xl font-bold">
            {value}
          </div>
          {trend !== undefined && (
            <Badge className="ml-3" variant={trendPositive ? "default" : "destructive"}>
              {trendPositive ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
              {trendPositive ? "+" : ""}{trend}%
            </Badge>
          )}
        </div>
        {trendLabel && (
          <div className="text-muted-foreground text-sm mt-2">
            {trendLabel}
          </div>
        )}
      </div>

      {linkText && (
        <div className="px-6 mt-4 pb-6">
          <div 
            className={cn("text-sm flex items-center cursor-pointer hover:underline", colorClasses.linkColor)}
            onClick={onLinkClick}
          >
            {linkText} <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </div>
      )}
    </CardBase>
  );
}

/**
 * Fallback component for StatCard when loading
 */
export function StatCardSkeleton({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div 
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm min-h-[220px] border-l-4 border-l-gray-200",
        className
      )}
      {...props}
    >
      <div className="px-6 flex justify-between">
        <div>
          <Skeleton className="h-5 w-32 mb-2" />
          <Skeleton className="h-4 w-48" />
        </div>
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>
      <div className="px-6">
        <div className="flex items-center">
          <Skeleton className="h-8 w-24 mr-3" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
        <Skeleton className="h-4 w-36 mt-2" />
      </div>
      <div className="px-6">
        <Skeleton className="h-5 w-32" />
      </div>
    </div>
  );
} 