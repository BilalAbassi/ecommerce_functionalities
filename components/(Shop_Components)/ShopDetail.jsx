import React from "react";
import MainSideBar from "./(SidBar)/MainSideBar";
import Link from "next/link";
import Card from "../reuseable/Card";
import SearchBar from "../reuseable/SearchBar";

function ShopDetail({ products }) {
  return (
    <section>
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          {/* may cause problems  */}
          <div className=" bg-black py-8 flex  justify-between mb-10">
            <h2 class="text-xl bg-white px-10 ml-1 md:ml-20   text-black py-1  font-bold sm:text-3xl">
              Products
            </h2>
            <SearchBar />
          </div>
        </header>

        <div class="mt-8 block lg:hidden">
          <button class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
            <span class="text-sm font-medium"> Filters & Sorting </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4 rtl:rotate-180"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <div class="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
          <MainSideBar />
          <div class="lg:col-span-3">
            {/* add dynamic data here  */}
            <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <Card products={product} id={product.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopDetail;
