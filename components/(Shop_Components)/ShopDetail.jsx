"use client";
import React, { useEffect, Suspense, useState } from "react";
import MainSideBar from "./(SidBar)/MainSideBar";

import SearchBar from "../reuseable/SearchBar";
import ShopCom from "./ShopCom";
import { useFilter } from "@/Context/UseFilter";
import Price from "./(SidBar)/Price";

function ShopDetail({ products }) {
  let { productData, setProductData } = useFilter();

  useEffect(() => {
    setProductData(products);
  }, [productData]);
  return (
    <section>
      {/* {JSON.stringify(reudxProducts)} */}

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          {/* may cause problems  */}
          <div className=" bg-black py-8 flex  justify-between mb-10">
            <h2 class="text-xl bg-white px-10 ml-1 md:ml-20   text-black py-1  font-bold sm:text-3xl">
              Products
            </h2>
            <SearchBar />
          </div>
        </header>

        {/* Price end  */}

        <div className="mt-8 block lg:hidden">
          <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
            <span className="text-sm font-medium"> Filters & Sorting </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 rtl:rotate-180"
            >
              <path
                strokeLinecap="round"
                JJ
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
          <MainSideBar />
          <Suspense fallback={<div>Loading</div>}>
            <div className="lg:col-span-3">
              {/* add dynamic data here  */}
              <ShopCom products={productData} />
            </div>
          </Suspense>
        </div>
      </div>
    </section>
  );
}

export default ShopDetail;
