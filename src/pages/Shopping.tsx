import Produtos from "../component/Produtos";
import React from "react";
import Button from "../component/Button";
import { useNavigate } from "react-router-dom";
import Cart from "../assets/cart.svg";
import Profile from "../assets/profile.svg";



const Shopping = () => {
const navigate = useNavigate();

const openCart = () => {
console.log("clicado");
}
const openProfile = () => {
  console.log("clicado");
  }
  const handleClick = () => {  
    navigate("/Produtos");
  }
    return (
      <div className="bg-gray-200 w-screen h-screen flex-col ">
        <header className="bg-red-100 w-screen h-12  flex justify-end align-center ">
        <h1>SHOPPING</h1>
        <img src={Cart} onClick={openCart} alt="cart" className="w-6 h-6 block mr-1  cursor-pointer" />
        <img src={Profile} onClick={openProfile} alt="cart" className="w-6 h-6 mr-1 cursor-pointer" />
        </header>
        <main className="flex flex-col items-center">
        <Produtos className="py-4 px-3 bg-gray-100 rounded mt-4 font-semibold text-black text-sm hover:to-red-200 focus:ring-2 ring-black ">oi</Produtos>
        <Produtos className="py-4 px-3 bg-gray-100 rounded mt-4 font-semibold text-black text-sm hover:to-red-200 focus:ring-2 ring-black ">oi</Produtos>
        <Produtos className="py-4 px-3 bg-gray-100 rounded mt-4 font-semibold text-black text-sm hover:to-red-200 focus:ring-2 ring-black ">oi</Produtos>
        <Produtos className="py-4 px-3 bg-gray-100 rounded mt-4 font-semibold text-black text-sm hover:to-red-200 focus:ring-2 ring-black ">oi</Produtos>
        <Produtos className="py-4 px-3 bg-gray-100 rounded mt-4 font-semibold text-black text-sm hover:to-red-200 focus:ring-2 ring-black ">oi</Produtos>
        <Produtos className="py-4 px-3 bg-gray-100 rounded mt-4 font-semibold text-black text-sm hover:to-red-200 focus:ring-2 ring-black ">oi</Produtos>
        </main>
            
        </div>
    )
}

export default Shopping;