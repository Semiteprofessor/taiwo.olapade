import { cva } from "class-variance-authority";

const badgeVariant = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xm font-semibold transition-colors focus:outline-none focus:ring-2 focud:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        success: "bg-success text-success-foreground",
        info: "bg-info text-info-foreground",
        warning: "bg-warning text-warning-foreground",
        danger: "bg-danger text-danger-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
