import React from "react";
import Category from "./Category";
import Price from "./Price";
import { useFilter } from "@/Context/UseFilter";

const MainSideBar = () => {
  let { filter, dispatch_filter } = useFilter();
  return (
    <div className="hidden space-y-4 lg:block">
      <p className="block text-xs font-medium text-gray-700">Filters</p>
      <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
          <span className="text-sm font-medium"> Sort </span>
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
        <header className="flex items-center justify-between p-4">
          <span className="text-sm text-gray-700">
            {" "}
            Set prices accounding to Assanding or Desending order
          </span>
        </header>
        <div className="border-t border-gray-200 bg-white">
          <ul className="space-y-1 border-t border-gray-200 p-4">
            {/* All one  */}
            <li>
              <label
                htmlFor="FilterRed"
                className="inline-flex items-center gap-2"
              >
                <input
                  type="radio"
                  className="size-5 rounded form-radio border-gray-300"
                  name="test"
                  value="low"
                  onChange={(e) => {
                    dispatch_filter({
                      type: "Filter_Sort",
                      payload: e.target.value,
                    });
                  }}
                />
                <span className="text-sm font-medium text-gray-700">
                  {" "}
                  Assanding Price
                </span>
              </label>
            </li>

            <li>
              <label
                htmlFor="FilterRed"
                className="inline-flex items-center gap-2"
              >
                <input
                  type="radio"
                  value="high"
                  className="size-5 rounded border-gray-300"
                  name="test"
                  onChange={(e) => {
                    dispatch_filter({
                      type: "Filter_Sort",
                      payload: e.target.value,
                    });
                  }}
                />
                <span className="text-sm font-medium text-gray-700">
                  Desending Price
                </span>
              </label>
            </li>
          </ul>
        </div>
      </details>

      <div>
        <div className="mt-1 space-y-2">
          <Price />

          <Category />
          <button
            className="bg-black text-white p-4 "
            onClick={() => {
              window.location.reload();
            }}
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainSideBar;
