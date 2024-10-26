import React, { useEffect, useState } from "react";
import FilterProduct from "./FilterProduct";
import Products from "./Products";
import CardData from "./CardData";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

function Home() {
  //   const productArray = [1, 2, 3, 4, 5, 6];
  const { searchProduct, radioFilter } = useSelector((store) => store.search);
  const [filterProduct, setFilterProduct] = useState(CardData);
  // console.log("Search Product:", searchProduct);
  // console.log("Radio Filter:", radioFilter);

  useEffect(() => {
    let filteredData = [...CardData];
    if (radioFilter?.Prices) {
      if (radioFilter.Prices === "Low to High") {
        filteredData.sort((a, b) => a.price - b.price);
      } else if (radioFilter.Prices === "High to Low") {
        filteredData.sort((a, b) => b.price - a.price);
      }
    }
    filteredData =
      filteredData.length > 0 &&
      filteredData.filter((item) => {
        const searchFilter = searchProduct
          ? item?.productName
              ?.toLowerCase()
              .includes(searchProduct.toLowerCase())
          : true;

        const radioFilterCondition = radioFilter?.Category
          ? item?.category?.toLowerCase() === radioFilter.Category.toLowerCase()
          : true;

        return searchFilter && radioFilterCondition;
      });

    setFilterProduct(filteredData);
  }, [searchProduct, radioFilter]);

  return (
    <div className="w-full dark:bg-slate-900  dark:text-white">
      <div className="max-w-7xl mx-auto mt-6  p-4 pt-[60px] dark:bg-slate-900 ">
        <div className="flex  gap-5">
          <div className="w-[40%] md:w-[20%] h-[88vh]">
            <FilterProduct />
          </div>

          <div className=" flex-1 h-[88vh] overflow-y-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3  lg:ml-12 gap-y-4">
              {filterProduct.map((item, index) => (
                <ProductCard key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
