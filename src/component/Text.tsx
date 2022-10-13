import {ReactNode} from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot"  

interface TextProps {
    size?: "sm" | "md" | "lg";
    children: string;
    asChild?: boolean;
    className?: string;
}
const Text = ({size = "md", children, asChild, className}: TextProps ) => {
    const Comp = asChild ? Slot : "span";
    return (
 <Comp className={clsx(
    "text-gray-100 font-sans",
    {
        "text-xs": size === "sm",
        "text-sm": size === "sm",
        "text-lg": size === "lg",
    },
    className
 )}>

{children}
    </Comp>
    )
}
export default Text;