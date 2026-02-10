"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    icon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", icon, children, ...props }, ref) => {
        const variants = {
            primary:
                "bg-[var(--color-brand-primary)] text-white shadow-lg shadow-purple-500/20 hover:bg-[var(--color-brand-accent)] border border-white/10",
            secondary:
                "bg-[var(--color-brand-secondary)] text-white border border-white/10 hover:bg-[var(--color-brand-primary)]/80",
            outline:
                "bg-transparent border border-[var(--color-brand-accent)] text-[var(--color-brand-accent)] hover:bg-[var(--color-brand-accent)]/10",
            ghost: "bg-transparent text-[var(--color-brand-text-secondary)] hover:bg-white/5 hover:text-white",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg font-semibold",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "rounded-full transition-all duration-300 flex items-center justify-center gap-2",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props as HTMLMotionProps<"button">} // Type assertion for framer-motion props
            >
                {icon && <span>{icon}</span>}
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";
