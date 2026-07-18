import React from "react";

const Navbar = ({ setIsCartOpen }) => {
  //   console.log(setIsCartOpen);
  return (
    <div className="flex flex-row justify-around gap-5 p-5 bg-black text-amber-100">
      <div>logo</div>
      <div className=" flex justify-between gap-4">
        <div
          onClick={() => {
            setIsCartOpen(false);
          }}
        >
          Home
        </div>
        <div
          onClick={() => {
            setIsCartOpen(true);
          }}
        >
          Cart
        </div>
      </div>
      <div>Crate</div>
    </div>
  );
};

export default Navbar;
