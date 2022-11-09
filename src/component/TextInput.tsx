import React, { InputHTMLAttributes, ReactNode, useState } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot"  
import { HtmlHTMLAttributes } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> { 
    placeholder?: string; 
    

    
}
const TextInput = ({placeholder}: TextInputProps ) => {

    return (
        <div className=" flex flex-row items-center">
    <form className='flex flex-col items-stretch'>
  <label htmlFor='email' className='font-semibold'>
    
    
  </label>
</form>
 <input className="bg-gray-100 mb-4 w-96 h-6 rounded flex-1 text-black text-xs placeholder:text-black outline-none focus:ring-2 ring-red-100 "


/> 
{placeholder}
</div>
   )
}
export default TextInput;