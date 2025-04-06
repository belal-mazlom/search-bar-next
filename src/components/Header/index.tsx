import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Navigation from "./Navigation";
import SearchBar from "../SearchBar";
import DarkModeSwitch from "./DarkModeSwitch";
const Header = () => {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="hidden md:flex mx-auto max-w-7xl min-h-24 px-4 items-center justify-between flex-col md:flex-row gap-4">
        <div className="left-side flex">
          <Image
            className="size-14"
            src={logo}
            alt="Your Company"
            width={120}
            height={120}
          />
          <Navigation />
        </div>
        <div className="right-side flex items-center gap-4">
          <DarkModeSwitch />
          <SearchBar />
        </div>
      </div>
      <div className="md:hidden mx-auto max-w-7xl min-h-24 px-4 pt-4 grid grid-cols-3">
        <Image
          className="size-14 col-start-2 md:col-start-1 md:row-start-1 place-self-center md:place-self-start"
          src={logo}
          alt="Your Company"
          width={120}
          height={120}
        />
        <Navigation classes="col-start-1 row-start-1 md:col-start-2 content-center" />
        <DarkModeSwitch classes="col-start-3 row-start-1 md:col-start-3 md:row-start-1 justify-self-end self-center" />
        <SearchBar classes="w-full col-start-1 row-start-2 md:col-start-3 md:row-start-1 col-span-3 md:col-span-1" />
      </div>
    </header>
  );
};

export default Header;
