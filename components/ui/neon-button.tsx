import React from 'react'
import { cn } from '@/lib/utils'
import { VariantProps, cva } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot"

const buttonVariants = cva(
    "relative group border text-foreground mx-auto text-center rounded-full inline-flex items-center justify-center font-bold transition-all duration-300 overflow-hidden " +
    // Top Neon Line (before)
    "before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-px before:w-3/4 before:mx-auto before:bg-gradient-to-r before:from-transparent before:via-blue-500 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500 " +
    // Bottom Neon Line (after)
    "after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:after:w-3/4 after:mx-auto after:bg-gradient-to-r after:from-transparent after:via-blue-500 after:to-transparent after:opacity-0 group-hover:after:opacity-30 after:transition-opacity after:duration-500",
    {
        variants: {
            variant: {
                default: "bg-blue-500/5 hover:bg-blue-500/10 border-blue-500/20 text-white",
                solid: "bg-white text-black border-transparent hover:bg-gray-200 transition-all duration-200",
                ghost: "border-transparent bg-transparent hover:border-zinc-600 hover:bg-white/10 text-white",
            },
            size: {
                default: "px-7 py-1.5",
                sm: "px-4 py-0.5",
                lg: "px-10 py-4 text-base",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, size, variant, asChild = false, children, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size }), className)}
                ref={ref}
                {...props}
            >
                {children}
            </Comp>
        );
    }
)

Button.displayName = 'Button';

export { Button, buttonVariants };
