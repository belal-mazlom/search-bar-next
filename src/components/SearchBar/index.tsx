import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  return (
    <div className="relative py-2 px-4">
      <MagnifyingGlassIcon className="absolute left-8 top-5 h-5 w-5 text-gray-400" />
      <input
        type="text"
        placeholder="Search"
        className="w-full rounded-full border-2 border-gray-300 p-2 pl-10"
      />
    </div>
  );
};

export default SearchBar;
