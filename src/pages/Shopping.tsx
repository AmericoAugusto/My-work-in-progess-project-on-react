import Produtos from "../component/Produtos";
import { useNavigate } from "react-router-dom";
import Cart from "../assets/cart.svg";
import Profile from "../assets/profile.svg";
import Text from "../component/Text";



const Shopping = () => {
const navigate = useNavigate();

const openCart = () => {
  navigate("/InsideCart");}
const openProfile = () => {
  navigate("/InsideProfile");
  }
    return (
      <div className="bg-gray-200 w-screen h-screen flex-col ">
        <header className="bg-red-100 w-screen h-12  flex justify-end align-center ">
       
        <img src={Cart} onClick={openCart} alt="cart" className="w-6 h-6 block mr-1  cursor-pointer" />
        <Text className="text-gray-200" >YOUR CART</Text>
        <img src={Profile} onClick={openProfile} alt="cart" className="w-6 h-6 mr-1 cursor-pointer" />
        <Text className="text-gray-200">YOUR PROFILE</Text>
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