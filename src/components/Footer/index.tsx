const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="grid-row-start-2 grid-row-end-3 w-full border-t border-gray-200">
      <div className="mx-auto max-w-7xl py-8 px-4">My Ecommerce App &copy; {currentYear}</div>
    </footer>
  );
};

export default Footer;
