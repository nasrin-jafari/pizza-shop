"use client";
import React, { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import PizzaDetails from "./PizzaDetails";
import { IoCloseOutline } from "react-icons/io5";
Modal.setAppElement("body");
const modalStyles = {
  overlay: {
    backgroundColor: "rgb(0,0,0,0.5)",
  },
};
const Pizza = ({ pizza }) => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  return (
    <div
      className="group py-2 
    px-4 xl:py-4 xl:px-2 rounded-xl border flex flex-col items-center text-justify"
    >
      <Image
        width={270}
        height={270}
        alt="image-pizza"
        src={pizza.image}
        onClick={openModal}
        priority={1}
        className="lg:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer"
      />
      <div onClick={openModal}>
        <div className="text-xl font-bold mb-3 capitalize cursor-pointer ">
          {pizza.name}
        </div>
      </div>
      <div className="text-sm font-medium min-h-[60px] mb-6">
        {pizza.description}
      </div>
      <div className="w-full mb-6 flex items-center  justify-center lg:justify-between">
        <div className="hidden lg:flex font-semibold">
          starts at {pizza.priceSm}
        </div>
        <button
          onClick={openModal}
          className="hidden lg:flex gradient text-white text-sm font-semibold rounded-lg btn-sm"
        >
          Choose
        </button>
        <button
          onClick={openModal}
          className="btn btn-sm gradient lg:hidden px-3"
        >
          start at {pizza.priceSm}
        </button>
      </div>
      {modal && (
        <Modal
          isOpen={modal}
          style={modalStyles}
          onRequestClose={closeModal}
          contentLable="Pizza Modal"
          className="bg-white w-full h-full lg:max-w-[900px] 
          lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] 
          lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none"
        >
          <div
            onClick={closeModal}
            className="absolute z-30 right-2 top-2 hover:scale-110 duration-200 cursor-pointer"
          >
            <IoCloseOutline className="text-4xl text-orange" />
          </div>
          <PizzaDetails pizza={pizza} modal={modal} setModal={setModal} />
        </Modal>
      )}
    </div>
  );
};

export default Pizza;
