import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot"  



const Produtos = ({children, ...props} ) => {
  
    return (
 <Produtos className={clsx(
    "py-4 px-3 bg-gray-100 rounded mt-4 font-semibold text-black text-sm hover:to-red-200 focus:ring-2 ring-black ",
 )}
   {...props}
   >
    {children}
    </Produtos>
    )
}
export default Produtos;

