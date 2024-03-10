import Link from "next/link";
import React from "react";

const Card = ({ products }) => {
  return (
    <Link href="#" className="group relative block overflow-hidden">
      <img
        src={products?.image}
        alt=""
        className="h-64 w-full object-contain transition duration-500 group-hover:scale-105 sm:h-72"
      />

      <div className="relative border border-gray-100 bg-white p-6">
        <span className="whitespace-nowrap bg-black text-white px-3 py-1.5 text-xs font-medium">
          {" "}
          New{" "}
        </span>

        <h3 className="mt-4 text-lg font-medium text-gray-900">Robot Toy</h3>

        <p className="mt-1.5 text-sm text-gray-700">$14.99</p>
      </div>
    </Link>
  );
};

export default Card;
