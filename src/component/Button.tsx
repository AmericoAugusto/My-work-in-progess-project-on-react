import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot"  

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
}
const Button = ({children, asChild, ...props}: ButtonProps ) => {
    const Comp = asChild ? Slot : "button";
    return (
 <Comp className={clsx(
    "py-4 px-3 bg-red-100 rounded mt-4 font-semibold text-black text-sm hover:to-red-200 focus:ring-2 ring-black ",
 )}
   {...props}
   >
    {children}
    </Comp>
    )
}
export default Button;