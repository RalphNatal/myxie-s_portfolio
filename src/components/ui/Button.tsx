import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { NewTabHint } from "./NewTabHint";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type LinkButtonProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    /** Opens in a new tab and tells screen reader users so. */
    external?: boolean;
  };

type NativeButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const variants: Record<Variant, string> = {
  primary: "bg-accent-strong text-on-accent shadow-soft hover:bg-accent-hover hover:shadow-lift",
  secondary:
    "border border-line bg-surface text-ink shadow-soft hover:border-accent/60 hover:text-accent-strong",
  ghost: "text-ink hover:bg-subtle",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-base",
};

function buttonClasses(variant: Variant, size: Size, className?: string) {
  return cn(
    "group inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold",
    "transition duration-200 ease-out active:scale-[0.98] motion-reduce:transform-none motion-reduce:transition-none",
    "disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );
}

/** Renders a link when given `href`, otherwise a native button. */
export function Button(props: ButtonProps) {
  if (props.href !== undefined) {
    const { variant = "primary", size = "md", className, children, external, ...rest } = props;
    return (
      <a
        className={buttonClasses(variant, size, className)}
        {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        {...rest}
      >
        {children}
        {external && <NewTabHint />}
      </a>
    );
  }

  const { variant = "primary", size = "md", className, children, type = "button", ...rest } = props;
  return (
    <button type={type} className={buttonClasses(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}
