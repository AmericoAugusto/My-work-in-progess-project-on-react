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
      <div className= " bg-gray-200 w-screen h-screen flex-col ">
        <header className="bg-red-100 w-screen h-12 rounded  flex justify-end align-center ">
        <img src={Cart} onClick={openCart} alt="cart" className="w-6 h-6 block mr-1  cursor-pointer" />
        <Text className="text-gray-200" >YOUR CART</Text>
        <img src={Profile} onClick={openProfile} alt="cart" className="w-6 h-6 mr-1 cursor-pointer" />
        <Text className="text-gray-200">YOUR PROFILE</Text>
        </header>
        <main className="grid items-center mt-2 mr-4 ml-4 justify-items-center gap-16 grid-cols-3	grid-template-columns: repeat(3, minmax(0, 1fr)) grid-rows-4	grid-template-rows: repeat(4, minmax(56px, 1fr));">
        <Produtos className="py-4 w-full h-full bg-gray-100 rounded  font-semibold text-black text-sm hover:to-red-200 focus:ring-2 ring-black ">oi</Produtos>
        <Produtos className="py-4 w-full h-full bg-gray-100 rounded  font-semibold text-black text-sm hover:to-red-200 focus:ring-2 ring-black ">oi</Produtos>
        <Produtos className="py-4 w-full h-full bg-gray-100 rounded  font-semibold text-black text-sm hover:to-red-200 focus:ring-2 ring-black ">oi</Produtos>
        <Produtos className="py-4 w-full h-full bg-gray-100 rounded  font-semibold text-black text-sm hover:to-red-200 focus:ring-2 ring-black ">oi</Produtos>
        <Produtos className="py-4 w-full h-full bg-gray-100 rounded  font-semibold text-black text-sm hover:to-red-200 focus:ring-2 ring-black ">oi</Produtos>
        <Produtos className="py-4 w-full h-full bg-gray-100 rounded  font-semibold text-black text-sm hover:to-red-200 focus:ring-2 ring-black ">oi</Produtos>
        <Produtos className="py-4 w-full h-full bg-gray-100 rounded  font-semibold text-black text-sm hover:to-red-200 focus:ring-2 ring-black ">oi</Produtos>
        <Produtos className="py-4 w-full h-full bg-gray-100 rounded  font-semibold text-black text-sm hover:to-red-200 focus:ring-2 ring-black ">oi</Produtos>
        <Produtos className="py-4 w-full h-full bg-gray-100 rounded  font-semibold text-black text-sm hover:to-red-200 focus:ring-2 ring-black ">oi</Produtos>
        <Produtos className="py-4 w-full h-full bg-gray-100 rounded  font-semibold text-black text-sm hover:to-red-200 focus:ring-2 ring-black ">oi</Produtos>
        <Produtos className="py-4 w-full h-full bg-gray-100 rounded  font-semibold text-black text-sm hover:to-red-200 focus:ring-2 ring-black ">oi</Produtos>
        <Produtos className="py-4 w-full h-full bg-gray-100 rounded  font-semibold text-black text-sm hover:to-red-200 focus:ring-2 ring-black ">oi</Produtos>
        </main> 
        </div>
    )
}
export default Shopping;