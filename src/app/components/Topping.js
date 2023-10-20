import { useEffect, useState } from "react";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";
const Topping = ({ topping, additionalTopping, setAdditionalTopping }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };
  const handleTopping = () => {
    if (isChecked) {
      const newToppings = new Set([...additionalTopping, { ...topping }]);
      //  console.log(newToppings)
      setAdditionalTopping(Array.from(newToppings));
      // console.log(additionalTopping)
    } else {
      const newToppings = additionalTopping.filter((toppingObject) => {
        return toppingObject.name !== topping.name;
      });
      setAdditionalTopping(newToppings)
    }
  };
  useEffect(() => {
    handleTopping();
  }, [isChecked]);
  // console.log(additionalTopping)
  return (
    <div
      className={`${isChecked && "border-orange"} 
  w-full max-w-[110px] h-[140px] p-1 flex flex-col items-center justify-center border rounded-md bg-white relative`}
    >
      <Image
        src={topping.image}
        height={70}
        width={70}
        alt=""
        className="mb-2"
      />
      <div className="text-sm capitalize text-center ">{topping.name}</div>
      <input
        className="absolute w-full h-full opacity-0 cursor-pointer "
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckBox}
      />
      <div
        className={`${
          isChecked ? "opacity-100" : "opacity-0"
        } absolute top-1  right-1 `}
      >
        <IoMdCheckmark className="text-xl text-orange" />
      </div>
    </div>
  );
};

export default Topping;
