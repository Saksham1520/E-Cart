import React, { useEffect, useState } from "react";

import CardData from "./CardData";
import { useDispatch } from "react-redux";
import { setRadioFilter, setSearchProduct } from "../Redux/SearchSlice";

function FilterProduct() {
  const filterData = [
    {
      filterType: "Category",
      array: ["Mobiles", "Clothes", "Perfumes", "Shoes", "TV", "Watches"],
    },
    {
      filterType: "Prices",
      array: ["Low to High", "High to Low"],
    },
  ];

  const dispatch = useDispatch();
  const [searchedText, setSearchedText] = useState("");
  useEffect(() => {
    dispatch(setSearchProduct(searchedText));
  }, [searchedText]);

  const [selectedValue, setSelectedValue] = useState({
    Category: "",
    Prices: "",
  });

  const onValueChangeHandler = (value, filterType) => {
    setSelectedValue((prevstate) => ({
      ...prevstate,
      [filterType]: value,
    }));
  };

  useEffect(() => {
    dispatch(setRadioFilter(selectedValue));
  }, [selectedValue]);

  return (
    <div className="">
      <h1 className="font-bold text-2xl">Filter Products</h1>
      <hr className="mt-2 " />
      <div>
        <input
          type="text"
          onChange={(e) => setSearchedText(e.target.value)}
          placeholder="search here"
          className="mt-4 w-[100%] p-2 border-2 rounded-md "
        />
      </div>
      <div className="mt-6 space-y-4 text-2xl">
        {" "}
        {filterData.map((data, index) => (
          <div key={index}>
            <h1 className="font-bold">{data.filterType}</h1>
            {data.array.map((item, idx) => {
              const itemId = `id${index}-${idx}`;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 mt-2 font-semibold text-sm"
                >
                  <input
                    type="radio"
                    id={itemId}
                    name={data.filterType}
                    value={item}
                    onClick={() => onValueChangeHandler(item, data.filterType)}
                  />
                  <label htmlFor={itemId}>{item}</label>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterProduct;
