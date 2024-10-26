import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { FaRegStar } from "react-icons/fa";
import { addToCart } from "../Redux/CartSlice";

function ProductCard({ item }) {
  const dispatch = useDispatch();

  const onChangeHandler = (e) => {
    dispatch(addToCart(e));
  };

  return (
    <div className="max-w-[250px]  border-2 rounded-t-lg shadow-lg">
      <div>
        <img
          className="w-[250px] h-[240px] rounded-t-lg"
          src={item.img}
          alt=""
        />
      </div>
      <div className="mx-2">
        <h1 className="font-bold">{item.brand} </h1>
        <h2 className="font-serif">{item.productDescription}</h2>
      </div>
      <div className="mt-2 flex items-center justify-between mx-2">
        <h1 className="font-bold">
          Price: <span className="font-normal">${item.price}</span>
        </h1>
        <div className="flex items-center mt-1">
          <div className="bg-green-500 font-bold  px-2 rounded-full flex items-center">
            <span>{item.rating}</span>
            <FaRegStar className="ml-1" />
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={() => onChangeHandler(item)}
          className="border-2 bg-red-500 text-white rounded-md px-2 py-1 m-2 w-[200px]"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
