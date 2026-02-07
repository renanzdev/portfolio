import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ComponentPropsWithRef, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface BaseCardProps extends ComponentPropsWithRef<"div"> {
  title?: string;
  icon?: LucideIcon;
  children: ReactNode;
  className?: string;
  id?: string;
}

export function BaseCard({
  title,
  icon: Icon,
  children,
  className = "",
  id,
  ...rest
}: BaseCardProps) {
  return (
    <Card
      {...rest}
      className={`bg-linear-to-br from-card to-card/80 ${className}`}
      id={id}
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          {Icon && <Icon className="w-5 h-5 text-primary" color="#ffffff" />}
          {title && title}
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
