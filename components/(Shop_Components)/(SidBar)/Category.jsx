import { useFilter } from "@/Context/UseFilter";
import React, { useState } from "react";

function Category() {
  const [catData, setCatData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  let { productData, filter, dispatch_filter } = useFilter();

  return (
    <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
        <span className="text-sm font-medium"> Category </span>
        <span className="transition group-open:-rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </summary>
      <div className="border-t border-gray-200 bg-white">
        <ul className="space-y-1 border-t border-gray-200 p-4">
          {productData
            ?.filter(
              (value, index) =>
                productData.findIndex(
                  (item) => item.category === value.category
                ) === index
            )
            ?.map((item, index) => (
              <li key={index}>
                <label
                  htmlFor={`Filter${item.category}`}
                  className="inline-flex items-center gap-2"
                >
                  <input
                    type="radio"
                    id={`Filter${item.category}`}
                    className="size-5 rounded border-gray-300"
                    name="catogorytest"
                    value={item.category}
                    onChange={(e) => {
                      dispatch_filter({
                        type: "Category_Filter",
                        payload: e.target.value,
                      });
                    }}
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {item.category}
                  </span>
                </label>
              </li>
            ))}
          {/* All one  */}
        </ul>
      </div>
    </details>
  );
}

export default Category;
