"use client"
import { useContext } from "react";
import { BsHandbagFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
const CartMobileIcon = () => {
  // console.log(useContext(CartContext));
  const { setIsOpen, isOpen, itemAmount } = useContext(CartContext);
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="bg-tertiary w-[72px] 
    h-[72px] rounded-full flex justify-center items-center
     text-white cursor-pointer fixed right-[10%] 
     bottom-[5%] z-20 lg:hidden"
    >
      <BsHandbagFill className="text-4xl" />
      <span
        className="absolute text-white bottom-3 ring-4 
      gradient w-5 h-5 flex justify-center items-center 
      rounded-full font-robotoCondensed text-[13px]"
      >
        {itemAmount}
      </span>
    </div>
  );
};

export default CartMobileIcon;