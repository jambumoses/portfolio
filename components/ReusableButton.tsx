import React from "react";
import { Button } from "@/components/ui/button";
import { Loader, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ReusableButtonProps {
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  form?: string;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  className?: string;
  isLoading?: boolean;
  icon?: any;
  disabled?: boolean;
  link?: string;
  tooltip?: boolean;
  iconStyles?: string;
}

const ReusableButton: React.FC<ReusableButtonProps> = ({
  children,
  onClick,
  type = "button",
  form,
  variant = "default",
  className = "",
  isLoading = false,
  icon: IconCmponent = Send,
  disabled,
  link,
  tooltip,
  iconStyles,
}) => {
  return (
    <>
      {link ? (
        <Link href={link || ""}>
          <Button
            variant={variant}
            className={cn(
              "h-10 text-xs font-medium rounded-md text-white cursor-pointer",
              className,
            )}
          >
            <IconCmponent className={cn("size-3.5", iconStyles)} />
            {children}
          </Button>
        </Link>
      ) : (
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant={variant}
              className={cn(
                "select-none h-10 text-xs text-white font-medium rounded-md cursor-pointer",
                className,
              )}
              onClick={onClick}
              type={type}
              form={form}
              disabled={isLoading || disabled}
            >
              {isLoading ? (
                <Loader className={cn("size-3.5 animate-spin", iconStyles)} />
              ) : (
                <IconCmponent className={cn("size-3.5", iconStyles)} />
              )}

              {!tooltip && children}
            </Button>
          </TooltipTrigger>
          {tooltip && (
            <TooltipContent className="select-none">
              <p>{children}</p>
            </TooltipContent>
          )}
        </Tooltip>
      )}
    </>
  );
};

export default ReusableButton;
