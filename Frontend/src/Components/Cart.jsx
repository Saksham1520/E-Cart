import React, { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { CiSquareMinus } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { CiSquarePlus } from "react-icons/ci";
import { BsCurrencyDollar } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  decreament,
  deleteAllItems,
  deleteItem,
  increament,
} from "../Redux/CartSlice";
function Cart() {
  const [totalPrice, setTotalPrice] = useState(0);
  //   const arr = [1, 2];
  const { carts } = useSelector((store) => store.allcart);
  const dispatch = useDispatch();

  const increamentHandler = (e) => {
    dispatch(increament(e));
  };

  const decreamentHandler = (data) => {
    dispatch(decreament(data));
  };
  const deleteHandler = (data) => {
    dispatch(deleteItem(data));
  };

  const emptyCart = () => {
    dispatch(deleteAllItems([]));
  };

  const total = () => {
    let totalPrice = 0;
    carts.map((item) => {
      totalPrice += item.price * item.qnty;
    });
    setTotalPrice(totalPrice);
  };
  useEffect(() => {
    total();
  }, [carts]);
  return (
    <div className="h-screen dark:bg-slate-900  dark:text-white">
      <div className=" mx-auto mt-6  p-4 pt-[60px]l ">
        <div className=" w-[60%] h-[200px] mx-auto mt-[100px]">
          <div className=" h-[50px] bg-black/85 flex items-center justify-between">
            <h1 className="text-white ml-2">Cart Calculation</h1>
            {carts.length > 0 && (
              <button
                onClick={emptyCart}
                className="text-white bg-red-600 rounded-lg px-2 py-1.5 mr-2"
              >
                Empty Cart
              </button>
            )}
          </div>

          {carts.length > 0 ? (
            <div className=" h-full ">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-200">
                    <td className="border px-4 py-2 font-semibold">Action</td>
                    <td className="border px-4 py-2 font-semibold">Product</td>
                    <td className="border px-4 py-2 font-semibold">Name</td>
                    <td className="border px-4 py-2 font-semibold">Price</td>
                    <td className="border px-4 py-2 font-semibold text-center">
                      Qty
                    </td>
                    <td className="border px-4 py-2 font-semibold text-right">
                      Total Amount
                    </td>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((item) => {
                    return (
                      <>
                        <tr className="border-b-2">
                          <td>
                            <button className="border rounded-md px-4 py-2 ml-2.5 bg-red-500 text-white">
                              <AiOutlineDelete
                                onClick={() => deleteHandler(item)}
                              />
                            </button>
                          </td>
                          <td>
                            <img
                              className="w-[50px] h-[50px] ml-4"
                              src={item.img}
                              alt=""
                            />
                          </td>
                          <td>
                            <p className="ml-2.5">{item.productName}</p>
                          </td>
                          <td>
                            <p className="ml-2.5">${item.price}</p>
                          </td>
                          <td>
                            <div className="flex items-center ">
                              <CiSquareMinus
                                onClick={() => decreamentHandler(item)}
                                className="text-2xl"
                              />
                              <input
                                className="max-w-[70px] min-h-[25px] border-2 rounded-md text-center"
                                type="text"
                                disabled
                                value={item.qnty}
                              />
                              <CiSquarePlus
                                onClick={() => increamentHandler(item)}
                                className="text-2xl"
                              />
                            </div>
                          </td>
                          <td>
                            <div className="flex items-center justify-end mr-2">
                              <BsCurrencyDollar />
                              <h1>{Number(item.price) * item.qnty}</h1>
                            </div>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <th>&nbsp;</th>
                    <th colSpan={3}>&nbsp;</th>
                    <th>
                      Items in Cart :{" "}
                      <span className="text-red-600">{carts.length}</span>
                    </th>
                    <th>
                      Total Cart Price :{" "}
                      <span className="text-red-600">${totalPrice}</span>
                    </th>
                  </tr>
                </tfoot>
              </table>
            </div>
          ) : (
            <div className="border-2 flex h-full  justify-center">
              <div className="flex flex-col items-center justify-center gap-2">
                <FaCartShopping className="text-5xl" />
                <h1>Cart Empty</h1>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
