import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

function CartButton() {
  return (
    <button type="button" className="flex justify-center items-center text-[34px] ml-[20px] relative pl-3 py-1">
      <AiOutlineShoppingCart />
      <span className="flex justify-center items-center bg-red-500 w-6 h-6 absolute top-0 left-0 text-xs font-semibold rounded-full">
        1
      </span>
    </button>
  );
}

export default CartButton;
