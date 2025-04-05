"use client";

import { useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Suggestions from "./Suggestions";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const items = [
    {
      id: "1",
      name: "Product 1",
      price: 100,
      image: "https://cdn.dummyjson.com/products/images/sports-accessories/Tennis%20Ball/thumbnail.png",
    },
    {
      id: "2",
      name: "Product 2",
      price: 200,
      image: "https://cdn.dummyjson.com/products/images/sports-accessories/Tennis%20Ball/thumbnail.png",
    },
    {
      id: "3",
      name: "Product 3",
      price: 300,
      image: "https://cdn.dummyjson.com/products/images/sports-accessories/Tennis%20Ball/thumbnail.png",
    },
    {
      id: "4",
      name: "Product 4",
      price: 400,
      image: "https://cdn.dummyjson.com/products/images/sports-accessories/Tennis%20Ball/thumbnail.png",
    },
  ];

  return (
    <div className="relative py-2 px-4">
      <MagnifyingGlassIcon className="absolute left-8 top-5 h-5 w-5 text-gray-400" />
      <input
        type="text"
        placeholder="Search"
        className="w-full rounded-full border-2 border-gray-300 p-2 pl-10"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search.length > 0 && (
        <XMarkIcon
          className="absolute right-8 top-5 h-5 w-5 text-gray-800"
          onClick={() => setSearch("")}
        />
      )}
      <Suggestions items={items} />
    </div>
  );
};

export default SearchBar;
