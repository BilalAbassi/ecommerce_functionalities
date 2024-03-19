import React from "react";
import Card from "../reuseable/Card";
import { useFilter } from "@/Context/UseFilter";

const ShopCom = ({ products }) => {
  let { search, filter, pricevalue } = useFilter();

  let newFilterProducts = () => {
    let newproducts = products;
    if (filter.sort) {
      newproducts = newproducts.sort((a, b) => {
        return filter.sort === "low" ? a.price - b.price : b.price - a.price;
      });
    }
    if (filter.category) {
      newproducts = newproducts.filter((i) => i.category === filter.category);
    }
    let min = pricevalue[0];
    let max = pricevalue[1];
    if (pricevalue) {
      newproducts = newproducts?.filter(
        (item) => item.price >= min && item.price <= max
      );
    }

    return newproducts;
  };

  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {newFilterProducts()
        ?.filter((item) => {
          return (
            item.title.toLowerCase().includes(search.searchkey) ||
            item.category.toLowerCase().includes(search.searchkey) ||
            item.description.toLowerCase().includes(search.searchkey)
          );
        })
        ?.map((product) => (
          <Card products={product} />
        ))}
    </ul>
  );
};

export default ShopCom;
