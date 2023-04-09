import React from "react";
import { getStoredCart } from "../utils/fakeDB";
import { useLoaderData } from "react-router-dom";

const Cart = () => {
  const cartArray = useLoaderData();
  console.log(cartArray);
  return (
    <div className="flex min-h-screen items-start justify-start bg-gray-100 text-gray-900 ">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
        <h2 className="font-4xl font-bold">
          {cartArray.length ? "Review Cart Items" : "Cart is EMPTY!!"}
        </h2>
      </div>
    </div>
  );
};

export default Cart;
