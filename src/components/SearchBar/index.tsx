"use client";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { classNames, debounce } from "@/utils";
import { Product } from "@/types/SearchBar";
import Suggestions from "./Suggestions";

const SearchBar = ({ classes }: { classes?: string }) => {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState<Product[]>([]);

  const fetchSearchResults = async (searchTerm: string) => {
    if (!searchTerm.length) {
      setItems([]);
      return;
    }

    const response = await axios.get(
      `https://dummyjson.com/products/search?q=${searchTerm}`
    );
    const items: Product[] = response.data.products;
    setItems(items);
  };

  const debouncedSearch = useCallback(
    debounce((term: string) => fetchSearchResults(term), 500),
    []
  );

  useEffect(() => {
    const fetchItems = async () => {
      debouncedSearch(search);
    };
    fetchItems();

    return () => {
      debouncedSearch("");
    };
  }, [search, debouncedSearch]);

  return (
    <div className={classNames("relative md:static", classes)}>
      <div className="relative py-2">
        <MagnifyingGlassIcon className="absolute left-4 top-5 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="w-full md:w-auto rounded-full border-2 border-gray-300 p-2 pl-10"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search.length > 0 && (
          <XMarkIcon
            className="absolute right-8 top-5 h-5 w-5 text-gray-800 dark:text-gray-200"
            onClick={() => setSearch("")}
          />
        )}
      </div>
      {items.length > 0 && <Suggestions items={items} />}
    </div>
  );
};

export default SearchBar;
