
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        accent: "bg-mylken-accent text-mylken-dark hover:bg-mylken-accent/90 shadow-sm relative",
        primary: "bg-mylken-primary text-white hover:bg-mylken-primary/90 shadow-md relative",
        milk: "bg-white text-mylken-primary hover:bg-mylken-light border border-mylken-primary/20 shadow-sm relative",
        cream: "bg-mylken-light text-mylken-primary hover:bg-white shadow-sm relative",
        milkSplash: "bg-white text-mylken-primary border border-mylken-primary/50 hover:border-mylken-primary relative overflow-hidden shadow-sm before:absolute before:inset-0 before:bg-mylken-accent/0 hover:before:bg-mylken-accent/20 before:transition-colors",
        dairy: "bg-mylken-primary text-white relative overflow-hidden shadow-md after:absolute after:-bottom-1 after:left-0 after:h-1 after:w-full after:bg-mylken-accent after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-md px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

