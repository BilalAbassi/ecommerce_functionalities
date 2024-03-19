import { useFilter } from "@/Context/UseFilter";
import React from "react";

const SearchBar = () => {
  let { dis } = useFilter();
  return (
    <input
      placeholder="searchProducts"
      className="bg-white text-black py-1.5 rounded-full hidden md:block px-10 mr-10"
      onChange={(e) => {
        dis({
          type: "SEARCH",
          payload: e.target.value,
        });
      }}
    />
  );
};

export default SearchBar;
