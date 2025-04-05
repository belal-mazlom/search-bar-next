import Navigation from "./Navigation";
import SearchBar from "../SearchBar";
const Header = () => {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="mx-auto max-w-7xl min-h-24 flex items-center justify-between flex-col md:flex-row gap-4">
        <div className="left-side">
          <Navigation />
        </div>
        <div className="right-side w-full md:w-auto">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
