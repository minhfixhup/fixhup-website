import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "outline" | "outline-white";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-forest text-white hover:bg-forest-dark shadow-sm shadow-forest/20",
  outline:
    "border-2 border-forest text-forest hover:bg-forest hover:text-white bg-transparent",
  "outline-white":
    "border-2 border-white/30 text-white hover:border-white bg-transparent",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-150 ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
