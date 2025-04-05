import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="mx-auto max-w-7xl min-h-24 flex items-center justify-center md:justify-start">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
