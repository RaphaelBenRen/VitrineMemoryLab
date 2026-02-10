"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
    hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = true, children, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={hoverEffect ? { y: -5, boxShadow: "0 15px 40px rgba(0,0,0,0.4)" } : {}}
                viewport={{ once: true }}
                className={cn(
                    "relative overflow-hidden rounded-2xl border border-[var(--color-glass-border)] bg-[var(--color-glass-bg)] backdrop-blur-md shadow-lg shadow-purple-500/10 p-6",
                    className
                )}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);

Card.displayName = "Card";
