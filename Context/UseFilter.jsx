"use client";
// this is globle store for all the filters on the page of ecommerce
import { createContext, useContext, useReducer, useState } from "react";

import { Reducer, initialState } from "./SearchReducer";
import { Filter_Reducer } from "./SiderBarReducers";

// for creating context
const Context = createContext();
export const MainContextProvider = ({ children }) => {
  let [productData, setProductData] = useState();
  let [search, dis] = useReducer(Reducer, initialState);
  let [filter, dispatch_filter] = useReducer(Filter_Reducer, {
    sort: null,
    price_range: [0, 100000],
    category: null,
  });

  let [pricevalue, setpricevalue] = useState([0, 100000]);

  // -------------------------------------------------------------------------------------------------------------------------------------------------------
  return (
    <Context.Provider
      value={{
        productData,
        setProductData,
        filter,
        dispatch_filter,
        search,
        dis,
        pricevalue,
        setpricevalue,
      }}
    >
      {children}
    </Context.Provider>
  );
};

// this is a custom hook from where we will access the data
export const useFilter = () => {
  const MyContext = useContext(Context);
  if (MyContext === null) {
    throw new Error("useCart must be used within a CardContextProvider");
  }

  return MyContext;
};
