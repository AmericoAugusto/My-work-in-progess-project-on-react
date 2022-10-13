import React from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot"  

interface HeadingProps {
    size?: "sm" | "md" | "lg";
    children: string;
    asChild?: boolean;
    className?: string;
}
const Heading = ({size = "md", children, asChild, className}: HeadingProps ) => {
    const Comp = asChild ? Slot : "h2";
    return (
 <Comp className={clsx(
    "text-red-100  font-bold font-sans",
    {
        "text-lg": size === "sm",
        "text-xl": size === "md",
        "text-2xl": size === "lg",
    },
    className
 )}>
    {children}
    </Comp>
    )
}
export default Heading;